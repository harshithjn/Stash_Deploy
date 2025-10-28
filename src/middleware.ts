import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const cookieStore = request.cookies
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          response.cookies.set(name, value, options)
        },
        remove(name: string, options: CookieOptions) {
          response.cookies.set(name, '', options)
        },
      },
    }
  )

  // Get the currently logged-in user
  const { data: { user } } = await supabase.auth.getUser()
  
  const { pathname } = request.nextUrl

  // --- Start of Protection Logic ---

  // 1. If user is NOT logged in
  if (!user) {
    // Protect all dashboard routes
    if (pathname.startsWith('/dashboard')) {
      // Redirect unauthenticated users to the auth login page
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
    // Allow access to all other pages (like auth pages, homepage)
    return response
  }

  // 2. If user IS logged in

  // If a logged-in user tries to go to login/register/auth pages, redirect them to their dashboard
  if (
    pathname.startsWith('/login') ||
    pathname.startsWith('/register') ||
    pathname.startsWith('/auth/login')
  ) {
    return NextResponse.redirect(new URL(`/dashboard/${user.id}`, request.url))
  }

  // Protect dashboard routes so only the owner (user.id) can access their dashboard path
  if (pathname.startsWith('/dashboard')) {
    // Split and preserve subpaths
    const parts = pathname.split('/').filter(Boolean) // e.g. ['dashboard', '<id>', 'assets', ...]
    const requestedId = parts[1] // may be undefined if URL is just '/dashboard' or '/dashboard/'
    const tail = parts.slice(2).join('/') // preserve trailing segments after id

    // If there's no id in URL or it doesn't match the logged-in user's id, redirect to correct dashboard path
    if (!requestedId || requestedId !== user.id) {
      const targetPath = `/dashboard/${user.id}${tail ? '/' + tail : ''}`
      return NextResponse.redirect(new URL(targetPath, request.url))
    }
    // requestedId matches user.id => allow access
  }

  // Allow them to proceed to any other page
  return response
}

// Config to match all routes except static files
export const config = {
  matcher: [
    /*
      * Match all request paths except for the ones starting with:
      * - _next/static (static files)
      * - _next/image (image optimization files)
      * - favicon.ico (favicon file)
      */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}

