/**
 * AuthContext - Global authentication state
 * Manages admin JWT token, user info, and authentication methods
 */

import { createContext, useContext, ReactNode } from 'react';
import { useAuth as useAuthHook } from '../hooks/useAuth';
import type { AdminUser, LoginRequest } from '../admin/types';

interface AuthContextType {
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
 * Create Auth context
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * AuthProvider - Wrap your app with this
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuthHook();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * useAuthContext - Use this hook to access auth state in any component
 */
export function useAuthContext(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }
  return context;
}
