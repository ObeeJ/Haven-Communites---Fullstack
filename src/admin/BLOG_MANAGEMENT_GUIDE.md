# Blog Management System

Complete guide for the Haven Communities admin blog management system.

## Overview

The blog management system provides a complete solution for creating, editing, listing, and managing blog posts. It's built with the exact Figma designs and is ready for backend integration.

## Components

### 1. AdminBlogApp (`AdminBlogApp.tsx`)

Main controller component that manages the workflow between different views.

**Views:**

- `list` - Shows all blog posts in a grid
- `create` - Shows editor for creating new post
- `edit` - Shows editor for editing existing post
- `preview` - Shows preview of the blog post

**Usage:**

```typescript
import AdminBlogApp from './admin/AdminBlogApp';

function App() {
  return <AdminBlogApp />;
}
```

### 2. AdminBlogList (`AdminBlogList.tsx`)

Displays all blog posts in a responsive grid layout with pagination.

**Features:**

- Grid layout with blog post cards
- Each card shows:
  - Cover image with gradient overlay
  - Author name and publish date
  - Category badge
  - Title and excerpt
  - "Read post" call-to-action
- "Add New Blog" card for creating posts
- Pagination controls (Previous/Next)
- Page number indicators
- Click any post card to edit it
- Fully responsive design

**Props:**

```typescript
interface AdminBlogListProps {
  onCreateNew?: () => void; // Called when "Add New Blog" is clicked
  onEditPost?: (id: string) => void; // Called when a post is clicked
  onLogout?: () => void; // Called when logout is clicked
}
```

**API Integration Points:**

```typescript
// TODO: Replace mock data with API call
const fetchBlogPosts = async (page: number) => {
  const response = await fetch(
    `/api/admin/blog-posts?page=${page}&limit=10`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    },
  );
  return response.json();
};
```

### 3. AdminBlogEditor (`AdminBlogEditor.tsx`)

Rich form for creating and editing blog posts.

**Features:**

- **Text Formatting Toolbar:**
  - Bold, Italic, Underline
  - Link insertion
  - Bullet and numbered lists
- **Cover Photo:**
  - Drag and drop or click to upload
  - Image preview
  - Accepts: SVG, PNG, JPG, GIF (max 800x400px)
- **Form Fields:**
  - Blog Title (text input)
  - Blog Category (dropdown: Homes, Investment, Construction, Land)
  - Short Description (textarea, 250px height)
  - Content Images (multiple file upload)
  - Main Content (textarea, 844px height)
- **Action Buttons:**
  - Cancel - Returns to list view
  - Preview - Shows preview of the blog post

**Props:**

```typescript
interface AdminBlogEditorProps {
  blogId?: string; // Blog ID when editing
  onSave?: (data: BlogFormData) => void; // Called when saving
  onCancel?: () => void; // Called when cancel is clicked
  onPreview?: (data: BlogFormData) => void; // Called when preview is clicked
  onLogout?: () => void; // Called when logout is clicked
}

interface BlogFormData {
  title: string;
  category: string;
  shortDescription: string;
  coverImage: File | null;
  coverImageUrl: string;
  content: string;
  contentImages: File[];
}
```

**API Integration:**

```typescript
const handleSubmit = async (formData: BlogFormData) => {
  const data = new FormData();
  data.append("title", formData.title);
  data.append("category", formData.category);
  data.append("shortDescription", formData.shortDescription);
  data.append("content", formData.content);

  if (formData.coverImage) {
    data.append("coverImage", formData.coverImage);
  }

  formData.contentImages.forEach((image, index) => {
    data.append(`contentImages[${index}]`, image);
  });

  const response = await fetch("/api/admin/blog-posts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
    },
    body: data,
  });

  return response.json();
};
```

## Complete Workflow

### Creating a New Blog Post

1. User clicks "Add New Blog" button in AdminBlogList
2. `onCreateNew()` is called
3. AdminBlogApp switches to `create` view
4. AdminBlogEditor is rendered without `blogId`
5. User fills in the form:
   - Uploads cover photo
   - Enters title
   - Selects category
   - Writes short description
   - Uploads content images (optional)
   - Writes main content
