import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const cookieStore = request.cookies;
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          response.cookies.set(name, value, options);
        },
        remove(name: string, options: CookieOptions) {
          response.cookies.set(name, "", options);
        },
      },
    }
  );

  // Get the currently logged-in user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  // --- START: Route protection logic ---

  // If NOT logged in
  if (!user) {
    if (
      pathname.startsWith("/dashboard") ||
      pathname.startsWith("/portfolio") ||
      pathname.startsWith("/watchlist") ||
      pathname.startsWith("/alerts") ||
      pathname.startsWith("/notifications")
    ) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return response;
  }

  // If logged in, prevent going back to login/register
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/auth/login")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return response;
}

// ✅ Important: exclude ALL API routes (especially OAuth callback)
export const config = {
  matcher: [
    // Match all routes except API, Next.js internals, static files, and favicon
    "/((?!_next/static|_next/image|favicon.ico|api|auth).*)",
  ],
};
