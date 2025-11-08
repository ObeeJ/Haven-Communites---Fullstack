# Haven Communities Admin Panel

This folder contains the admin panel for Haven Communities. The admin interface is fully responsive and ready for backend integration.

## Structure

- `AdminApp.tsx` - Main admin application with authentication flow
- `AdminLogin.tsx` - Login page with email/password authentication
- `AdminDashboard.tsx` - Admin dashboard with user/contact data management and statistics
- `AdminBlogApp.tsx` - Blog management application (list, create, edit)
- `AdminBlogList.tsx` - Blog posts listing with pagination
- `AdminBlogEditor.tsx` - Blog post creation and editing form

## Features

### AdminLogin Component
- Fully responsive (desktop and mobile layouts based on Figma designs)
- Email and password validation
- Loading states with spinner animation
- Error handling and display
- Form submission handling
- Ready for API integration

### AdminDashboard Component
- Fully responsive (desktop and mobile based on Figma designs)
- Stats cards showing newsletter count and contact count with growth indicators
- Tab switching between Newsletter and Contact Us data
- Searchable data tables
- Pagination controls
- Download all data functionality
- Logout functionality

### AdminBlogApp Component
- Manages blog post workflow (list, create, edit)
- State management for different views
- Handles navigation between blog list and editor

### AdminBlogList Component
- Grid layout displaying all blog posts with images
- Blog post cards showing title, excerpt, author, date, and category
- Click to edit existing posts
- "Add New Blog" card to create new posts
- Pagination with Previous/Next controls
- Fully responsive design matching Figma

### AdminBlogEditor Component
- Rich text editor with formatting toolbar (bold, italic, link, lists, etc.)
- Cover photo upload with drag-and-drop
- Blog title input
- Category selection (Homes, Investment, Construction, Land)
- Short description textarea
- Content images upload (multiple files)
- Main content textarea
- Cancel and Preview buttons
- Form validation and loading states
- Ready for API integration

## Backend Integration

### Authentication API

The login component expects the following API endpoint:

```typescript
POST /api/admin/login
Content-Type: application/json

Request Body:
{
  "email": "admin@example.com",
  "password": "securepassword"
}

Success Response (200):
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "admin@example.com",
    "name": "Admin Name",
    "role": "admin"
  }
}

Error Response (401):
{
  "success": false,
  "message": "Invalid credentials"
}
```

### Token Verification

For persistent login, implement token verification:

```typescript
POST /api/admin/verify-token
Authorization: Bearer {token}

Success Response (200):
{
  "valid": true,
  "user": {
    "id": "user_id",
    "email": "admin@example.com",
    "name": "Admin Name",
    "role": "admin"
  }
}

Error Response (401):
{
  "valid": false,
  "message": "Invalid or expired token"
}
```

### Data Management APIs

The dashboard is ready to integrate with the following endpoints:

#### Projects
- `GET /api/admin/projects` - Get all projects
- `POST /api/admin/projects` - Create new project
- `PUT /api/admin/projects/:id` - Update project
- `DELETE /api/admin/projects/:id` - Delete project

#### Blog Posts
- `GET /api/admin/blog-posts` - Get all blog posts (with pagination)
- `GET /api/admin/blog-posts/:id` - Get single blog post
- `POST /api/admin/blog-posts` - Create new post
- `PUT /api/admin/blog-posts/:id` - Update post
- `DELETE /api/admin/blog-posts/:id` - Delete post

Blog Post Request Body:
```typescript
{
  "title": "Blog Title",
  "category": "Homes",
  "shortDescription": "Brief description...",
  "content": "Main blog content...",
  "coverImage": File, // multipart/form-data
  "contentImages": File[], // multipart/form-data
  "author": "Author Name",
  "publishedAt": "2025-01-20T00:00:00Z"
}
```

Blog Post Response:
```typescript
{
  "id": "blog_id",
  "title": "Blog Title",
  "slug": "blog-title",
  "category": "Homes",
  "shortDescription": "Brief description...",
  "content": "Main blog content...",
  "coverImageUrl": "https://...",
  "contentImageUrls": ["https://...", "https://..."],
  "author": "Author Name",
  "publishedAt": "2025-01-20T00:00:00Z",
  "createdAt": "2025-01-20T00:00:00Z",
  "updatedAt": "2025-01-20T00:00:00Z"
}
```

#### Contact Inquiries
- `GET /api/admin/contacts` - Get all contact submissions
- `PUT /api/admin/contacts/:id` - Update contact status
- `DELETE /api/admin/contacts/:id` - Delete contact

#### Users
- `GET /api/admin/users` - Get all registered users
- `PUT /api/admin/users/:id` - Update user
- `DELETE /api/admin/users/:id` - Delete user

#### Settings
- `GET /api/admin/settings` - Get application settings
- `PUT /api/admin/settings` - Update settings

## Usage

### Integrating into Main App

To add admin functionality to your main application, you can:

1. **Option 1: User/Contact Management Dashboard**
   ```typescript
   import AdminApp from './admin/AdminApp';
   
   // In your routing logic:
   if (window.location.pathname === '/admin') {
     return <AdminApp />; // Shows AdminDashboard
   }
   ```

2. **Option 2: Blog Management**
   ```typescript
   import AdminBlogApp from './admin/AdminBlogApp';
   
   // In your routing logic:
   if (window.location.pathname === '/admin/blog') {
     return <AdminBlogApp />; // Shows blog list/editor
   }
   ```

3. **Option 3: Combined Admin Portal**
   ```typescript
   import AdminApp from './admin/AdminApp';
   import AdminBlogApp from './admin/AdminBlogApp';
   
   // Create a main admin portal with navigation
   function AdminPortal() {
     const [section, setSection] = useState('dashboard');
     
     if (section === 'dashboard') return <AdminApp />;
     if (section === 'blog') return <AdminBlogApp />;
   }
   ```

### Local Storage

The admin panel uses localStorage for token storage:
- Key: `adminToken`
- Value: JWT token or session token from backend

### Customization

To customize the admin panel:

1. **Styling**: All Tailwind classes can be modified
2. **Sections**: Add/remove menu items in `AdminDashboard.tsx`
3. **Stats**: Update the stats cards with real data from your API
4. **Colors**: Change `#155eef` to your brand color throughout

## Security Notes

⚠️ **Important Security Considerations:**

1. Always validate tokens on the backend
2. Use HTTPS in production
3. Implement CSRF protection
4. Add rate limiting for login attempts
5. Use secure password hashing (bcrypt, argon2)
6. Implement proper session management
7. Add role-based access control (RBAC)
8. Log all admin actions for audit trails

## Testing

For development/testing, the login component accepts any valid email format and password (min 6 characters). The mock authentication flow:

1. User enters credentials
2. Form validates input
3. Shows loading state (1.5s simulation)
4. Generates mock token
5. Stores in localStorage
6. Redirects to dashboard

Replace this with your actual authentication logic.

## Next Steps

1. Implement backend API endpoints
2. Connect frontend to real API
3. Add data tables for management sections
4. Implement CRUD operations
5. Add file upload for images
6. Implement email notifications
7. Add analytics and reporting
8. Create admin user roles and permissions
