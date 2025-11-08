import { useState, useEffect } from 'react';
import { login as apiLogin, verifyToken, logout as apiLogout } from '../api';
import type { AdminUser, LoginRequest } from '../types';

interface UseAuthReturn {
  user: AdminUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

/**
 * Custom hook for managing admin authentication
 * Handles login, logout, and token verification
 */
export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        if (token) {
          const response = await verifyToken();
          if (response.valid && response.user) {
            setUser(response.user);
            setIsAuthenticated(true);
          } else {
            // Token invalid, clear it
            localStorage.removeItem('adminToken');
          }
        }
      } catch (err) {
        console.error('Auth check failed:', err);
        localStorage.removeItem('adminToken');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (credentials: LoginRequest) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await apiLogin(credentials);

      if (response.success && response.token && response.user) {
        localStorage.setItem('adminToken', response.token);
        setUser(response.user);
        setIsAuthenticated(true);
      } else {
        throw new Error(response.message || 'Login failed');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    apiLogout();
    setUser(null);
    setIsAuthenticated(false);
  };

  const clearError = () => {
    setError(null);
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    clearError,
  };
}
