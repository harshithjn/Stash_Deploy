(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/watchlist/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WatchlistPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$lib$2f$supabase$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/lib/supabase/supabaseClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function WatchlistPage() {
    _s();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$lib$2f$supabase$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const [watchlist, setWatchlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WatchlistPage.useEffect": ()=>{
            const fetchWatchlist = {
                "WatchlistPage.useEffect.fetchWatchlist": async ()=>{
                    const { data: { user } } = await supabase.auth.getUser();
                    if (!user) {
                        setError("You must be logged in to view your watchlist.");
                        setLoading(false);
                        return;
                    }
                    const { data, error } = await supabase.from("watchlist").select("symbol, name").eq("user_id", user.id);
                    if (error) setError(error.message);
                    else setWatchlist(data || []);
                    setLoading(false);
                }
            }["WatchlistPage.useEffect.fetchWatchlist"];
            fetchWatchlist();
        }
    }["WatchlistPage.useEffect"], [
        supabase
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold mb-8",
                    children: "Your Watchlist"
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/watchlist/page.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-500 text-center",
                    children: "Loading your watchlist..."
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/watchlist/page.tsx",
                    lineNumber: 45,
                    columnNumber: 11
                }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-red-500 text-center",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/watchlist/page.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this) : watchlist.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-500 text-center",
                    children: [
                        "No coins in your watchlist yet.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-400 mt-2",
                            children: [
                                "Visit ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/market",
                                    className: "underline",
                                    children: "Market"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/watchlist/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 21
                                }, this),
                                " to add some."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/watchlist/page.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/watchlist/page.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
                    children: watchlist.map((coin, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `/asset/${coin.symbol}`,
                            className: "block bg-[#0b0b0b] border border-gray-800 p-6 rounded-xl hover:bg-gray-900 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-semibold",
                                    children: coin.name
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/watchlist/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-sm uppercase",
                                    children: coin.symbol
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/watchlist/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/watchlist/page.tsx",
                            lineNumber: 62,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/watchlist/page.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/watchlist/page.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/watchlist/page.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(WatchlistPage, "XDVraoxkFQDdpjk0gRodH2D0ZUU=");
_c = WatchlistPage;
var _c;
__turbopack_context__.k.register(_c, "WatchlistPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=2588a_Portfolio_Tracker_Stash_src_app_%28main%29_watchlist_page_tsx_c5174059._.js.map