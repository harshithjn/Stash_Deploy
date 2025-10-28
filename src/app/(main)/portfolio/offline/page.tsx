"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OfflinePortfolioPage() {
  const [cachedData, setCachedData] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("stash_portfolio_cache");
    if (stored) {
      setCachedData(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Offline Portfolio</h1>
        {cachedData.length === 0 ? (
          <div className="text-gray-500 text-center mt-20">
            No cached portfolio data found.
            <p className="mt-2 text-sm text-gray-400">
              Connect online to sync your latest data.
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6"
          >
            <table className="w-full text-left text-gray-300">
              <thead className="text-gray-500 text-sm border-b border-gray-800">
                <tr>
                  <th className="py-3">Asset</th>
                  <th className="py-3">Amount</th>
                  <th className="py-3">Value (USD)</th>
                  <th className="py-3">Last Synced</th>
                </tr>
              </thead>
              <tbody>
                {cachedData.map((h, i) => (
                  <tr key={i} className="border-b border-gray-900 hover:bg-gray-900">
                    <td className="py-3 font-semibold">{h.symbol}</td>
                    <td className="py-3">{h.amount}</td>
                    <td className="py-3">${(h.amount * h.price).toFixed(2)}</td>
                    <td className="py-3 text-gray-500">{h.syncedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </div>
    </div>
  );
}
