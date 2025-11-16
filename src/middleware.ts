import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Supabase stores tokens in these cookies
  const accessToken =
    request.cookies.get("sb-access-token") ||
    request.cookies.get("sb:token");

  const loggedIn = !!accessToken;

  // --- BLOCK PRIVATE ROUTES IF NOT LOGGED IN ---
  if (!loggedIn) {
    if (
      pathname.startsWith("/dashboard") ||
      pathname.startsWith("/portfolio") ||
      pathname.startsWith("/watchlist") ||
      pathname.startsWith("/alerts") ||
      pathname.startsWith("/notifications")
    ) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // --- PREVENT LOGGED-IN USERS FROM SEEING LOGIN/REGISTER ---
  if (loggedIn) {
    if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api|auth).*)"],
};
