/**
 * Application Constants
 * Centralized configuration for the entire app
 */

// ============================================
// CONTACT INFORMATION
// ============================================

export const CONTACT_INFO = {
  // Primary contact email
  email: 'havencommunitiesproperties@gmail.com',
  // Email for newsletter and brochure
  newsletterEmail: 'havencommunitiesproperties@gmail.com',
  // Admin email (receives contact form submissions)
  adminEmail: 'sonoikijeremiah54@gmail.com',
  // WhatsApp number (without +)
  whatsappNumber: '2349064937783',
  // Phone for display
  phone: '+234 906 493 7783',
};

// ============================================
// WHATSAPP LINKS
// ============================================

export const WHATSAPP_LINKS = {
  // Chat with sales
  sales: `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hello%2C%20I%20would%20like%20to%20chat%20with%20sales`,
  // Contact about property
  property: (propertyName: string) =>
    `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(propertyName)}`,
  // Schedule inspection
  inspection: `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=I%20would%20like%20to%20schedule%20an%20inspection`,
};

// ============================================
// PAGINATION
// ============================================

export const PAGINATION = {
  properties: 50,
  blogs: 100,
  contacts: 50,
  newsletter: 100,
};

// ============================================
// ADMIN SETTINGS
// ============================================

export const ADMIN_CONFIG = {
  // JWT token expiry in seconds (1 hour)
  tokenExpiry: 3600,
  // Session warning threshold (5 minutes)
  warningThreshold: 5 * 60,
};

// ============================================
// IMAGE CONFIG
// ============================================

export const IMAGE_CONFIG = {
  // Max file size for upload (5MB)
  maxFileSize: 5 * 1024 * 1024,
  // Accepted image types
  acceptedTypes: ['image/jpeg', 'image/png', 'image/webp'],
  // Image folders on backend
  folders: {
    properties: 'properties',
    blog: 'blog',
  },
};

// ============================================
// FORM LIMITS
// ============================================

export const FORM_LIMITS = {
  contact: {
    firstName: { min: 2, max: 50 },
    lastName: { min: 2, max: 50 },
    email: { max: 100 },
    phone: { min: 7, max: 20 },
    description: { min: 10, max: 1000 },
  },
  blog: {
    title: { min: 5, max: 200 },
    excerpt: { min: 10, max: 300 },
    content: { min: 100 },
    tags: { max: 10 },
  },
  property: {
    title: { min: 5, max: 200 },
    description: { min: 20, max: 2000 },
    location: { min: 3 },
  },
};

// ============================================
// CATEGORIES & OPTIONS
// ============================================

export const CATEGORIES = {
  blog: [
    'Technology',
    'Design',
    'Business',
    'Lifestyle',
    'Investment',
    'Market Trends',
    'Other',
  ],
  property: [
    { value: 'planning', label: 'Planning' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
  ],
};

// ============================================
// API TIMEOUTS
// ============================================

export const API_TIMEOUTS = {
  short: 5000, // 5 seconds - quick operations
  medium: 15000, // 15 seconds - normal operations
  long: 30000, // 30 seconds - file uploads
};

// ============================================
// LOCALSTORAGE KEYS
// ============================================

export const STORAGE_KEYS = {
  // Admin authentication
  adminToken: 'adminToken',
  adminTokenExpiry: 'adminTokenExpiry',
  // User preferences
  theme: 'theme',
  newsletterPromptShown: 'newsletterPromptShown',
  // Brochure download tracking
  brochureDownloaded: 'brochureDownloaded',
};

// ============================================
// ROUTES
// ============================================

export const ROUTES = {
  // Public routes
  public: {
    home: '/',
    properties: '/properties',
    propertyDetail: '/properties/:slug',
    blog: '/blog',
    blogDetail: '/blog/:slug',
    contact: '/contact',
    about: '/about',
    privacy: '/privacy',
    terms: '/terms',
    cookies: '/cookies',
  },
  // Admin routes
  admin: {
    login: '/admin/login',
    dashboard: '/admin/dashboard',
    blog: '/admin/blog',
    blogCreate: '/admin/blog/create',
    blogEdit: '/admin/blog/:id/edit',
    properties: '/admin/properties',
    propertyCreate: '/admin/properties/create',
    propertyEdit: '/admin/properties/:id/edit',
    contacts: '/admin/contacts',
    newsletter: '/admin/newsletter',
  },
};

// ============================================
// EMAIL TEMPLATES (Subject lines)
// ============================================

export const EMAIL_TEMPLATES = {
  brochure: 'Haven Communities - Property Brochure',
  newsletter: 'Welcome to Haven Communities Newsletter',
  contactConfirmation: 'We received your inquiry',
  inspectionScheduled: 'Your inspection has been scheduled',
};

// ============================================
// UI MESSAGES
// ============================================

export const MESSAGES = {
  success: {
    contactSubmitted: 'Thank you! We\'ll get back to you soon.',
    newsletterSubscribed: 'You\'ve been added to our newsletter.',
    brochureRequested: 'Check your email for the brochure.',
    blogCreated: 'Blog post created successfully.',
    blogUpdated: 'Blog post updated successfully.',
    blogDeleted: 'Blog post deleted successfully.',
    propertyCreated: 'Property created successfully.',
    propertyUpdated: 'Property updated successfully.',
    propertyDeleted: 'Property deleted successfully.',
  },
  error: {
    contactSubmissionFailed: 'Failed to submit contact form. Please try again.',
    newsletterSubscriptionFailed: 'Failed to subscribe to newsletter. Please try again.',
    brochureRequestFailed: 'Failed to request brochure. Please try again.',
    networkError: 'Network error. Please check your connection.',
    serverError: 'Server error. Please try again later.',
    unauthorized: 'Unauthorized. Please login again.',
  },
};

// ============================================
// VALIDATION MESSAGES
// ============================================

export const VALIDATION_MESSAGES = {
  required: 'This field is required.',
  invalidEmail: 'Please enter a valid email address.',
  invalidPhone: 'Please enter a valid phone number.',
  minLength: (length: number) => `Minimum ${length} characters required.`,
  maxLength: (length: number) => `Maximum ${length} characters allowed.`,
  invalidUrl: 'Please enter a valid URL.',
  fileSize: `File size must be less than ${IMAGE_CONFIG.maxFileSize / (1024 * 1024)}MB.`,
  invalidFileType: 'Invalid file type. Please upload an image.',
};

// ============================================
// DATE FORMAT
// ============================================

export const DATE_FORMAT = {
  short: 'MMM d, yyyy',
  long: 'MMMM d, yyyy',
  display: 'yyyy-MM-dd',
};

// ============================================
// BRANDING
// ============================================

export const BRAND = {
  name: 'Haven Communities',
  domain: 'havencommunities.com.ng',
  tagline: 'Your dream home awaits',
  description: 'Discover premium properties and be part of our thriving communities.',
};
