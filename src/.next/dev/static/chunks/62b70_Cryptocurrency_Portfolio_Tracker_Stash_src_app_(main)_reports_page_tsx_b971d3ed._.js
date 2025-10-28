(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReportsPage
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
function ReportsPage() {
    _s();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$lib$2f$supabase$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    const [holdings, setHoldings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReportsPage.useEffect": ()=>{
            const fetchData = {
                "ReportsPage.useEffect.fetchData": async ()=>{
                    const { data: { user } } = await supabase.auth.getUser();
                    if (!user) return;
                    const { data } = await supabase.from("holdings").select("symbol, amount, avg_price, current_price").eq("owner_id", user.id);
                    setHoldings(data || []);
                    setLoading(false);
                }
            }["ReportsPage.useEffect.fetchData"];
            fetchData();
        }
    }["ReportsPage.useEffect"], [
        supabase
    ]);
    const downloadCSV = ()=>{
        const csv = [
            [
                "Symbol",
                "Amount",
                "Avg Price",
                "Current Price"
            ],
            ...holdings.map((h)=>[
                    h.symbol,
                    h.amount,
                    h.avg_price,
                    h.current_price
                ])
        ].map((row)=>row.join(",")).join("\n");
        const blob = new Blob([
            csv
        ], {
            type: "text/csv"
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "stash_portfolio_report.csv";
        a.click();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold mb-6",
                    children: "Reports & Exports"
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-400 text-center",
                    children: "Fetching report data..."
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, this) : holdings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-500 text-center",
                    children: "No holdings to export."
                }, void 0, false, {
                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full text-left text-gray-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "text-gray-500 text-sm border-b border-gray-800",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3",
                                                    children: "Asset"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3",
                                                    children: "Amount"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3",
                                                    children: "Avg Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "py-3",
                                                    children: "Current Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: holdings.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b border-gray-900",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3 font-semibold",
                                                        children: h.symbol
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3",
                                                        children: h.amount
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3",
                                                        children: [
                                                            "$",
                                                            h.avg_price
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "py-3",
                                                        children: [
                                                            "$",
                                                            h.current_price
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                                                lineNumber: 66,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: downloadCSV,
                            className: "w-full p-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition",
                            children: "Download as CSV"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this),
                        message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Projects$2f$PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash$2f$src$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center mt-4 text-sm text-gray-400",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                            lineNumber: 85,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Projects/PESU_EC_CSE_D_P25_Digital_Asset_and_Cryptocurrency_Portfolio_Tracker_Stash/src/app/(main)/reports/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(ReportsPage, "rwKegLB5OQihdcMlw+lrJJhLn4k=");
_c = ReportsPage;
var _c;
__turbopack_context__.k.register(_c, "ReportsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=62b70_Cryptocurrency_Portfolio_Tracker_Stash_src_app_%28main%29_reports_page_tsx_b971d3ed._.js.map