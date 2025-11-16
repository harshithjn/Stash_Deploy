import { createClient } from "@supabase/supabase-js";

// 🔒 SAFE — This file only runs on the server (API routes, middleware, server actions).

const SUPABASE_URL = "https://wahvmexfujelifextmjj.supabase.co";

const SUPABASE_SERVICE_ROLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhaHZtZXhmdWplbGlmZXh0bWpqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTU1Nzc5NywiZXhwIjoyMDc3MTMzNzk3fQ.6hJ_n7hu_PIhpExP6fAYn2xoleND06-jh3PBphaV9rs";

export const supabaseServer = createClient(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY
);
