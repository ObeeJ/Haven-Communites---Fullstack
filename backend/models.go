package main

import (
	"time"
)

// User represents a system user
type User struct {
	ID        string    `json:"id" db:"id"`
	Email     string    `json:"email" db:"email"`
	Password  string    `json:"-" db:"password"`
	FirstName string    `json:"first_name" db:"first_name"`
	LastName  string    `json:"last_name" db:"last_name"`
	Role      string    `json:"role" db:"role"` // admin, user
	IsActive  bool      `json:"is_active" db:"is_active"`
	CreatedAt time.Time `json:"created_at" db:"created_at"`
	UpdatedAt time.Time `json:"updated_at" db:"updated_at"`
}

// Property represents a real estate property
type Property struct {
	ID          string    `json:"id" db:"id"`
	Title       string    `json:"title" db:"title"`
	Slug        string    `json:"slug" db:"slug"`
	Description string    `json:"description" db:"description"`
	Location    string    `json:"location" db:"location"`
	Price       float64   `json:"price" db:"price"`
	Status      string    `json:"status" db:"status"` // available, sold, pending
	Units       int       `json:"units" db:"units"`
	Acres       float64   `json:"acres" db:"acres"`
	Features    []string  `json:"features" db:"features"`
	ImageURL    string    `json:"image_url" db:"image_url"`
	ImageAlt    string    `json:"image_alt" db:"image_alt"`
	CreatedAt   time.Time `json:"created_at" db:"created_at"`
	UpdatedAt   time.Time `json:"updated_at" db:"updated_at"`
}

// BlogPost represents a blog article
type BlogPost struct {
	ID        string    `json:"id" db:"id"`
	Title     string    `json:"title" db:"title"`
	Slug      string    `json:"slug" db:"slug"`
	Excerpt   string    `json:"excerpt" db:"excerpt"`
	Content   string    `json:"content" db:"content"`
	Category  string    `json:"category" db:"category"` // Land, Homes, Construction, Investment
	Tags      []string  `json:"tags" db:"tags"`
	ImageURL  string    `json:"image_url" db:"image_url"`
	ImageAlt  string    `json:"image_alt" db:"image_alt"`
	Author    string    `json:"author" db:"author"`
	Published bool      `json:"published" db:"published"`
	CreatedAt time.Time `json:"created_at" db:"created_at"`
	UpdatedAt time.Time `json:"updated_at" db:"updated_at"`
}

// ContactSubmission represents a contact form submission
type ContactSubmission struct {
	ID          string    `json:"id" db:"id"`
	FirstName   string    `json:"first_name" db:"first_name"`
	LastName    string    `json:"last_name" db:"last_name"`
	Email       string    `json:"email" db:"email"`
	Phone       string    `json:"phone" db:"phone"`
	Message     string    `json:"message" db:"message"`
	PropertyID  *string   `json:"property_id" db:"property_id"`
	IsRead      bool      `json:"is_read" db:"is_read"`
	CreatedAt   time.Time `json:"created_at" db:"created_at"`
}

// NewsletterSubscriber represents a newsletter subscription
type NewsletterSubscriber struct {
	ID        string    `json:"id" db:"id"`
	Email     string    `json:"email" db:"email"`
	Name      string    `json:"name" db:"name"`
	Active    bool      `json:"active" db:"active"`
	CreatedAt time.Time `json:"created_at" db:"created_at"`
	UnsubAt   *time.Time `json:"unsub_at" db:"unsub_at"`
}

// Review represents a user review
type Review struct {
	ID         string    `json:"id" db:"id"`
	UserID     string    `json:"user_id" db:"user_id"`
	PropertyID string    `json:"property_id" db:"property_id"`
	Rating     int       `json:"rating" db:"rating"` // 1-5
	Comment    string    `json:"comment" db:"comment"`
	CreatedAt  time.Time `json:"created_at" db:"created_at"`
	UpdatedAt  time.Time `json:"updated_at" db:"updated_at"`
}

