/**
 * API Service Layer
 * Centralized communication with Golang Fiber backend
 * Handles authentication, error management, and request/response formatting
 *
 * MOCK API SUPPORT:
 * Set VITE_USE_MOCK_API=true in .env.local to use mock data without backend
 * Set VITE_USE_MOCK_API=false to use real Fiber backend
 */

import { TokenManager } from './tokenManager';

// ============================================
// CONFIGURATION
// ============================================

// Check if using mock API for testing without backend
const USE_MOCK_API = import.meta.env.VITE_USE_MOCK_API === 'true';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8101';

export const API_CONFIG = {
  baseUrl: API_BASE_URL,
  timeout: 30000, // 30 seconds
};

// ============================================
// ERROR HANDLING
// ============================================

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public details?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Convert API error to user-friendly message
 */
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof ApiError) {
    if (error.statusCode === 401) {
      return 'Your session has expired. Please login again.';
    }
    if (error.statusCode === 403) {
      return 'You do not have permission to perform this action.';
    }
    if (error.statusCode === 404) {
      return 'The requested resource was not found.';
    }
    if (error.statusCode === 429) {
      return 'Too many requests. Please wait a moment and try again.';
    }
    if (error.statusCode === 500) {
      return 'Server error. Please try again later.';
    }
    if (error.statusCode >= 500) {
      return 'Server error. Please contact support if the problem persists.';
    }
    return error.message;
  }

  if (error instanceof TypeError) {
    if (error.message.includes('fetch')) {
      return 'Network error. Please check your internet connection.';
    }
    return 'An error occurred. Please try again.';
  }

  if (error instanceof Error) {
    return error.message;
  }

  return 'An unexpected error occurred.';
};

// ============================================
// CORE API REQUEST FUNCTION
// ============================================

/**
 * Core fetch wrapper with auth, error handling, and timeout
 */
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit & { timeout?: number } = {}
): Promise<T> {
  const { timeout = API_CONFIG.timeout, ...fetchOptions } = options;

  // Get token for authenticated requests
  const token = TokenManager.getToken();

  // Check if session expired
  if (token === null && endpoint.includes('/admin/')) {
    // Token was invalid or expired
    if (TokenManager.getTokenRaw() !== null) {
      // Token existed but was expired
      TokenManager.clear();
      // Redirect will be handled by useAuth hook
    }
  }

  // Setup headers
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...fetchOptions.headers,
  };

  // Add auth token if available and endpoint is protected
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // Setup abort controller for timeout
  const abortController = new AbortController();
  const timeoutId = setTimeout(() => abortController.abort(), timeout);

  try {
    const url = `${API_CONFIG.baseUrl}${endpoint}`;

    const response = await fetch(url, {
      ...fetchOptions,
      headers,
      signal: abortController.signal,
    });

    clearTimeout(timeoutId);

    // Handle authentication errors
    if (response.status === 401) {
      TokenManager.clear();
      // Redirect will be handled by useAuth hook
      throw new ApiError(401, 'Unauthorized. Please login again.');
    }

    // Handle non-JSON responses
    const contentType = response.headers.get('content-type');
    const isJson = contentType?.includes('application/json');

    if (!response.ok) {
      let error: any = { message: 'Request failed' };

      if (isJson) {
        error = await response.json();
      }

      throw new ApiError(
        response.status,
        error.message || `HTTP ${response.status}`,
        error
      );
    }

    // Parse response
    if (!isJson) {
      throw new Error('Invalid response format');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof ApiError) {
      throw error;
    }

    if (error instanceof TypeError && error.name === 'AbortError') {
      throw new ApiError(408, 'Request timeout. Please try again.');
    }

    throw error;
  }
}

// ============================================
// AUTHENTICATION ENDPOINTS
// ============================================

