(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__5ae4cb75._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/node_modules/@supabase/ssr/dist/module/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/node_modules/@supabase/ssr/dist/module/createServerClient.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
;
async function middleware(request) {
    let response = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
        request: {
            headers: request.headers
        }
    });
    const cookieStore = request.cookies;
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://wahvmexfujelifextmjj.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhaHZtZXhmdWplbGlmZXh0bWpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NTc3OTcsImV4cCI6MjA3NzEzMzc5N30.Th1_-aq0lNZSQ_siEsZ7e3F1lUZScOCuFhl-AC9XKHo"), {
        cookies: {
            get (name) {
                return cookieStore.get(name)?.value;
            },
            set (name, value, options) {
                response.cookies.set(name, value, options);
            },
            remove (name, options) {
                response.cookies.set(name, '', options);
            }
        }
    });
    // Get the currently logged-in user
    const { data: { user } } = await supabase.auth.getUser();
    const { pathname } = request.nextUrl;
    // --- Start of Protection Logic ---
    // 1. If user is NOT logged in
    if (!user) {
        // Protect all dashboard routes
        if (pathname.startsWith('/dashboard')) {
            // Redirect unauthenticated users to the auth login page
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/auth/login', request.url));
        }
        // Allow access to all other pages (like auth pages, homepage)
        return response;
    }
    // 2. If user IS logged in
    // If a logged-in user tries to go to login/register/auth pages, redirect them to their dashboard
    if (pathname.startsWith('/login') || pathname.startsWith('/register') || pathname.startsWith('/auth/login')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(`/dashboard/${user.id}`, request.url));
    }
    // Protect dashboard routes so only the owner (user.id) can access their dashboard path
    if (pathname.startsWith('/dashboard')) {
        // Split and preserve subpaths
        const parts = pathname.split('/').filter(Boolean) // e.g. ['dashboard', '<id>', 'assets', ...]
        ;
        const requestedId = parts[1] // may be undefined if URL is just '/dashboard' or '/dashboard/'
        ;
        const tail = parts.slice(2).join('/') // preserve trailing segments after id
        ;
        // If there's no id in URL or it doesn't match the logged-in user's id, redirect to correct dashboard path
        if (!requestedId || requestedId !== user.id) {
            const targetPath = `/dashboard/${user.id}${tail ? '/' + tail : ''}`;
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(targetPath, request.url));
        }
    // requestedId matches user.id => allow access
    }
    // Allow them to proceed to any other page
    return response;
}
const config = {
    matcher: [
        /*
      * Match all request paths except for the ones starting with:
      * - _next/static (static files)
      * - _next/image (image optimization files)
      * - favicon.ico (favicon file)
      */ '/((?!_next/static|_next/image|favicon.ico).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__5ae4cb75._.js.map