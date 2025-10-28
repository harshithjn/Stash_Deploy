"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../../lib/supabase/supabaseClient";
import { motion } from "framer-motion";

export default function WatchlistPage() {
  const supabase = createClient();
  const [watchlist, setWatchlist] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWatchlist = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setError("You must be logged in to view your watchlist.");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("watchlist")
        .select("symbol, name")
        .eq("user_id", user.id);

      if (error) setError(error.message);
      else setWatchlist(data || []);

      setLoading(false);
    };

    fetchWatchlist();
  }, [supabase]);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Watchlist</h1>

        {loading ? (
          <div className="text-gray-500 text-center">Loading your watchlist...</div>
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : watchlist.length === 0 ? (
          <div className="text-gray-500 text-center">
            No coins in your watchlist yet.
            <p className="text-sm text-gray-400 mt-2">
              Visit <a href="/market" className="underline">Market</a> to add some.
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {watchlist.map((coin, i) => (
              <a
                key={i}
                href={`/asset/${coin.symbol}`}
                className="block bg-[#0b0b0b] border border-gray-800 p-6 rounded-xl hover:bg-gray-900 transition"
              >
                <h2 className="text-lg font-semibold">{coin.name}</h2>
                <p className="text-gray-400 text-sm uppercase">{coin.symbol}</p>
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
