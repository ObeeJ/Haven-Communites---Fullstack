# Haven Communities Backend API

A complete backend API built with **Fiber (Go)** and **Supabase** for the Haven Communities real estate platform.

## 🚀 Features

- ✅ RESTful API with Fiber web framework
- ✅ PostgreSQL database with Supabase
- ✅ JWT authentication with refresh tokens
- ✅ Role-based access control (RBAC)
- ✅ Image upload to Supabase Storage
- ✅ Contact form and newsletter management
- ✅ Blog post and property management
- ✅ User reviews and favorites system
- ✅ Admin dashboard endpoints
- ✅ CORS enabled for frontend integration
- ✅ Row-level security (RLS) policies
- ✅ Audit logging for admin actions

## 📋 Prerequisites

- Go 1.21 or higher
- PostgreSQL 14+ (via Supabase)
- Supabase account (free tier available)
- Git

## 🔧 Installation

### 1. Clone and Setup

```bash
# Navigate to backend directory
cd backend

# Create .env file from example
cp .env.example .env

# Edit .env with your Supabase credentials
nano .env
```

### 2. Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Go to SQL Editor and run the contents of `schema.sql`
3. Get your API credentials:
   - Supabase URL: Settings → API → Project URL
   - Anon Key: Settings → API → `anon` key
   - Service Role Key: Settings → API → `service_role` key
4. Update `.env` with these credentials

### 3. Storage Setup (for image uploads)

In Supabase Dashboard:

```sql
-- Create storage buckets
INSERT INTO storage.buckets (id, name, public)
VALUES
  ('properties', 'properties', true),
  ('blog', 'blog', true);
```

## 📦 Dependencies

```bash
go get github.com/gofiber/fiber/v2
go get github.com/supabase-community/supabase-go
go get github.com/golang-jwt/jwt/v5
go get golang.org/x/crypto
go get github.com/joho/godotenv
go get github.com/google/uuid
```

Or install all at once:

```bash
go mod download
go mod tidy
```

## ▶️ Running the Server

```bash
# Run development server
go run main.go

# Server will start on http://localhost:8101

# With custom port
PORT=3000 go run main.go
```

## 📚 API Endpoints

### Base URL
```
http://localhost:8101/api/v1
```

### Authentication Endpoints

```
POST   /auth/login           - Login admin user
POST   /auth/signup          - Register new user
POST   /auth/refresh         - Refresh access token
```

### Public Endpoints (No Auth Required)

#### Properties
```
GET    /properties           - Get all properties (paginated)
GET    /properties/:id       - Get property by ID
GET    /properties/slug/:slug - Get property by slug
```

#### Blog
```
GET    /blog                 - Get all blog posts (paginated)
GET    /blog/:id             - Get blog post by ID
GET    /blog/slug/:slug      - Get blog post by slug
GET    /blog/category/:category - Get posts by category
```

#### Contact & Newsletter
```
POST   /contact              - Submit contact form
POST   /newsletter/subscribe  - Subscribe to newsletter
POST   /brochure/download    - Request brochure download
```

### Protected Endpoints (Auth Required)

#### User Profile
```
GET    /me                   - Get current user profile
PUT    /me                   - Update user profile
```

#### Favorites
```
GET    /favorites            - Get user's favorite properties
POST   /favorites/:propertyId - Add property to favorites
DELETE /favorites/:propertyId - Remove property from favorites
```

#### Reviews
```
POST   /reviews              - Create property review
GET    /reviews/user         - Get user's reviews
```

### Admin Endpoints (Admin Auth Required)

#### Property Management
```
POST   /admin/properties     - Create property
PUT    /admin/properties/:id - Update property
DELETE /admin/properties/:id - Delete property
```

#### Blog Management
```
POST   /admin/blog           - Create blog post
PUT    /admin/blog/:id       - Update blog post
DELETE /admin/blog/:id       - Delete blog post
```

#### Contact & Newsletter Management
```
GET    /admin/contacts       - Get all contact submissions
GET    /admin/contacts/:id   - Get contact by ID
GET    /admin/newsletter/subscribers - Get all subscribers
DELETE /admin/newsletter/subscribers/:email - Unsubscribe user
```

#### User Management
```
GET    /admin/users          - Get all users
GET    /admin/users/:id      - Get user by ID
PUT    /admin/users/:id      - Update user
DELETE /admin/users/:id      - Delete user
```

#### Dashboard
```
GET    /admin/dashboard/stats - Get dashboard statistics
GET    /admin/dashboard/recent-contacts - Get recent contacts
```

#### Image Upload
```
POST   /admin/upload         - Upload image to storage
```

## 🔐 Authentication

### Login

```bash
curl -X POST http://localhost:8101/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@havencommunities.com",
    "password": "securepassword123"
  }'
```

Response:
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "refresh_token": "eyJhbGciOiJIUzI1NiIs...",
  "expires_in": 86400,
  "user": {
    "id": "uuid",
    "email": "admin@havencommunities.com",
    "role": "admin"
  }
}
```

### Using Bearer Token

```bash
curl -X GET http://localhost:8101/api/v1/me \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### Refresh Token

```bash
curl -X POST http://localhost:8101/api/v1/auth/refresh \
  -H "Content-Type: application/json" \
  -d '{
    "refresh_token": "eyJhbGciOiJIUzI1NiIs..."
  }'
```

## 📋 Request Examples

### Get Properties

