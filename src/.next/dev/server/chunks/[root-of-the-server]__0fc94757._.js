module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/lib/supabase/supabaseServer.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabaseServer",
    ()=>supabaseServer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/node_modules/@supabase/supabase-js/dist/module/index.js [app-route] (ecmascript) <locals>");
;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY env vars");
}
const supabaseServer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
}),
"[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/api/dashboard/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/api/dashboard/[id]/route.ts
__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$lib$2f$supabase$2f$supabaseServer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/lib/supabase/supabaseServer.ts [app-route] (ecmascript)");
;
;
async function GET(req, context) {
    try {
        const { id } = await context.params;
        // Fetch user profile
        const { data: profile, error: profileErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$lib$2f$supabase$2f$supabaseServer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseServer"].from("profiles").select("id, full_name, email, avatar_url").eq("id", id).single();
        if (profileErr) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: profileErr.message
            }, {
                status: 404
            });
        }
        // Fetch user's crypto holdings (example table: holdings)
        const { data: holdings, error: holdingsErr } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$lib$2f$supabase$2f$supabaseServer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["supabaseServer"].from("holdings").select("id, symbol, amount, avg_price, current_price").eq("owner_id", id);
        if (holdingsErr) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: holdingsErr.message
            }, {
                status: 500
            });
        }
        // compute some derived stats
        const portfolioValue = holdings?.reduce((sum, h)=>{
            const current = Number(h.current_price ?? 0) * Number(h.amount ?? 0);
            return sum + current;
        }, 0) ?? 0;
        const response = {
            profile,
            holdings,
            stats: {
                portfolioValue,
                assetsCount: holdings?.length ?? 0
            }
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(response);
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err.message || "Server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0fc94757._.js.map