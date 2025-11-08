package main

import (
	"fmt"
	"os"

	"github.com/supabase-community/supabase-go"
)

var SupabaseClient *supabase.Client

// InitSupabase initializes Supabase client
func InitSupabase() error {
	supabaseURL := os.Getenv("SUPABASE_URL")
	supabaseKey := os.Getenv("SUPABASE_KEY")

	if supabaseURL == "" || supabaseKey == "" {
		return fmt.Errorf("SUPABASE_URL and SUPABASE_KEY environment variables must be set")
	}

	client, err := supabase.NewClient(supabaseURL, supabaseKey, nil)
	if err != nil {
		return err
	}

	SupabaseClient = client
	return nil
}
