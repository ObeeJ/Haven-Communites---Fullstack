/**
 * Mock API Service
 * Provides fake API responses for frontend testing without backend
 * Easily switched off once real backend is ready
 *
 * When backend (Go Fiber) is ready, switch VITE_USE_MOCK_API=false in .env
 */

import type {
  LoginResponse,
  Property,
  BlogPost,
  Contact,
  NewsletterSubscriber,
} from '../types';

// Artificial delay to simulate network latency
const delay = (ms: number = 500) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Mock Properties Data
 */
export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Apartment - Downtown',
    slug: 'modern-apartment-downtown',
    description:
      'Stunning modern apartment in the heart of downtown with panoramic city views, premium finishes, and world-class amenities.',
    location: 'Downtown, Lagos',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200',
    price: 150000000,
    status: 'available',
    units: 5,
    acres: 0.5,
    completionDate: '2024-12-31',
    features: [
      'Modern architecture',
      'CCTV security',
      'Swimming pool',
      'Gym facility',
      'Parking spaces',
    ],
  },
  {
    id: '2',
    title: 'Luxury Villa - Beachfront',
    slug: 'luxury-villa-beachfront',
    description:
      'Exclusive beachfront villa with direct beach access, private infinity pool, and luxury finishes. Perfect for investment.',
    location: 'Beachfront, Lagos',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200',
    price: 350000000,
    status: 'available',
    units: 2,
    acres: 2.0,
    completionDate: '2024-10-31',
    features: [
      'Beachfront access',
      'Private pool',
      'Gated community',
      'Smart home',
      'Backup power',
    ],
  },
  {
    id: '3',
    title: 'Family Home - Suburban',
    slug: 'family-home-suburban',
    description:
      'Perfect family home in peaceful suburban area with excellent schools nearby and green spaces.',
    location: 'Suburban Area',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200',
    price: 85000000,
    status: 'available',
    units: 10,
    acres: 1.5,
    completionDate: '2024-09-30',
    features: [
      'Family-friendly',
      'Near schools',
      'Green spaces',
      'Playground',
      'Community center',
    ],
  },
];

/**
 * Mock Blog Posts Data
 */
export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Real Estate Investment in Nigeria',
    slug: 'future-real-estate-investment-nigeria',
    excerpt:
      'Exploring emerging trends and opportunities in Nigerian real estate market.',
    content:
      'The Nigerian real estate market is experiencing unprecedented growth. With urbanization increasing and foreign investment flowing in, now is an excellent time to invest in properties...',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200',
    category: 'Investment',
    tags: ['real-estate', 'investment', 'nigeria'],
    status: 'published',
    author: 'Haven Communities',
    publishedAt: new Date('2024-11-01').toISOString(),
  },
  {
    id: '2',
    title: 'Sustainable Living: Green Homes for the Modern Family',
    slug: 'sustainable-living-green-homes',
    excerpt:
      'Learn how to build and maintain eco-friendly homes that reduce your carbon footprint.',
    content:
      'Sustainable living is no longer a luxury—it\'s a necessity. From solar panels to rainwater harvesting, green homes are becoming more accessible and affordable...',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200',
    category: 'Lifestyle',
    tags: ['sustainable', 'eco-friendly', 'homes'],
    status: 'published',
    author: 'Haven Communities',
    publishedAt: new Date('2024-10-25').toISOString(),
  },
  {
    id: '3',
    title: 'Home Buying Guide: Everything First-Time Buyers Need to Know',
    slug: 'home-buying-guide-first-time-buyers',
    excerpt:
      'A comprehensive guide for first-time home buyers in Nigeria.',
    content:
      'Buying your first home is one of the biggest decisions you\'ll make. Here\'s what you need to know about the process, financing options, and legal requirements...',
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200',
    category: 'Guide',
    tags: ['buying', 'guide', 'first-time'],
    status: 'published',
    author: 'Haven Communities',
    publishedAt: new Date('2024-10-15').toISOString(),
  },
];

/**
 * Mock Auth Responses
 */
export const mockAuth = {
  async login(email: string, password: string): Promise<LoginResponse> {
    await delay();
    if (email === 'admin@havencommunities.com' && password === 'admin123') {
      return {
        token: 'mock-jwt-token-' + Date.now(),
        expiresIn: 3600,
        user: {
          id: '1',
          email,
          name: 'Admin User',
        },
      };
    }
    throw new Error('Invalid credentials');
  },

  async verifyToken(token: string): Promise<{ user: { id: string; email: string; name: string } }> {
    await delay(200);
    if (!token.startsWith('mock-jwt-token-')) {
      throw new Error('Invalid token');
    }
    return {
      user: {
        id: '1',
        email: 'admin@havencommunities.com',
        name: 'Admin User',
      },
    };
  },
};

/**
 * Mock Properties API
 */
export const mockPropertiesApi = {
  async getAll(page = 1, limit = 10) {
    await delay();
    const start = (page - 1) * limit;
    return {
      data: mockProperties.slice(start, start + limit),
      total: mockProperties.length,
      page,
      limit,
    };
  },

  async getBySlug(slug: string): Promise<Property> {
    await delay();
    const property = mockProperties.find((p) => p.slug === slug);
    if (!property) throw new Error('Property not found');
    return property;
  },

  async search(query: string) {
    await delay();
    return mockProperties.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
  },
};

/**
 * Mock Blog API
 */
export const mockBlogApi = {
  async getAll(page = 1, limit = 10) {
    await delay();
    const start = (page - 1) * limit;
    return {
      data: mockBlogPosts.slice(start, start + limit),
      total: mockBlogPosts.length,
      page,
      limit,
    };
  },

  async getBySlug(slug: string): Promise<BlogPost> {
    await delay();
    const post = mockBlogPosts.find((p) => p.slug === slug);
    if (!post) throw new Error('Blog post not found');
    return post;
  },

  async search(query: string) {
    await delay();
    return mockBlogPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase())
    );
  },

  async getByCategory(category: string) {
    await delay();
    return mockBlogPosts.filter((p) => p.category === category);
  },
};

/**
 * Mock Contact API
 */
export const mockContactApi = {
  async submit(data: any) {
    await delay(800);
    console.log('Mock: Contact submitted', data);
    return { id: '1', ...data, createdAt: new Date().toISOString() };
  },

  async getAll() {
    await delay();
    return {
      data: [],
      total: 0,
    };
  },
};

/**
 * Mock Newsletter API
 */
export const mockNewsletterApi = {
  async subscribe(data: { email: string }) {
    await delay(600);
    console.log('Mock: Newsletter subscription', data);
    return { id: '1', ...data, subscribedAt: new Date().toISOString() };
  },

  async getAll() {
    await delay();
    return {
      data: [],
      total: 0,
    };
  },
};

/**
 * Mock Brochure API
 */
export const mockBrochureApi = {
  async request(data: any) {
    await delay(1000);
    console.log('Mock: Brochure requested', data);
    // Return fake PDF content
    return new Blob(['Mock PDF content'], { type: 'application/pdf' });
  },
};

/**
 * All mock API methods
 */
export const mockApiService = {
  auth: mockAuth,
  properties: mockPropertiesApi,
  blog: mockBlogApi,
  contact: mockContactApi,
  newsletter: mockNewsletterApi,
  brochure: mockBrochureApi,
};
