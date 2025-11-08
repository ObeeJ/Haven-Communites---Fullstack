.PHONY: help build run dev test docker-up docker-down install lint fmt clean

# Variables
APP_NAME=haven-communities-api
GO_FILES=$(shell find . -name '*.go' -type f)
PORT?=8101

help: ## Display help message
	@echo "Haven Communities Backend - Development Commands"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## Install Go dependencies
	@echo "Installing dependencies..."
	go mod download
	go mod tidy
	@echo "✓ Dependencies installed"

build: ## Build the application
	@echo "Building $(APP_NAME)..."
	go build -o bin/$(APP_NAME) .
	@echo "✓ Build complete: bin/$(APP_NAME)"

run: build ## Run the application
	@echo "Starting server on port $(PORT)..."
	PORT=$(PORT) ./bin/$(APP_NAME)

dev: ## Run with hot reload (requires air)
	@command -v air >/dev/null 2>&1 || (echo "Installing air..." && go install github.com/cosmtrek/air@latest)
	air

test: ## Run tests
	@echo "Running tests..."
	go test -v -race -cover ./...

coverage: ## Generate test coverage
	@echo "Generating coverage report..."
	go test -coverprofile=coverage.out ./...
	go tool cover -html=coverage.out -o coverage.html
	@echo "✓ Coverage report: coverage.html"

lint: ## Run linter
	@command -v golangci-lint >/dev/null 2>&1 || (echo "Installing golangci-lint..." && go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest)
	golangci-lint run

fmt: ## Format code
	@echo "Formatting code..."
	gofmt -w .
	goimports -w .
	@echo "✓ Code formatted"

vet: ## Run go vet
	@echo "Running go vet..."
	go vet ./...

docker-build: ## Build Docker image
	@echo "Building Docker image..."
	docker build -t $(APP_NAME):latest .
	@echo "✓ Docker image built"

docker-up: ## Start Docker containers
	@echo "Starting containers..."
	docker-compose up -d
	@echo "✓ Containers started"
	@echo "  - API: http://localhost:$(PORT)"
	@echo "  - Adminer: http://localhost:8080"
	@echo "  - Database: localhost:5432"

docker-down: ## Stop Docker containers
	@echo "Stopping containers..."
	docker-compose down
	@echo "✓ Containers stopped"

docker-logs: ## View Docker logs
	docker-compose logs -f api

docker-shell: ## Open shell in API container
	docker-compose exec api sh

db-shell: ## Open PostgreSQL shell
	docker-compose exec postgres psql -U havencommunities -d havencommunities

db-migrate: ## Run database migrations (from schema.sql)
	@echo "Applying migrations..."
	docker-compose exec postgres psql -U havencommunities -d havencommunities -f /docker-entrypoint-initdb.d/01-schema.sql
	@echo "✓ Migrations applied"

health-check: ## Check API health
	@echo "Checking API health..."
	@curl -s http://localhost:$(PORT)/health | jq .
	@echo ""

test-login: ## Test login endpoint
	@echo "Testing login endpoint..."
	@curl -s -X POST http://localhost:$(PORT)/api/v1/auth/login \
		-H "Content-Type: application/json" \
		-d '{"email":"admin@havencommunities.com","password":"admin123"}' | jq .

test-properties: ## Test get properties endpoint
	@echo "Testing properties endpoint..."
	@curl -s http://localhost:$(PORT)/api/v1/properties | jq .

test-blog: ## Test blog endpoint
	@echo "Testing blog endpoint..."
	@curl -s http://localhost:$(PORT)/api/v1/blog | jq .

gen-env: ## Generate .env file from example
	@if [ ! -f .env ]; then \
		cp .env.example .env; \
		echo "✓ .env file created from .env.example"; \
		echo "⚠ Please update .env with your Supabase credentials"; \
	else \
		echo "⚠ .env file already exists"; \
	fi

clean: ## Clean build artifacts
	@echo "Cleaning..."
	rm -f bin/$(APP_NAME)
	rm -f coverage.out coverage.html
	rm -rf vendor/
	go clean -cache -testcache
	@echo "✓ Clean complete"

generate-docs: ## Generate API documentation
	@echo "Generating API documentation..."
	@echo "TODO: Implement with swag/swagger"

deps-check: ## Check for outdated dependencies
	go list -u -m all

update-deps: ## Update all dependencies
	@echo "Updating dependencies..."
	go get -u ./...
	go mod tidy
	@echo "✓ Dependencies updated"

version: ## Show version info
	@echo "Go Version: $$(go version)"
	@echo "App Name: $(APP_NAME)"
	@echo "Port: $(PORT)"

.DEFAULT_GOAL := help