export const authApi = {
  /**
   * Admin login with email and password
   */
  login: async (email: string, password: string) => {
    return apiRequest('/api/admin/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  /**
   * Verify admin token validity
   */
  verifyToken: async () => {
    return apiRequest('/api/admin/verify-token', {
      method: 'POST',
    });
  },

  /**
   * Admin logout
   */
  logout: async () => {
    return apiRequest('/api/admin/logout', {
      method: 'POST',
    });
  },
};

// ============================================
// PROPERTIES ENDPOINTS (PUBLIC)
// ============================================

export const propertiesApi = {
  /**
   * Get all properties with pagination
   */
  getAll: async (page: number = 1, limit: number = 50) => {
    return apiRequest(`/api/properties?page=${page}&limit=${limit}`);
  },

  /**
   * Get single property by slug
   */
  getBySlug: async (slug: string) => {
    return apiRequest(`/api/properties/${slug}`);
  },
};

// ============================================
// PROPERTIES ENDPOINTS (ADMIN)
// ============================================

export const adminPropertiesApi = {
  /**
   * Get all properties (admin)
   */
  getAll: async (page: number = 1, limit: number = 50, search?: string) => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });
    if (search) params.append('search', search);
    return apiRequest(`/api/admin/properties?${params}`);
  },

  /**
   * Get single property (admin)
   */
  getById: async (id: string) => {
    return apiRequest(`/api/admin/properties/${id}`);
  },

  /**
   * Create new property (admin)
   */
  create: async (data: any) => {
    return apiRequest('/api/admin/properties', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Update property (admin)
   */
  update: async (id: string, data: any) => {
    return apiRequest(`/api/admin/properties/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  /**
   * Delete property (admin)
   */
  delete: async (id: string) => {
    return apiRequest(`/api/admin/properties/${id}`, {
      method: 'DELETE',
    });
  },
};

// ============================================
// BLOG ENDPOINTS (PUBLIC)
// ============================================

export const blogApi = {
  /**
   * Get all published blog posts with pagination
   */
  getAll: async (page: number = 1, limit: number = 100, category?: string) => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      status: 'published',
    });
    if (category) params.append('category', category);
    return apiRequest(`/api/blog?${params}`);
  },

  /**
   * Get single blog post by slug
   */
  getBySlug: async (slug: string) => {
    return apiRequest(`/api/blog/${slug}`);
  },
};

// ============================================
// BLOG ENDPOINTS (ADMIN)
// ============================================

export const adminBlogApi = {
  /**
   * Get all blog posts (admin)
   */
  getAll: async (page: number = 1, limit: number = 100, search?: string, status?: string) => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });
    if (search) params.append('search', search);
    if (status) params.append('status', status);
    return apiRequest(`/api/admin/blog?${params}`);
  },

  /**
   * Get single blog post (admin)
   */
  getById: async (id: string) => {
    return apiRequest(`/api/admin/blog/${id}`);
  },

  /**
   * Create new blog post (admin)
   */
  create: async (data: any) => {
    return apiRequest('/api/admin/blog', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  /**
   * Update blog post (admin)
   */
  update: async (id: string, data: any) => {
    return apiRequest(`/api/admin/blog/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  /**
   * Delete blog post (admin)
   */
  delete: async (id: string) => {
    return apiRequest(`/api/admin/blog/${id}`, {
      method: 'DELETE',
    });
  },
};

// ============================================
// CONTACT ENDPOINTS
// ============================================

export const contactApi = {
  /**
   * Submit contact form (public)
   * Rate limited on backend
   */
  submit: async (data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    description: string;
  }) => {
    return apiRequest('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone,
        message: data.description,
        subject: 'Contact Form Inquiry',
        source: 'contact-form',
      }),
    });
  },

  /**
   * Get all contact inquiries (admin)
   */
  getAll: async (page: number = 1, limit: number = 50, status?: string) => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });
    if (status) params.append('status', status);
    return apiRequest(`/api/admin/contact?${params}`);
  },

  /**
   * Update contact inquiry status (admin)
   */
  updateStatus: async (id: string, status: string) => {
    return apiRequest(`/api/admin/contact/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  },

  /**
   * Delete contact inquiry (admin)
   */
  delete: async (id: string) => {
    return apiRequest(`/api/admin/contact/${id}`, {
      method: 'DELETE',
    });
  },

  /**
   * Export contacts as CSV (admin)
   */
  exportCsv: async () => {
    const token = TokenManager.getToken();
    const headers: HeadersInit = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_CONFIG.baseUrl}/api/admin/contact/export/csv`, {
      headers,
    });

    if (!response.ok) {
      throw new ApiError(response.status, 'Failed to export contacts');
    }

    return response.blob();
  },
};

// ============================================
// NEWSLETTER ENDPOINTS
// ============================================

