/**
 * TokenManager - Handles JWT token storage and validation
 * Supports 1-hour expiry and automatic logout on token expiration
 */

export interface TokenData {
  token: string;
  expiresIn: number; // in seconds
}

class TokenManagerClass {
  private readonly TOKEN_KEY = 'adminToken';
  private readonly EXPIRY_KEY = 'adminTokenExpiry';

  /**
   * Store token with expiry time
   * @param token JWT token from backend
   * @param expiresIn Token lifetime in seconds (typically 3600 for 1 hour)
   */
  setToken(token: string, expiresIn: number): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    const expiryTime = Date.now() + expiresIn * 1000;
    localStorage.setItem(this.EXPIRY_KEY, expiryTime.toString());
  }

  /**
   * Get token if valid and not expired
   * @returns Token string or null if expired/not found
   */
  getToken(): string | null {
    const token = localStorage.getItem(this.TOKEN_KEY);
    const expiry = localStorage.getItem(this.EXPIRY_KEY);

    if (!token || !expiry) {
      return null;
    }

    // Check if expired
    if (Date.now() > parseInt(expiry)) {
      this.clear();
      return null;
    }

    return token;
  }

  /**
   * Check if token exists and is valid
   */
  hasValidToken(): boolean {
    return this.getToken() !== null;
  }

  /**
   * Check if token is expiring soon (within 5 minutes)
   * Used to show warning to user
   */
  isExpiringSoon(): boolean {
    const expiry = localStorage.getItem(this.EXPIRY_KEY);
    if (!expiry) return false;

    // Warn if expires in next 5 minutes
    const fiveMinutesMs = 5 * 60 * 1000;
    return Date.now() > parseInt(expiry) - fiveMinutesMs;
  }

  /**
   * Get remaining time until expiry in seconds
   */
  getTimeUntilExpiry(): number {
    const expiry = localStorage.getItem(this.EXPIRY_KEY);
    if (!expiry) return 0;

    const remaining = Math.floor((parseInt(expiry) - Date.now()) / 1000);
    return Math.max(0, remaining);
  }

  /**
   * Clear token from storage (logout)
   */
  clear(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.EXPIRY_KEY);
  }

  /**
   * Get raw token without expiry check (for debugging)
   */
  getTokenRaw(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}

// Export singleton instance
export const TokenManager = new TokenManagerClass();
