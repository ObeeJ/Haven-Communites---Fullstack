/**
 * useFetch - Data fetching hook
 * Handles loading, error, and data states for API calls
 * Automatically retries on failure (optional)
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { ApiError, getErrorMessage } from '../services/api';

interface UseFetchOptions {
  immediate?: boolean; // Auto-fetch on mount (default: true)
  retry?: number; // Number of retries (default: 1)
  retryDelay?: number; // Delay between retries in ms (default: 1000)
  onError?: (error: Error) => void;
  onSuccess?: (data: any) => void;
}

interface UseFetchReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  errorMessage: string;
  refetch: () => Promise<void>;
}

/**
 * Custom hook for fetching data
 * @param fetchFn - Async function that returns data
 * @param options - Configuration options
 */
export function useFetch<T>(
  fetchFn: () => Promise<T>,
  options: UseFetchOptions = {}
): UseFetchReturn<T> {
  const {
    immediate = true,
    retry = 1,
    retryDelay = 1000,
    onError,
    onSuccess,
  } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState<Error | null>(null);
  const retryCountRef = useRef(0);
  const isMountedRef = useRef(true);

  const errorMessage = error ? getErrorMessage(error) : '';

  /**
   * Fetch data with retry logic
   */
  const fetchData = useCallback(async () => {
    if (!isMountedRef.current) return;

    setLoading(true);
    setError(null);
    retryCountRef.current = 0;

    const attemptFetch = async (): Promise<void> => {
      try {
        const result = await fetchFn();

        if (isMountedRef.current) {
          setData(result);
          setError(null);
          onSuccess?.(result);
        }
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));

        // Retry logic
        if (retryCountRef.current < retry) {
          retryCountRef.current++;
          await new Promise(resolve => setTimeout(resolve, retryDelay));
          return attemptFetch();
        }

        if (isMountedRef.current) {
          setError(error);
          setData(null);
          onError?.(error);
        }
      } finally {
        if (isMountedRef.current) {
          setLoading(false);
        }
      }
    };

    return attemptFetch();
  }, [fetchFn, retry, retryDelay, onError, onSuccess]);

  /**
   * Fetch on mount if immediate is true
   */
  useEffect(() => {
    isMountedRef.current = true;

    if (immediate) {
      fetchData();
    } else {
      setLoading(false);
    }

    return () => {
      isMountedRef.current = false;
    };
  }, [fetchData, immediate]);

  /**
   * Refetch function to manually trigger fetch
   */
  const refetch = useCallback(async () => {
    return fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    errorMessage,
    refetch,
  };
}

/**
 * useQuery - Similar to useFetch but with caching
 * Caches results for faster subsequent calls
 */
interface UseQueryOptions extends UseFetchOptions {
  cacheTime?: number; // Cache duration in ms (default: 5 minutes)
}

const queryCache = new Map<string, { data: any; timestamp: number }>();

export function useQuery<T>(
  key: string,
  fetchFn: () => Promise<T>,
  options: UseQueryOptions = {}
): UseFetchReturn<T> {
  const { cacheTime = 5 * 60 * 1000 } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(options.immediate !== false);
  const [error, setError] = useState<Error | null>(null);
  const isMountedRef = useRef(true);

  const errorMessage = error ? getErrorMessage(error) : '';

  const fetchData = useCallback(async () => {
    // Check cache
    const cached = queryCache.get(key);
    if (cached && Date.now() - cached.timestamp < cacheTime) {
      if (isMountedRef.current) {
        setData(cached.data);
        setLoading(false);
      }
      return;
    }

    if (!isMountedRef.current) return;
    setLoading(true);
    setError(null);

    try {
      const result = await fetchFn();

      if (isMountedRef.current) {
        setData(result);
        setError(null);

        // Cache result
        queryCache.set(key, { data: result, timestamp: Date.now() });

        options.onSuccess?.(result);
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));

      if (isMountedRef.current) {
        setError(error);
        setData(null);
        options.onError?.(error);
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, [key, fetchFn, cacheTime, options]);

  useEffect(() => {
    isMountedRef.current = true;

    if (options.immediate !== false) {
      fetchData();
    } else {
      setLoading(false);
    }

    return () => {
      isMountedRef.current = false;
    };
  }, [fetchData, options.immediate]);

  const refetch = useCallback(async () => {
    // Invalidate cache
    queryCache.delete(key);
    return fetchData();
  }, [key, fetchData]);

  return {
    data,
    loading,
    error,
    errorMessage,
    refetch,
  };
}