export const newsletterApi = {
  /**
   * Subscribe email to newsletter (public)
   * Rate limited on backend
   */
  subscribe: async (email: string) => {
    return apiRequest('/api/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },

  /**
   * Get all newsletter subscribers (admin)
   */
  getAll: async (page: number = 1, limit: number = 100, search?: string) => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });
    if (search) params.append('search', search);
    return apiRequest(`/api/admin/newsletter?${params}`);
  },

  /**
   * Delete newsletter subscriber (admin)
   */
  delete: async (id: string) => {
    return apiRequest(`/api/admin/newsletter/${id}`, {
      method: 'DELETE',
    });
  },

  /**
   * Export subscribers as CSV (admin)
   */
  exportCsv: async () => {
    const token = TokenManager.getToken();
    const headers: HeadersInit = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_CONFIG.baseUrl}/api/admin/newsletter/export/csv`, {
      headers,
    });

    if (!response.ok) {
      throw new ApiError(response.status, 'Failed to export newsletter');
    }

    return response.blob();
  },
};

// ============================================
// IMAGE UPLOAD ENDPOINTS
// ============================================

export const uploadApi = {
  /**
   * Upload image to Supabase (admin)
   * Frontend should compress before uploading
   */
  image: async (file: File, folder: 'properties' | 'blog' = 'properties') => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', folder);

    const token = TokenManager.getToken();
    const headers: HeadersInit = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_CONFIG.baseUrl}/api/admin/upload/image`, {
      method: 'POST',
      headers,
      body: formData,
    });

    if (!response.ok) {
      throw new ApiError(response.status, 'Failed to upload image');
    }

    return response.json();
  },
};

// ============================================
// DOWNLOAD UTILITY
// ============================================

/**
 * Trigger browser download from blob
 */
export const downloadBlob = (blob: Blob, filename: string) => {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

// ============================================
// UNIFIED API SERVICE EXPORT
// ============================================

/**
 * Central API service with mock/real API support
 * Easily switch between mock (for testing) and real (for production)
 * Set VITE_USE_MOCK_API=true in .env.local to use mock data
 */

// Dynamically import mock API when needed
const getMockApi = async () => {
  const { mockApiService } = await import('./mockApi');
  return mockApiService;
};

// Create conditional wrapper for each API method
const createApiMethod = <T extends any[], R>(
  realMethod: (...args: T) => Promise<R>,
  mockMethod?: (...args: T) => Promise<R>
) => {
  return async (...args: T): Promise<R> => {
    if (USE_MOCK_API && mockMethod) {
      console.log('[MOCK API]', { args });
      return mockMethod(...args);
    }
    return realMethod(...args);
  };
};

export const apiService = {
  // Auth
  login: (email: string, password: string) =>
    USE_MOCK_API ? getMockApi().then(m => m.auth.login(email, password)) : authApi.login(email, password),
  verifyToken: () =>
    USE_MOCK_API ? getMockApi().then(m => m.auth.verifyToken('')) : authApi.verifyToken(),
  logout: authApi.logout,

  // Properties
  getProperties: (page?: number, limit?: number) =>
    USE_MOCK_API ? getMockApi().then(m => m.properties.getAll(page, limit)) : propertiesApi.getAll(page, limit),
  getPropertyBySlug: (slug: string) =>
    USE_MOCK_API ? getMockApi().then(m => m.properties.getBySlug(slug)) : propertiesApi.getBySlug(slug),

  // Blog
  getBlogPosts: (page?: number, limit?: number, category?: string) =>
    USE_MOCK_API ? getMockApi().then(m => m.blog.getAll(page, limit)) : blogApi.getAll(page, limit, category),
  getBlogPostBySlug: (slug: string) =>
    USE_MOCK_API ? getMockApi().then(m => m.blog.getBySlug(slug)) : blogApi.getBySlug(slug),

  // Contact
  submitContact: (data: any) =>
    USE_MOCK_API ? getMockApi().then(m => m.contact.submit(data)) : contactApi.submit(data),
  getContacts: (page?: number, limit?: number) =>
    USE_MOCK_API ? getMockApi().then(m => m.contact.getAll()) : contactApi.getAll(page, limit),
  updateContactStatus: contactApi.updateStatus,
  deleteContact: contactApi.delete,
  exportContactsCsv: contactApi.exportCsv,

  // Newsletter
  subscribeNewsletter: (email: string) =>
    USE_MOCK_API ? getMockApi().then(m => m.newsletter.subscribe({ email })) : newsletterApi.subscribe(email),
  getNewsletterSubscribers: (page?: number, limit?: number) =>
    USE_MOCK_API ? getMockApi().then(m => m.newsletter.getAll()) : newsletterApi.getAll(page, limit),
  deleteNewsletterSubscriber: newsletterApi.delete,
  exportNewsletterCsv: newsletterApi.exportCsv,

  // Brochure
  requestBrochure: (data: { email: string; propertyName: string }) =>
    USE_MOCK_API ? getMockApi().then(m => m.brochure.request(data)) : apiRequest('/api/brochure/request', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  // Admin APIs
  adminPropertiesApi,
  adminBlogApi,
};
