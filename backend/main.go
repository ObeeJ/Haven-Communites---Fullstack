package main

import (
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
)

func main() {
	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, using environment variables")
	}

	// Initialize Supabase client
	if err := InitSupabase(); err != nil {
		log.Fatalf("Failed to initialize Supabase: %v", err)
	}

	// Create Fiber app
	app := fiber.New(fiber.Config{
		AppName: "Haven Communities API",
		Prefork: false,
	})

	// Middleware
	app.Use(logger.New())
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:5173,http://localhost:3000,https://havencommunities.com",
		AllowMethods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
		AllowHeaders: "Content-Type,Authorization",
	}))

	// Health check
	app.Get("/health", HealthCheck)

	// API routes
	api := app.Group("/api/v1")

	// Public routes
	setupPublicRoutes(api)

	// Protected routes
	api.Use(AuthMiddleware)
	setupProtectedRoutes(api)

	// Admin routes
	admin := api.Group("/admin", AuthMiddleware, AdminMiddleware)
	setupAdminRoutes(admin)

	// Start server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8101"
	}

	log.Printf("🚀 Server running on http://localhost:%s", port)
	if err := app.Listen(fmt.Sprintf(":%s", port)); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}

// HealthCheck returns server status
func HealthCheck(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{
		"status": "ok",
		"service": "Haven Communities API",
		"timestamp": fiber.Now(),
	})
}

// setupPublicRoutes configures public endpoints (no auth required)
func setupPublicRoutes(api fiber.Router) {
	// Properties/Projects
	api.Get("/properties", GetProperties)
	api.Get("/properties/:id", GetPropertyByID)
	api.Get("/properties/slug/:slug", GetPropertyBySlug)

	// Blog posts
	api.Get("/blog", GetBlogPosts)
	api.Get("/blog/:id", GetBlogPostByID)
	api.Get("/blog/slug/:slug", GetBlogPostBySlug)
	api.Get("/blog/category/:category", GetBlogByCategory)

	// Authentication
	api.Post("/auth/login", LoginAdmin)
	api.Post("/auth/signup", SignupUser)
	api.Post("/auth/refresh", RefreshToken)

	// Contact form
	api.Post("/contact", SubmitContactForm)

	// Newsletter
	api.Post("/newsletter/subscribe", SubscribeNewsletter)

	// Brochure download
	api.Post("/brochure/download", DownloadBrochure)
}

// setupProtectedRoutes configures user endpoints (auth required)
func setupProtectedRoutes(api fiber.Router) {
	// User profile
	api.Get("/me", GetUserProfile)
	api.Put("/me", UpdateUserProfile)

	// Favorites/Wishlist
	api.Get("/favorites", GetUserFavorites)
	api.Post("/favorites/:propertyId", AddToFavorites)
	api.Delete("/favorites/:propertyId", RemoveFromFavorites)

	// User reviews
	api.Post("/reviews", CreateReview)
	api.Get("/reviews/user", GetUserReviews)
}

// setupAdminRoutes configures admin endpoints
func setupAdminRoutes(api fiber.Router) {
	// Properties management
	api.Post("/properties", CreateProperty)
	api.Put("/properties/:id", UpdateProperty)
	api.Delete("/properties/:id", DeleteProperty)

	// Blog management
	api.Post("/blog", CreateBlogPost)
	api.Put("/blog/:id", UpdateBlogPost)
	api.Delete("/blog/:id", DeleteBlogPost)

	// Contact form submissions
	api.Get("/contacts", GetContactSubmissions)
	api.Get("/contacts/:id", GetContactByID)

	// Newsletter subscribers
	api.Get("/newsletter/subscribers", GetNewsletterSubscribers)
	api.Delete("/newsletter/subscribers/:email", UnsubscribeNewsletter)

	// Dashboard stats
	api.Get("/dashboard/stats", GetDashboardStats)
	api.Get("/dashboard/recent-contacts", GetRecentContacts)

	// Users management
	api.Get("/users", GetAllUsers)
	api.Get("/users/:id", GetUserByID)
	api.Put("/users/:id", UpdateUser)
	api.Delete("/users/:id", DeleteUser)

	// Image upload
	api.Post("/upload", UploadImage)
}