```bash
curl "http://localhost:8101/api/v1/properties?page=1&limit=10"
```

Response:
```json
{
  "data": [
    {
      "id": "uuid",
      "title": "Modern Apartment",
      "slug": "modern-apartment",
      "location": "Downtown",
      "price": 350000,
      "status": "available",
      "units": 1,
      "acres": 0.25,
      "image_url": "https://...",
      "created_at": "2024-01-15T10:00:00Z"
    }
  ],
  "page": 1,
  "limit": 10,
  "total": 3,
  "total_pages": 1
}
```

### Create Contact Submission

```bash
curl -X POST http://localhost:8101/api/v1/contact \
  -H "Content-Type: application/json" \
  -d '{
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "message": "I am interested in the Modern Apartment property.",
    "property_id": "property-uuid"
  }'
```

### Subscribe to Newsletter

```bash
curl -X POST http://localhost:8101/api/v1/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{
    "email": "subscriber@example.com",
    "name": "John Subscriber"
  }'
```

### Upload Image (Admin)

```bash
curl -X POST http://localhost:8101/api/v1/admin/upload \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "file=@/path/to/image.jpg"
```

## 🗄️ Database Schema

### Tables

1. **users** - User accounts and profiles
2. **properties** - Real estate properties/projects
3. **blog_posts** - Blog articles
4. **contact_submissions** - Contact form submissions
5. **newsletter_subscribers** - Newsletter subscriptions
6. **reviews** - Property reviews/ratings
7. **favorites** - User favorite properties
8. **brochure_requests** - Brochure download requests
9. **admin_logs** - Audit trail for admin actions

### Key Relationships

```
users → reviews → properties
users → favorites → properties
users → admin_logs
properties ← contact_submissions
properties ← brochure_requests
blog_posts → (none directly, but linked by content)
```

## 🔒 Security Features

1. **JWT Authentication** - Secure token-based auth
2. **Password Hashing** - bcrypt for password storage
3. **CORS** - Restricted to trusted origins
4. **Row-Level Security** - Database-level access control
5. **Admin Verification** - Middleware checks for admin role
6. **Input Validation** - Request validation before processing
7. **HTTPS Ready** - Production-ready security headers

## 📝 Environment Variables

```env
PORT=8101                          # Server port
ENV=development                    # development, staging, production
SUPABASE_URL=...                   # Supabase project URL
SUPABASE_KEY=...                   # Supabase anon key
SUPABASE_SERVICE_KEY=...           # Supabase service role key
JWT_SECRET=your-super-secret-key   # JWT signing secret
FRONTEND_URL=http://localhost:5173 # Frontend URL for CORS
SMTP_HOST=smtp.gmail.com           # Email SMTP host
SMTP_PORT=587                      # Email SMTP port
SMTP_USER=...                      # Email username
SMTP_PASS=...                      # Email password
ADMIN_EMAIL=admin@havencommunities.com # Admin email
```

## 🧪 Testing

### Health Check

```bash
curl http://localhost:8101/health
```

Response:
```json
{
  "status": "ok",
  "service": "Haven Communities API",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### Test Admin Login

```bash
curl -X POST http://localhost:8101/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@havencommunities.com",
    "password": "admin123"
  }'
```

## 🚢 Deployment

### Deploy to Railway

```bash
# Install Railway CLI
npm i -g railway

# Login
railway login

# Initialize project
railway init

# Add environment variables
railway variable add SUPABASE_URL value
railway variable add SUPABASE_KEY value
railway variable add JWT_SECRET value

# Deploy
railway up
```

### Deploy to Render

```bash
# Connect GitHub repository
# In Render dashboard: New → Web Service
# Select repository and configure:
# - Build Command: go mod download && go build -o server .
# - Start Command: ./server
```

### Deploy to Vercel (Functions)

```bash
# Requires converting main.go to serverless function format
# Use vercel.json for configuration
```

## 📊 Performance Tips

1. **Use pagination** - Always limit results (page, limit)
2. **Index frequently queried fields** - slug, status, category
3. **Cache responses** - Use browser/CDN caching for public endpoints
4. **Optimize queries** - Use database indexes wisely
5. **Monitor logs** - Track slow queries and errors

## 🔧 Troubleshooting

### Supabase Connection Error

```
Error: SUPABASE_URL and SUPABASE_KEY environment variables must be set
```

**Solution:**
- Check `.env` file exists
- Verify credentials in Supabase dashboard
- Reload server after updating .env

### CORS Error

```
Access to XMLHttpRequest blocked by CORS policy
```

**Solution:**
- Update FRONTEND_URL in .env
- Verify frontend URL in CORS middleware

### JWT Token Expired

```
Error: Invalid or expired token
```

**Solution:**
- Use refresh endpoint to get new token
- Check token expiration time (24 hours default)

## 📚 Additional Resources

- [Fiber Documentation](https://docs.gofiber.io/)
- [Supabase Documentation](https://supabase.com/docs)
- [JWT Best Practices](https://tools.ietf.org/html/rfc8725)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 📞 Support

For issues or questions:
1. Check troubleshooting section
2. Review Supabase and Fiber docs
3. Check error logs: `tail -f backend.log`
4. Contact: support@havencommunities.com

## 📄 License

MIT License - See LICENSE file for details

## 👥 Contributors

- Haven Communities Team

---

**Last Updated:** January 2024
**API Version:** v1
**Status:** Production Ready
