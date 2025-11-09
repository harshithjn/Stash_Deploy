import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get("code");

    if (!code) {
      console.error("❌ No code returned from Google OAuth");
      return NextResponse.redirect(`${requestUrl.origin}/login?error=no_code`);
    }

    // ✅ Create Supabase client manually (no auth-helper, no cookie mismatch)
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // Exchange the code for a session directly
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("❌ Supabase auth error:", error.message);
      return NextResponse.redirect(
        `${requestUrl.origin}/login?error=${encodeURIComponent(error.message)}`
      );
    }

    console.log("✅ OAuth success! Redirecting to dashboard");
    return NextResponse.redirect(`${requestUrl.origin}/dashboard`);
  } catch (err: any) {
    console.error("❌ OAuth callback exception:", err.message);
    return NextResponse.redirect(
      `${new URL(request.url).origin}/login?error=oauth_failed`
    );
  }
}
