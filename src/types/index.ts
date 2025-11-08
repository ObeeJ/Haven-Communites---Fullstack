/**
 * Global TypeScript Type Definitions
 * Used throughout the entire application
 */

/**
 * Authentication Types
 */
export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface LoginResponse {
  token: string;
  expiresIn: number;
  user: User;
}

/**
 * Property Types
 */
export interface Property {
  id: string;
  title: string;
  slug: string;
  description: string;
  location: string;
  imageUrl: string;
  price: number;
  status: 'available' | 'sold' | 'coming-soon';
  units: number;
  acres: number;
  completionDate: string;
  features?: string[];
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Blog Post Types
 */
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published' | 'archived';
  author?: string;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Contact Types
 */
export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
  status?: 'new' | 'contacted' | 'resolved';
  createdAt?: string;
}

/**
 * Newsletter Types
 */
export interface NewsletterSubscriber {
  id: string;
  email: string;
  status: 'active' | 'unsubscribed';
  subscribedAt?: string;
}

/**
 * Brochure Types
 */
export interface BrochureRequest {
  id?: string;
  email: string;
  propertyName: string;
  createdAt?: string;
}

/**
 * Pagination Types
 */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

/**
 * Form Types
 */
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface BrochureFormData {
  email: string;
  propertyName?: string;
}

export interface AdminLoginFormData {
  email: string;
  password: string;
}
