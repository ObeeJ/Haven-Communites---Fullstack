-- ============================================
-- Haven Communities Database Schema
-- ============================================
-- Execute this SQL in your Supabase dashboard
-- ============================================

-- Create users table (extends Supabase auth)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  role VARCHAR(20) DEFAULT 'user', -- admin, user
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create properties table
CREATE TABLE IF NOT EXISTS properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  location VARCHAR(255),
  price DECIMAL(12, 2),
  status VARCHAR(50) DEFAULT 'available', -- available, sold, pending
  units INTEGER DEFAULT 1,
  acres DECIMAL(10, 2),
  features JSONB DEFAULT '[]'::jsonb,
  image_url VARCHAR(500),
  image_alt VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  INDEX idx_slug (slug),
  INDEX idx_status (status),
  INDEX idx_created_at (created_at)
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(500) NOT NULL,
  slug VARCHAR(500) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  category VARCHAR(100), -- Land, Homes, Construction, Investment
  tags JSONB DEFAULT '[]'::jsonb,
  image_url VARCHAR(500),
  image_alt VARCHAR(255),
  author VARCHAR(255),
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  INDEX idx_slug (slug),
  INDEX idx_category (category),
  INDEX idx_published (published),
  INDEX idx_created_at (created_at)
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  message TEXT NOT NULL,
  property_id UUID REFERENCES properties(id),
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  INDEX idx_email (email),
  INDEX idx_created_at (created_at),
  INDEX idx_is_read (is_read)
);

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unsub_at TIMESTAMP WITH TIME ZONE,
  INDEX idx_email (email),
  INDEX idx_active (active)
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  property_id UUID NOT NULL REFERENCES properties(id),
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  INDEX idx_property_id (property_id),
  INDEX idx_user_id (user_id),
  UNIQUE (user_id, property_id)
);

-- Create favorites table
CREATE TABLE IF NOT EXISTS favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  property_id UUID NOT NULL REFERENCES properties(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  INDEX idx_user_id (user_id),
  INDEX idx_property_id (property_id),
  UNIQUE (user_id, property_id)
);

-- Create brochure_requests table
CREATE TABLE IF NOT EXISTS brochure_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  email VARCHAR(255) NOT NULL,
  property_id UUID NOT NULL REFERENCES properties(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  INDEX idx_email (email),
  INDEX idx_property_id (property_id),
  INDEX idx_created_at (created_at)
);

-- Create admin_logs table for audit trail
CREATE TABLE IF NOT EXISTS admin_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  action VARCHAR(255) NOT NULL,
  entity_type VARCHAR(100),
  entity_id VARCHAR(255),
  changes JSONB,
  ip_address VARCHAR(45),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  INDEX idx_user_id (user_id),
  INDEX idx_action (action),
  INDEX idx_created_at (created_at)
);

-- Create RLS Policies

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE brochure_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_logs ENABLE ROW LEVEL SECURITY;

-- Users: users can read all, authenticated users can read own profile
CREATE POLICY "Users can read all users"
  ON users FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  USING (auth.uid() = id);

-- Properties: everyone can read
CREATE POLICY "Everyone can read properties"
  ON properties FOR SELECT
  USING (true);

CREATE POLICY "Only admins can insert properties"
  ON properties FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));

CREATE POLICY "Only admins can update properties"
  ON properties FOR UPDATE
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));

CREATE POLICY "Only admins can delete properties"
  ON properties FOR DELETE
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));

-- Blog Posts: everyone can read published posts
CREATE POLICY "Everyone can read published blog posts"
  ON blog_posts FOR SELECT
  USING (published = true);

CREATE POLICY "Only admins can see all blog posts"
  ON blog_posts FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));

CREATE POLICY "Only admins can insert blog posts"
  ON blog_posts FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));

-- Contact Submissions: everyone can insert, only admins can read
CREATE POLICY "Everyone can submit contact form"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Only admins can read contact submissions"
  ON contact_submissions FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));

-- Newsletter: everyone can insert, only admins can read
CREATE POLICY "Everyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Only admins can read subscribers"
  ON newsletter_subscribers FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));

-- Reviews: everyone can read, authenticated users can create own
CREATE POLICY "Everyone can read reviews"
  ON reviews FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create reviews"
  ON reviews FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Favorites: users can read/write own favorites
CREATE POLICY "Users can read own favorites"
  ON favorites FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own favorites"
  ON favorites FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own favorites"
  ON favorites FOR DELETE
  USING (auth.uid() = user_id);

-- Brochure Requests: everyone can request
CREATE POLICY "Everyone can request brochure"
  ON brochure_requests FOR INSERT
  WITH CHECK (true);

-- Admin Logs: only admins can read, system can insert
CREATE POLICY "Only admins can read admin logs"
  ON admin_logs FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin'
  ));

-- Create storage buckets and policies
-- Run this in Supabase Storage section:
-- CREATE BUCKET IF NOT EXISTS properties;
-- CREATE BUCKET IF NOT EXISTS blog;

-- Insert some mock data for testing
INSERT INTO properties (title, slug, description, location, price, status, units, acres, image_url)
VALUES
  ('Modern Apartment', 'modern-apartment', 'Beautiful modern apartment in downtown area', 'Downtown', 350000, 'available', 1, 0.25, 'https://via.placeholder.com/400x300?text=Apartment'),
  ('Luxury Villa', 'luxury-villa', 'Spacious luxury villa with modern amenities', 'Riverside', 850000, 'available', 5, 2.5, 'https://via.placeholder.com/400x300?text=Villa'),
  ('Family Home', 'family-home', 'Cozy family home perfect for investors', 'Suburban', 450000, 'pending', 3, 1.2, 'https://via.placeholder.com/400x300?text=Home')
ON CONFLICT DO NOTHING;

INSERT INTO blog_posts (title, slug, excerpt, content, category, author, published)
VALUES
  ('Top Real Estate Trends 2024', 'top-real-estate-trends-2024', 'Discover the latest real estate market trends...', 'Full blog content here...', 'Investment', 'John Doe', true),
  ('How to Build Your Dream Home', 'how-to-build-dream-home', 'Step-by-step guide to building your perfect home...', 'Full blog content here...', 'Homes', 'Jane Smith', true),
  ('Investment Opportunities in Land', 'investment-opportunities-land', 'Explore lucrative land investment opportunities...', 'Full blog content here...', 'Land', 'Mike Johnson', true)
ON CONFLICT DO NOTHING;
