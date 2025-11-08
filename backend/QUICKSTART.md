# 🚀 Quick Start Guide - 5 Minutes

Get the Haven Communities backend running in 5 minutes!

## Prerequisites
- Go 1.21+ installed
- Supabase account (free at supabase.com)
- Text editor or IDE

## Step 1: Supabase Setup (2 min)

```bash
# 1. Go to https://supabase.com and create project
# 2. Copy Project URL and anon key
# 3. Go to SQL Editor and run schema.sql contents
# 4. Go to Storage and create "properties" and "blog" buckets
```

## Step 2: Environment Setup (1 min)

```bash
# Copy env template
cp .env.example .env

# Edit .env and add your Supabase credentials
nano .env
# Change these lines:
# SUPABASE_URL=https://your-project.supabase.co
# SUPABASE_KEY=your-anon-key
# JWT_SECRET=generate-random-secret
```

## Step 3: Run Server (1 min)

```bash
# Install dependencies
go mod download

# Run server
go run main.go

# You should see:
# 🚀 Server running on http://localhost:8101
```

## Step 4: Test (1 min)

```bash
# Health check
curl http://localhost:8101/health

# Get properties
curl http://localhost:8101/api/v1/properties

# Login
curl -X POST http://localhost:8101/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@havencommunities.com","password":"admin123"}'
```

## ✅ You're Done!

Server is running at: **http://localhost:8101**

### Next Steps
1. See [README.md](README.md) for full API documentation
2. See [SETUP.md](SETUP.md) for detailed setup guide
3. Connect frontend to backend API
4. Deploy to production when ready

### Useful Commands

```bash
# Format code
go fmt ./...

# Run tests
go test -v ./...

# Build binary
go build -o server .

# Docker setup (if installed)
docker-compose up -d
```

### Common Endpoints

```bash
# Get all properties
curl http://localhost:8101/api/v1/properties

# Get all blog posts
curl http://localhost:8101/api/v1/blog

# Submit contact form
curl -X POST http://localhost:8101/api/v1/contact \
  -H "Content-Type: application/json" \
  -d '{
    "first_name":"John",
    "last_name":"Doe",
    "email":"john@example.com",
    "phone":"+1234567890",
    "message":"Interested in property"
  }'

# Subscribe to newsletter
curl -X POST http://localhost:8101/api/v1/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","name":"User"}'
```

### Need Help?

- Full API docs: [README.md](README.md)
- Setup guide: [SETUP.md](SETUP.md)
- Backend summary: [BACKEND_SUMMARY.md](BACKEND_SUMMARY.md)
- Troubleshooting: See SETUP.md → Troubleshooting section

---

**Congrats!** Your Haven Communities backend is running! 🎉
