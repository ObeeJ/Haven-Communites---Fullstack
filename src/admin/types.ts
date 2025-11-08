// Type definitions for Admin Panel

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'superadmin' | 'editor';
  createdAt: string;
  lastLogin?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token?: string;
  user?: AdminUser;
  message?: string;
}

export interface TokenVerificationResponse {
  valid: boolean;
  user?: AdminUser;
  message?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  status: 'planning' | 'in-progress' | 'completed';
  imageUrl: string;
  units?: number;
  acres?: number;
  completionDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  authorId: string;
  imageUrl: string;
  category: string;
  tags: string[];
  status: 'draft' | 'published' | 'archived';
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'responded' | 'archived';
  source: 'contact-form' | 'book-now' | 'email-modal';
  createdAt: string;
  respondedAt?: string;
}

export interface RegisteredUser {
  id: string;
  email: string;
  name?: string;
  phone?: string;
  source: 'email-modal' | 'newsletter' | 'registration';
  status: 'active' | 'unsubscribed' | 'bounced';
  createdAt: string;
  lastActivityAt?: string;
}

export interface AppSettings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  emailSettings: {
    fromEmail: string;
    fromName: string;
    replyToEmail: string;
  };
  seoSettings: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface DashboardStats {
  totalProjects: number;
  totalBlogPosts: number;
  totalContacts: number;
  totalUsers: number;
  newContactsThisWeek: number;
  newUsersThisMonth: number;
  projectsInProgress: number;
  publishedBlogPosts: number;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// API Request types
export interface CreateProjectRequest {
  title: string;
  description: string;
  location: string;
  status: Project['status'];
  imageUrl: string;
  units?: number;
  acres?: number;
  completionDate?: string;
}

export interface UpdateProjectRequest extends Partial<CreateProjectRequest> {
  id: string;
}

export interface CreateBlogPostRequest {
  title: string;
  content: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  tags: string[];
  status: BlogPost['status'];
  publishedAt?: string;
}

export interface UpdateBlogPostRequest extends Partial<CreateBlogPostRequest> {
  id: string;
}

export interface UpdateContactRequest {
  id: string;
  status: ContactInquiry['status'];
}

export interface UpdateUserRequest {
  id: string;
  name?: string;
  phone?: string;
  status?: RegisteredUser['status'];
}

export interface UpdateSettingsRequest extends Partial<AppSettings> {}