6. User clicks "Preview" button
7. `onPreview(formData)` is called with the form data
8. Blog post data is saved via API

### Editing an Existing Blog Post

1. User clicks on a blog post card in AdminBlogList
2. `onEditPost(blogId)` is called
3. AdminBlogApp switches to `edit` view with the blog ID
4. AdminBlogEditor is rendered with the `blogId`
5. Editor fetches the blog post data from API
6. Form is pre-filled with existing data
7. User makes changes
8. User clicks "Preview" button
9. `onPreview(formData)` is called
10. Changes are saved via API

### Listing Blog Posts

1. AdminBlogList component loads
2. Fetches blog posts from API (page 1)
3. Displays posts in grid layout
4. User can:
   - Click a post to edit
   - Click "Add New Blog" to create
   - Navigate pages using Previous/Next buttons
5. Clicking page number or navigation fetches new page from API

## Backend API Requirements

### GET /api/admin/blog-posts

**Query Parameters:**

- `page` (number) - Page number (default: 1)
- `limit` (number) - Items per page (default: 10)
- `category` (string, optional) - Filter by category
- `search` (string, optional) - Search in title/content

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": "blog_123",
      "title": "Lorem ipsum dolor sit amet",
      "excerpt": "Brief description...",
      "category": "Homes",
      "author": "Olivia Rhye",
      "publishedAt": "2025-01-20T00:00:00Z",
      "imageUrl": "https://...",
      "slug": "lorem-ipsum-dolor"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

### GET /api/admin/blog-posts/:id

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "blog_123",
    "title": "Lorem ipsum dolor sit amet",
    "category": "Homes",
    "shortDescription": "Brief description...",
    "content": "Full blog content...",
    "coverImageUrl": "https://...",
    "contentImageUrls": ["https://...", "https://..."],
    "author": "Olivia Rhye",
    "publishedAt": "2025-01-20T00:00:00Z",
    "createdAt": "2025-01-20T00:00:00Z",
    "updatedAt": "2025-01-20T00:00:00Z",
    "slug": "lorem-ipsum-dolor"
  }
}
```

### POST /api/admin/blog-posts

**Content-Type:** `multipart/form-data`

**Form Fields:**

- `title` (string, required)
- `category` (string, required)
- `shortDescription` (string, required)
- `content` (string, required)
- `coverImage` (file, required)
- `contentImages[]` (files, optional)
- `author` (string, required)
- `publishedAt` (ISO date string, optional)

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "blog_123",
    "title": "Lorem ipsum dolor sit amet",
    "slug": "lorem-ipsum-dolor",
    "category": "Homes",
    "shortDescription": "Brief description...",
    "content": "Full blog content...",
    "coverImageUrl": "https://...",
    "contentImageUrls": ["https://...", "https://..."],
    "author": "Olivia Rhye",
    "publishedAt": "2025-01-20T00:00:00Z",
    "createdAt": "2025-01-20T00:00:00Z",
    "updatedAt": "2025-01-20T00:00:00Z"
  }
}
```

### PUT /api/admin/blog-posts/:id

Same as POST, but for updating existing posts.

### DELETE /api/admin/blog-posts/:id

**Response:**

```json
{
  "success": true,
  "message": "Blog post deleted successfully"
}
```

## Image Upload Handling

### Frontend Implementation

The editor provides file input refs for:

1. Cover image (single file)
2. Content images (multiple files)

**Example:**

```typescript
const coverImageInputRef = useRef<HTMLInputElement>(null);
const contentImageInputRef = useRef<HTMLInputElement>(null);

// Trigger file input
onClick={() => coverImageInputRef.current?.click()}

// Handle file selection
const handleCoverImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    // Create preview URL
    const imageUrl = URL.createObjectURL(file);
    setFormData(prev => ({ ...prev, coverImage: file, coverImageUrl: imageUrl }));
  }
};
```

### Backend Implementation

Your backend should:

1. Validate file types (SVG, PNG, JPG, GIF)
2. Validate file sizes (max 800x400px for cover, adjust as needed)
3. Store files in cloud storage (AWS S3, Cloudinary, etc.)
4. Return public URLs for the images
5. Associate image URLs with blog post records

