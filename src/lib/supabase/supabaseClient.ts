// src/lib/supabase/supabaseClient.ts
import { createBrowserClient } from "@supabase/ssr"

// Hardcode public client values to avoid build failures
const SUPABASE_URL = "https://wahvmexfujelifextmjj.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhaHZtZXhmdWplbGlmZXh0bWpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NTc3OTcsImV4cCI6MjA3NzEzMzc5N30.Th1_-aq0lNZSQ_siEsZ7e3F1lUZScOCuFhl-AC9XKHo"

export function createClient() {
  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY)
}
