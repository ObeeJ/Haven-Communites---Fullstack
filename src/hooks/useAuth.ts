/**
 * useAuth - Admin authentication hook
 * Manages JWT token, login, logout, and session validation
 * 1-hour token expiry with automatic cleanup
 */

import { useState, useEffect, useCallback } from 'react';
import { TokenManager } from '../services/tokenManager';
import { authApi, getErrorMessage } from '../services/api';
import type { AdminUser, LoginRequest, LoginResponse, TokenVerificationResponse } from '../admin/types';

interface UseAuthReturn {
  user: AdminUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
  clearError: () => void;
  isExpiringSoon: boolean;
  timeUntilExpiry: number;
}

/**
 * Custom hook for managing admin authentication
 * Handles login, logout, token verification, and expiry
 */
export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isExpiringSoon, setIsExpiringSoon] = useState(false);
  const [timeUntilExpiry, setTimeUntilExpiry] = useState(0);

  /**
   * Check authentication status on mount
   * Verifies token with backend
   */
  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (TokenManager.hasValidToken()) {
          const response = await authApi.verifyToken();

          if (response?.valid && response?.user) {
            setUser(response.user);
            setIsAuthenticated(true);
          } else {
            TokenManager.clear();
            setIsAuthenticated(false);
          }
        }
      } catch (err) {
        console.error('Auth check failed:', err);
        TokenManager.clear();
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  /**
   * Monitor token expiry and show warning
   */
  useEffect(() => {
    const interval = setInterval(() => {
      if (isAuthenticated) {
        setIsExpiringSoon(TokenManager.isExpiringSoon());
        setTimeUntilExpiry(TokenManager.getTimeUntilExpiry());

        // Auto-logout when expired
        if (TokenManager.getToken() === null) {
          setIsAuthenticated(false);
          setUser(null);
          // Don't show error - just silently logout
        }
      }
    }, 10000); // Check every 10 seconds

    return () => clearInterval(interval);
  }, [isAuthenticated]);

  /**
   * Admin login
   */
  const login = useCallback(async (credentials: LoginRequest) => {
    try {
      setIsLoading(true);
      setError(null);

      const response: LoginResponse = await authApi.login(
        credentials.email,
        credentials.password
      );

      if (response.success && response.token && response.user) {
        // Store token with expiry
        TokenManager.setToken(response.token, response.expiresIn || 3600);
        setUser(response.user);
        setIsAuthenticated(true);
      } else {
        throw new Error(response.message || 'Login failed');
      }
    } catch (err) {
      const errorMessage = getErrorMessage(err);
      setError(errorMessage);
      setIsAuthenticated(false);
      setUser(null);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Admin logout
   */
  const logout = useCallback(() => {
    try {
      authApi.logout().catch(() => {
        // Ignore error - logout locally anyway
      });
    } finally {
      TokenManager.clear();
      setUser(null);
      setIsAuthenticated(false);
      setError(null);
      setTimeUntilExpiry(0);
      setIsExpiringSoon(false);
    }
  }, []);

  /**
   * Clear error message
   */
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    clearError,
    isExpiringSoon,
    timeUntilExpiry,
  };
}