**Recommended Storage Structure:**

```
/blog-posts/
  /{blog-id}/
    /cover.jpg
    /content-1.jpg
    /content-2.jpg
    /content-3.jpg
```

## Validation

### Client-Side Validation

The editor performs basic validation:

- Title: Required, min 1 character
- Category: Required, must be one of the predefined options
- Short Description: Required
- Cover Image: Required for new posts
- Content: Required, min 1 character

**Add custom validation:**

```typescript
const validateForm = (data: BlogFormData): string | null => {
  if (!data.title.trim()) return "Title is required";
  if (!data.category) return "Category is required";
  if (!data.shortDescription.trim())
    return "Short description is required";
  if (!data.coverImage && !blogId)
    return "Cover image is required";
  if (!data.content.trim()) return "Content is required";

  if (data.title.length > 200)
    return "Title is too long (max 200 characters)";
  if (data.shortDescription.length > 500)
    return "Short description is too long (max 500 characters)";

  return null; // Valid
};
```

### Server-Side Validation

Always validate on the server:

- Sanitize HTML content
- Check file types and sizes
- Validate required fields
- Check for SQL injection attempts
- Validate category against allowed values

## Security Considerations

1. **Authentication:** All blog management endpoints require authentication
2. **Authorization:** Verify user has admin role
3. **File Upload Security:**
   - Validate file types
   - Scan for malware
   - Limit file sizes
   - Use secure file names (avoid user input in filenames)
4. **Content Security:**
   - Sanitize HTML content
   - Prevent XSS attacks
   - Escape user input
5. **Rate Limiting:** Implement rate limits on upload endpoints

## Styling Customization

All components use Tailwind CSS classes matching the Figma designs exactly. To customize:

1. **Colors:**
   - Primary blue: `#155eef`
   - Text colors: `#181d27`, `#535862`, `#475467`
   - Border colors: `#eaecf0`, `#d0d5dd`

2. **Fonts:**
   - Headings: Avenir Heavy
   - Body: Avenir Regular, Avenir Medium
   - Labels: Inter Semi Bold, Inter Medium

3. **Spacing:**
   - Component gaps: 24px, 32px
   - Padding: 16px, 24px, 32px
   - Border radius: 8px, 12px, 16px

## Testing

### Manual Testing Checklist

- [ ] Create new blog post
- [ ] Upload cover image
- [ ] Upload multiple content images
- [ ] Fill all form fields
- [ ] Preview blog post
- [ ] Edit existing blog post
- [ ] Pagination works correctly
- [ ] Search functionality (if implemented)
- [ ] Category filtering (if implemented)
- [ ] Responsive design on mobile
- [ ] Logout functionality
- [ ] Error handling
- [ ] Loading states

### Test Data

Use the mock data in `AdminBlogList.tsx` for testing the list view. It includes 8 sample blog posts with different categories and authors.

## Future Enhancements

1. **Rich Text Editor:** Replace textarea with WYSIWYG editor (TinyMCE, Quill, Draft.js)
2. **Image Editor:** Add crop/resize functionality
3. **Draft Saving:** Auto-save drafts periodically
4. **Version History:** Track changes to blog posts
5. **SEO Fields:** Add meta title, description, keywords
6. **Social Media Preview:** Show how post appears on social platforms
7. **Scheduled Publishing:** Schedule posts for future dates
8. **Categories Management:** Add/edit/delete categories dynamically
9. **Tags System:** Add tagging functionality
10. **Analytics:** Track views, likes, shares per post

## Troubleshooting

### Images not uploading

Check:

- File input ref is properly set
- `onChange` handler is attached
- File size is within limits
- CORS is configured on backend
- Backend accepts multipart/form-data

### Form data not saving

Check:

- API endpoint is correct
- Authentication token is valid
- FormData is properly constructed
- Backend accepts all field names
- Network tab in DevTools for errors

### Preview not working

Check:

- `onPreview` callback is defined
- Preview component is implemented
- Data is being passed correctly
- State management is working

## Support

For issues or questions:

1. Check console for error messages
2. Verify API responses in Network tab
3. Review backend logs
4. Check authentication token validity
5. Ensure all required fields are filled