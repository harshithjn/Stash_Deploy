module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DashboardPage() {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!id) return;
        setLoading(true);
        setError(null);
        fetch(`/api/dashboard/${id}`).then(async (res)=>{
            if (!res.ok) {
                const err = await res.json().catch(()=>({}));
                throw new Error(err?.error || `Failed (${res.status})`);
            }
            return res.json();
        }).then((json)=>setData(json)).catch((e)=>setError(e.message)).finally(()=>setLoading(false));
    }, [
        id
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-6xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "lg:col-span-1 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 8
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "p-6 bg-[#0b0b0b] border border-gray-800 rounded-2xl",
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-pulse space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-6 bg-gray-800 rounded w-2/3"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-4 bg-gray-800 rounded w-1/2"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-red-500",
                                children: [
                                    "Error: ",
                                    error
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white text-lg",
                                        children: data?.profile?.full_name?.[0]?.toUpperCase() ?? "U"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold text-lg",
                                                children: data?.profile?.full_name
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-400",
                                                children: data?.profile?.email
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500 mt-2",
                                                children: [
                                                    "ID: ",
                                                    data?.profile?.id
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 8
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.05
                            },
                            className: "p-6 bg-[#0b0b0b] border border-gray-800 rounded-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm text-gray-400 mb-3",
                                    children: "Portfolio"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 animate-pulse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-8 bg-gray-800 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-6 bg-gray-800 rounded w-2/3"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold",
                                            children: [
                                                "$",
                                                Number(data?.stats.portfolioValue ?? 0).toLocaleString(undefined, {
                                                    maximumFractionDigits: 2
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-400 mt-2",
                                            children: [
                                                data?.stats.assetsCount,
                                                " assets"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "lg:col-span-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        className: "p-6 bg-[#0b0b0b] border border-gray-800 rounded-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold",
                                        children: "Holdings"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-gray-400",
                                        children: "Live Prices"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: Array.from({
                                    length: 4
                                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-14 bg-gray-900 rounded animate-pulse"
                                    }, i, false, {
                                        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-red-500",
                                children: [
                                    "Error: ",
                                    error
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this) : (data?.holdings?.length ?? 0) === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-500",
                                children: "No holdings yet."
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-left text-gray-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            className: "text-gray-500 text-sm border-b border-gray-800",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3",
                                                        children: "Asset"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3",
                                                        children: "Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3",
                                                        children: "Avg Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3",
                                                        children: "Current Price"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-3",
                                                        children: "Value"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: data.holdings.map((h)=>{
                                                const value = Number(h.amount) * Number(h.current_price);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-b border-gray-900 hover:bg-gray-900 transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-4 font-semibold",
                                                            children: h.symbol
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-4",
                                                            children: h.amount
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-4",
                                                            children: [
                                                                "$",
                                                                h.avg_price.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-4",
                                                            children: [
                                                                "$",
                                                                h.current_price.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-4 font-semibold",
                                                            children: [
                                                                "$",
                                                                value.toFixed(2)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, h.id, true, {
                                                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/dashboard/[id]/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__41ded091._.js.map