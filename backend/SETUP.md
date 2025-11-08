# Backend Setup Guide

Complete step-by-step guide to set up the Haven Communities backend.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Supabase Setup](#supabase-setup)
3. [Local Development](#local-development)
4. [Docker Setup](#docker-setup)
5. [Production Deployment](#production-deployment)
6. [Testing](#testing)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### System Requirements
- **Go**: 1.21 or higher
- **Git**: For cloning and version control
- **Docker & Docker Compose** (optional): For containerized development
- **cURL or Postman**: For API testing

### Check Installations

```bash
# Check Go version
go version

# Check Git version
git version

# Check Docker (if using)
docker --version
docker-compose --version
```

---

## Supabase Setup

### Step 1: Create Supabase Account

1. Go to [supabase.com](https://supabase.com)
2. Click "Sign Up"
3. Create account with email or GitHub
4. Create a new project:
   - **Project Name**: haven-communities
   - **Database Password**: Save this securely
   - **Region**: Choose closest to your location
   - **Pricing**: Start with free tier

### Step 2: Get API Credentials

1. In Supabase dashboard, go to **Settings → API**
2. Copy and save:
   - **Project URL** (SUPABASE_URL)
   - **anon key** (SUPABASE_KEY)
   - **service_role key** (SUPABASE_SERVICE_KEY)

### Step 3: Run Database Schema

1. Go to **SQL Editor** in Supabase
2. Create new query
3. Copy entire contents of `schema.sql` file
4. Paste into query editor
5. Click "Run" button
6. Verify tables are created in **Table Editor**

### Step 4: Configure Storage Buckets

1. Go to **Storage** in Supabase
2. Create new bucket:
   - **Name**: `properties`
   - **Public**: Yes
3. Create another bucket:
   - **Name**: `blog`
   - **Public**: Yes

### Step 5: Set Up Authentication

1. Go to **Authentication → Providers**
2. Enable Email (already enabled by default)
3. Configure Email Templates if desired
4. Go to **Settings → General**
5. Configure redirect URL for frontend:
   - Add: `http://localhost:5173`
   - Add: `https://yourdomain.com` (for production)

---

## Local Development

### Option 1: Development with Supabase Cloud

#### Step 1: Clone Repository

```bash
# Navigate to project
cd /home/obeej/Downloads/Add\ More\ Screens

# Enter backend directory
cd backend
```

#### Step 2: Install Dependencies

```bash
# Download Go modules
go mod download

# Verify dependencies
go mod tidy
```

#### Step 3: Configure Environment

```bash
# Copy example env file
cp .env.example .env

# Edit with your credentials
nano .env
```

Fill in these values from Supabase:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key-here
SUPABASE_SERVICE_KEY=your-service-role-key-here
JWT_SECRET=generate-a-random-secret-here
FRONTEND_URL=http://localhost:5173
```

#### Step 4: Run Server

```bash
# Simple run
go run main.go

# Or with custom port
PORT=3000 go run main.go

# Or with make (if available)
make run
```

Server will start on `http://localhost:8101`

#### Step 5: Test Connection

```bash
# Health check
curl http://localhost:8101/health

# Get properties
curl http://localhost:8101/api/v1/properties
```

---

### Option 2: Development with Docker

This approach runs a local PostgreSQL database instead of Supabase.

#### Step 1: Install Docker

If not installed, get Docker Desktop from [docker.com](https://docker.com)

#### Step 2: Start Services

```bash
# From backend directory
cd backend

# Start all containers
docker-compose up -d

# View logs
docker-compose logs -f api
```

Services will be available at:
- **API**: http://localhost:8101
- **Adminer** (DB UI): http://localhost:8080
- **PostgreSQL**: localhost:5432

#### Step 3: Access Database

Open browser to http://localhost:8080 (Adminer)
- **Server**: postgres
- **Username**: havencommunities
- **Password**: devpassword123
- **Database**: havencommunities

#### Step 4: Test API

```bash
# Health check
curl http://localhost:8101/health

# Get properties
curl http://localhost:8101/api/v1/properties
```

---

## Development Workflow

### Using Make Commands

```bash
# Install dependencies
make install

# Run development server
make dev  # Requires 'air' for hot reload

# Build application
make build

# Run tests
make test

# Format code
make fmt

# Docker commands
make docker-up
make docker-down
make docker-logs
```

### Manual Development

```bash
# Run with debugging
go run -race main.go

# Build for current OS
go build -o server .

# Run built binary
./server

# Watch for changes (install air first)
go install github.com/cosmtrek/air@latest
air
```

---

## Production Deployment

### Option 1: Deploy to Railway

```bash
# Install Railway CLI
npm install -g railway

# Login
railway login

# Initialize in backend directory
cd backend
railway init

# Add Supabase environment variables
railway variable add SUPABASE_URL value
railway variable add SUPABASE_KEY value
railway variable add SUPABASE_SERVICE_KEY value
railway variable add JWT_SECRET value
railway variable add FRONTEND_URL value

# Deploy
railway up
```

### Option 2: Deploy to Render

1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Create new **Web Service**
4. Connect GitHub repository
5. Configure:
   - **Build Command**: `go mod download && go build -o server .`
   - **Start Command**: `./server`
   - **Environment**: Add all variables from .env
6. Deploy

### Option 3: Docker to Cloud

```bash
# Build Docker image
docker build -t havencommunities-api:latest .

# Tag for registry (e.g., DockerHub)
docker tag havencommunities-api:latest username/havencommunities-api:latest

# Push to registry
docker push username/havencommunities-api:latest

# Deploy from registry
# (Instructions vary by platform)
```

### Configuration for Production

```env
# .env (Production)
PORT=8101
ENV=production
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-production-key
SUPABASE_SERVICE_KEY=your-production-service-key
JWT_SECRET=your-very-secure-random-secret-change-this
FRONTEND_URL=https://yourdomain.com
ADMIN_EMAIL=admin@yourdomain.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

---

## Testing

### Manual API Testing

#### 1. Health Check

```bash
curl http://localhost:8101/health
```

#### 2. Get Properties

```bash
curl http://localhost:8101/api/v1/properties?page=1&limit=10
```

#### 3. Login (Get Token)

```bash
curl -X POST http://localhost:8101/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@havencommunities.com","password":"admin123"}'
```

Save the `access_token` from response.

#### 4. Test Protected Endpoint

```bash
curl http://localhost:8101/api/v1/me \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

#### 5. Create Contact Submission

```bash
curl -X POST http://localhost:8101/api/v1/contact \
  -H "Content-Type: application/json" \
  -d '{
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "message": "I am interested in the Modern Apartment property."
  }'
```

### Using Postman

1. Import `havencommunities.postman_collection.json` (if available)
2. Set environment variables:
   - `base_url`: http://localhost:8101
   - `token`: (obtained from login endpoint)
3. Run requests from collection

### Automated Testing

```bash
# Run all tests
go test -v ./...

# Run with coverage
go test -cover ./...

# Generate coverage report
go test -coverprofile=coverage.out ./...
go tool cover -html=coverage.out
```

---

## Troubleshooting

### Issue: "SUPABASE_URL and SUPABASE_KEY environment variables must be set"

**Solution:**
```bash
# Check .env file exists
ls -la .env

# Verify variables are set
cat .env

# If missing, create it
cp .env.example .env
# Then edit and add your credentials
nano .env

# Reload server after updating
```

### Issue: Database Connection Error

**Solution:**
```bash
# Verify Supabase is running
# Check Supabase dashboard → Project Status

# Verify credentials are correct
echo $SUPABASE_URL
echo $SUPABASE_KEY

# Test Supabase connection from dashboard
# SQL Editor → Create new query → SELECT 1
```

### Issue: CORS Error from Frontend

**Solution:**
```bash
# Update FRONTEND_URL in .env
FRONTEND_URL=http://localhost:5173  # for development
FRONTEND_URL=https://yourdomain.com # for production

# Restart server
```

### Issue: Docker Containers Won't Start

**Solution:**
```bash
# Check Docker is running
docker --version

# Check for port conflicts
lsof -i :8101  # Check if port 8101 is in use
lsof -i :5432  # Check if port 5432 is in use

# Remove old containers
docker-compose down -v

# Rebuild and restart
docker-compose up --build -d
```

### Issue: JWT Token Invalid

**Solution:**
```bash
# Check JWT_SECRET is set
echo $JWT_SECRET

# Verify token format in requests
# Should be: Authorization: Bearer <token>

# Tokens expire after 24 hours
# Use refresh endpoint to get new token
```

### Issue: Port Already in Use

**Solution:**
```bash
# Find process using port
lsof -i :8101

# Kill process
kill -9 <PID>

# Or use different port
PORT=3000 go run main.go
```

---

## Next Steps

1. ✅ Database setup complete
2. ✅ Server running
3. 📝 Connect frontend to backend API
   - Update frontend `.env` with backend URL
   - Replace mock API calls with real API
4. 🧪 Test all endpoints
5. 🚀 Deploy to production

---

## Helpful Commands

```bash
# View database tables
docker-compose exec postgres psql -U havencommunities -d havencommunities -c "\dt"

# View table structure
docker-compose exec postgres psql -U havencommunities -d havencommunities -c "\d properties"

# Backup database
docker-compose exec postgres pg_dump -U havencommunities havencommunities > backup.sql

# Restore database
docker-compose exec -T postgres psql -U havencommunities havencommunities < backup.sql

# View server logs
docker-compose logs -f api

# Stop all services
docker-compose down

# Remove everything (including data!)
docker-compose down -v
```

---

## Support

For additional help:
1. Check Fiber docs: https://docs.gofiber.io/
2. Check Supabase docs: https://supabase.com/docs
3. Review code comments in source files
4. Check GitHub issues: https://github.com/havencommunities/backend/issues

---

**Setup Guide Version**: 1.0
**Last Updated**: January 2024