// Favorite represents user's favorited property
type Favorite struct {
	ID         string    `json:"id" db:"id"`
	UserID     string    `json:"user_id" db:"user_id"`
	PropertyID string    `json:"property_id" db:"property_id"`
	CreatedAt  time.Time `json:"created_at" db:"created_at"`
}

// BrochureRequest represents a brochure download request
type BrochureRequest struct {
	ID         string    `json:"id" db:"id"`
	UserID     *string   `json:"user_id" db:"user_id"`
	Email      string    `json:"email" db:"email"`
	PropertyID string    `json:"property_id" db:"property_id"`
	CreatedAt  time.Time `json:"created_at" db:"created_at"`
}

// ============ REQUEST/RESPONSE TYPES ============

// LoginRequest for authentication
type LoginRequest struct {
	Email    string `json:"email" validate:"required,email"`
	Password string `json:"password" validate:"required,min=6"`
}

// SignupRequest for user registration
type SignupRequest struct {
	Email     string `json:"email" validate:"required,email"`
	Password  string `json:"password" validate:"required,min=6"`
	FirstName string `json:"first_name" validate:"required"`
	LastName  string `json:"last_name" validate:"required"`
}

// AuthResponse contains token and user info
type AuthResponse struct {
	AccessToken  string `json:"access_token"`
	RefreshToken string `json:"refresh_token"`
	ExpiresIn    int    `json:"expires_in"`
	User         User   `json:"user"`
}

// ContactFormRequest for contact submissions
type ContactFormRequest struct {
	FirstName  string `json:"first_name" validate:"required"`
	LastName   string `json:"last_name" validate:"required"`
	Email      string `json:"email" validate:"required,email"`
	Phone      string `json:"phone" validate:"required"`
	Message    string `json:"message" validate:"required,min=10"`
	PropertyID *string `json:"property_id"`
}

// NewsletterRequest for newsletter signup
type NewsletterRequest struct {
	Email string `json:"email" validate:"required,email"`
	Name  string `json:"name"`
}

// ReviewRequest for creating reviews
type ReviewRequest struct {
	PropertyID string `json:"property_id" validate:"required"`
	Rating     int    `json:"rating" validate:"required,min=1,max=5"`
	Comment    string `json:"comment"`
}

// ErrorResponse for API errors
type ErrorResponse struct {
	Error   string `json:"error"`
	Message string `json:"message"`
	Code    int    `json:"code"`
}

// SuccessResponse for successful API responses
type SuccessResponse struct {
	Success bool        `json:"success"`
	Data    interface{} `json:"data,omitempty"`
	Message string      `json:"message,omitempty"`
}

// DashboardStats for admin dashboard
type DashboardStats struct {
	TotalProperties         int       `json:"total_properties"`
	TotalBlogPosts          int       `json:"total_blog_posts"`
	TotalContacts           int       `json:"total_contacts"`
	UnreadContacts          int       `json:"unread_contacts"`
	NewsletterSubscribers   int       `json:"newsletter_subscribers"`
	RegisteredUsers         int       `json:"registered_users"`
	RecentProperties        []Property    `json:"recent_properties,omitempty"`
	RecentBlogPosts         []BlogPost    `json:"recent_blog_posts,omitempty"`
	RecentContacts          []ContactSubmission `json:"recent_contacts,omitempty"`
	LastUpdated             time.Time `json:"last_updated"`
}

// PaginationParams for list endpoints
type PaginationParams struct {
	Page  int `json:"page" query:"page"`
	Limit int `json:"limit" query:"limit"`
}

// ListResponse for paginated responses
type ListResponse struct {
	Data       interface{} `json:"data"`
	Page       int         `json:"page"`
	Limit      int         `json:"limit"`
	Total      int         `json:"total"`
	TotalPages int         `json:"total_pages"`
}
