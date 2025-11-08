/**
 * Zod Validation Schemas for all forms
 * Type-safe validation with excellent error messages
 */

import { z } from 'zod';

// ============================================
// CONTACT FORM VALIDATION
// ============================================

export const ContactFormSchema = z.object({
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name cannot exceed 50 characters')
    .trim(),

  lastName: z.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name cannot exceed 50 characters')
    .trim(),

  email: z.string()
    .email('Please enter a valid email address')
    .toLowerCase(),

  phone: z.string()
    .regex(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number (e.g., +2349064937783)'),

  description: z.string()
    .min(10, 'Too short! Please provide at least 10 characters')
    .max(1000, 'Description cannot exceed 1000 characters')
    .trim(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

// ============================================
// NEWSLETTER SUBSCRIPTION VALIDATION
// ============================================

export const NewsletterSchema = z.object({
  email: z.string()
    .email('Please enter a valid email address. Thank you!')
    .toLowerCase(),
});

export type NewsletterData = z.infer<typeof NewsletterSchema>;

// ============================================
// BROCHURE DOWNLOAD VALIDATION
// ============================================

export const BrochureDownloadSchema = z.object({
  email: z.string()
    .email('Please enter a valid email address. Thank you!')
    .toLowerCase(),
});

export type BrochureDownloadData = z.infer<typeof BrochureDownloadSchema>;

// ============================================
// ADMIN LOGIN VALIDATION
// ============================================

export const AdminLoginSchema = z.object({
  email: z.string()
    .email('Please enter a valid email address. Thank you!')
    .toLowerCase(),

  password: z.string()
    .min(6, 'Password must be at least 6 characters')
    .min(1, 'Password is required'),
});

export type AdminLoginData = z.infer<typeof AdminLoginSchema>;

// ============================================
// BLOG POST VALIDATION (ADMIN)
// ============================================

export const BlogPostSchema = z.object({
  title: z.string()
    .min(5, 'Title must be at least 5 characters')
    .max(200, 'Calm down boss! Title cannot exceed 200 characters')
    .trim(),

  slug: z.string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format. Use lowercase letters, numbers, and hyphens only')
    .min(3, 'Oga...slug must be at least 3 characters'),

  excerpt: z.string()
    .min(10, 'Excerpt must be at least 10 characters')
    .max(300, 'Excerpt cannot exceed 300 characters')
    .trim(),

  content: z.string()
    .min(100, 'Haba...content must be at least 100 characters'),

  imageUrl: z.string()
    .url('Please provide a valid image URL'),

  category: z.string()
    .min(2, 'Please select a category'),

  tags: z.array(z.string())
    .min(1, 'Add at least one tag')
    .max(10, 'Maximum 10 tags allowed'),

  status: z.enum(['draft', 'published', 'archived']),
});

export type BlogPostData = z.infer<typeof BlogPostSchema>;

// ============================================
// PROPERTY VALIDATION (ADMIN)
// ============================================

export const PropertySchema = z.object({
  title: z.string()
    .min(5, 'Title must be at least 5 characters')
    .max(200, 'Title cannot exceed 200 characters')
    .trim(),

  description: z.string()
    .min(20, 'Description must be at least 20 characters')
    .max(2000, 'Description cannot exceed 2000 characters'),

  location: z.string()
    .min(3, 'Location is required')
    .trim(),

  status: z.enum(['planning', 'in-progress', 'completed']),

  imageUrl: z.string()
    .url('Please provide a valid image URL'),

  units: z.union([z.number().min(0, 'Units cannot be negative'), z.string()])
    .optional()
    .transform(val => {
      if (typeof val === 'string' && val === '') return undefined;
      if (typeof val === 'string') return parseInt(val, 10);
      return val;
    }),

  acres: z.union([z.number().min(0, 'Acres cannot be negative'), z.string()])
    .optional()
    .transform(val => {
      if (typeof val === 'string' && val === '') return undefined;
      if (typeof val === 'string') return parseFloat(val);
      return val;
    }),

  completionDate: z.string()
    .refine(date => !date || !isNaN(Date.parse(date)), 'Invalid date format')
    .optional()
    .transform(val => val === '' ? undefined : val),
});

export type PropertyData = z.infer<typeof PropertySchema>;

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Format Zod error for display to user
 */
export const formatValidationError = (error: z.ZodError): Record<string, string> => {
  const formatted: Record<string, string> = {};

  error.errors.forEach(err => {
    const path = err.path.join('.');
    formatted[path] = err.message;
  });

  return formatted;
};

/**
 * Validate email format (can be used separately)
 */
export const isValidEmail = (email: string): boolean => {
  const schema = z.string().email();
  const result = schema.safeParse(email);
  return result.success;
};

/**
 * Validate phone format (can be used separately)
 */
export const isValidPhone = (phone: string): boolean => {
  const schema = z.string().regex(/^\+?[1-9]\d{1,14}$/);
  const result = schema.safeParse(phone);
  return result.success;
};

/**
 * Auto-generate slug from title
 */
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};
