import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  let response = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return request.cookies.get(name)?.value;
      },
      set(name: string, value: string) {
        response.cookies.set(name, value);
      },
      remove(name: string) {
        response.cookies.delete(name);
      },
    },
  });

  const { data } = await supabase.auth.getUser();
  const user = data.user;
  const { pathname } = request.nextUrl;

  // Protect private routes
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

  // Prevent logged-in users visiting login/register
  if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api|auth).*)"],
};
