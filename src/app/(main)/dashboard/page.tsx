"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { createClient } from "../../../lib/supabase/supabaseClient";
import CryptoNewsFeed from "@/components/CryptoNewsFeed";

import {
  ArrowUpRight,
  ArrowDownRight,
  RefreshCcw,
  Search,
} from "lucide-react";

// ─────────────────────────────
// Animated Number Counter
// ─────────────────────────────
const AnimatedNumber = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    const start = 0;
    const duration = 1000;
    const startTime = performance.now();

    const update = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setDisplayValue(start + (value - start) * progress);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, [value]);

  return <span>{displayValue.toFixed(2)}</span>;
};

// ─────────────────────────────
// Dashboard Component
// ─────────────────────────────
export default function DashboardPage() {
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);
  const [portfolioValue, setPortfolioValue] = useState<number | null>(null);
  const [roi, setROI] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [gainers, setGainers] = useState<any[]>([]);
  const [losers, setLosers] = useState<any[]>([]);
  const [trending, setTrending] = useState<any[]>([]);
  const [watchlist, setWatchlist] = useState<any[]>([]);

  // ─────────────────────────────
  // Fetch Portfolio from Supabase
  // ─────────────────────────────
  const fetchPortfolio = async () => {
  try {
    setRefreshing(true);

    // Get current user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      console.warn("Auth error:", userError.message);
      setLoading(false);
      setRefreshing(false);
      return;
    }

    if (!user) {
      console.warn("⚠️ No user logged in, skipping portfolio fetch.");
      setLoading(false);
      setRefreshing(false);
      return;
    }

    setUser(user);

    // Try fetching portfolio row
    const { data: portfolio, error: portfolioError } = await supabase
      .from("portfolios")
      .select("total_value_usd, roi_percentage, updated_at")
      .eq("user_id", user.id)
      .maybeSingle(); // ✅ safer: won’t throw error if no rows

    if (portfolioError && portfolioError.code !== "PGRST116") {
      // PGRST116 = no rows found — safe to ignore
      console.warn("No portfolio record or query issue:", portfolioError.message);
    }

    if (portfolio) {
      setPortfolioValue(Number(portfolio.total_value_usd) || 0);
      setROI(Number(portfolio.roi_percentage) || 0);
      setLastUpdated(portfolio.updated_at || null);
    } else {
      // Initialize default empty state
      setPortfolioValue(0);
      setROI(0);
      setLastUpdated(null);
    }

    // ✅ Also fetch user watchlist safely
    const { data: wl, error: wlError } = await supabase
      .from("watchlist")
      .select("*")
      .eq("user_id", user.id);

    if (wlError && wlError.code !== "PGRST116") {
      console.warn("Watchlist fetch issue:", wlError.message);
    }

    setWatchlist(wl || []);
  } catch (err) {
    console.error("Unexpected Supabase fetch error:", err);
  } finally {
    setLoading(false);
    setRefreshing(false);
  }
};


  // ─────────────────────────────
  // Fetch Market Data (Coingecko)
  // ─────────────────────────────
  useEffect(() => {
    const loadMarketData = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1"
        );
        const data = await res.json();

        const sorted = [...data].sort(
          (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
        );
        setGainers(sorted.slice(0, 5));
        setLosers(sorted.slice(-5).reverse());

        const trendRes = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const trendData = await trendRes.json();
        setTrending(trendData.coins.slice(0, 5));
      } catch (err) {
        console.error("Error loading market data:", err);
      }
    };

    loadMarketData();
  }, []);

  // ─────────────────────────────
  // Card Styling
  // ─────────────────────────────
  const card =
    "bg-[#0a0a0a]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]";

  // ─────────────────────────────
  // UI
  // ─────────────────────────────
  
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Dashboard Overview
            </h1>
            <p className="text-gray-500 text-sm">
              Your digital assets performance in real-time
            </p>
          </div>
          <button
            onClick={fetchPortfolio}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition"
          >
            <RefreshCcw
              size={16}
              className={refreshing ? "animate-spin" : ""}
            />
            {refreshing ? "Refreshing..." : "Refresh Data"}
          </button>
        </div>

    

        {/* Last Updated */}
        {lastUpdated && (
          <p className="text-xs text-gray-500 text-right">
            Last updated: {new Date(lastUpdated).toLocaleString()}
          </p>
        )}

        {/* Search Bar */}
        <div className={`${card} flex items-center gap-3`}>
          <Search size={18} className="text-gray-500" />
          <input
            placeholder="Search for any cryptocurrency..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-300"
          />
        </div>
        {/* Crypto News Feed Section */}
<motion.div className={card}>
  <CryptoNewsFeed />
</motion.div>


        {/* Market Overview */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Gainers */}
          <motion.div className={card}>
            <h2 className="text-lg font-semibold mb-4">Top Gainers (24h)</h2>
            {loading ? (
              <div className="animate-pulse space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-6 bg-gray-800 rounded"></div>
                ))}
              </div>
            ) : (
              gainers.map((coin) => (
                <div
                  key={coin.id}
                  className="flex justify-between py-2 border-b border-gray-800 last:border-none"
                >
                  <span>{coin.name}</span>
                  <span className="text-green-400 flex items-center gap-1">
                    <ArrowUpRight size={14} />
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </div>
              ))
            )}
          </motion.div>

          {/* Losers */}
          <motion.div className={card}>
            <h2 className="text-lg font-semibold mb-4">Top Losers (24h)</h2>
            {loading ? (
              <div className="animate-pulse space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-6 bg-gray-800 rounded"></div>
                ))}
              </div>
            ) : (
              losers.map((coin) => (
                <div
                  key={coin.id}
                  className="flex justify-between py-2 border-b border-gray-800 last:border-none"
                >
                  <span>{coin.name}</span>
                  <span className="text-red-400 flex items-center gap-1">
                    <ArrowDownRight size={14} />
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                </div>
              ))
            )}
          </motion.div>
        </div>

        {/* Trending Section */}
        <motion.div className={card}>
          <h2 className="text-lg font-semibold mb-4">Trending Coins</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {trending.map((coin: any) => (
              <div
                key={coin.item.id}
                className="flex items-center gap-3 p-3 bg-[#111]/50 border border-white/5 rounded-xl hover:border-white/20 transition"
              >
                <img
                  src={coin.item.small}
                  alt={coin.item.name}
                  className="w-6 h-6 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">{coin.item.name}</p>
                  <p className="text-xs text-gray-500 uppercase">
                    {coin.item.symbol}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
