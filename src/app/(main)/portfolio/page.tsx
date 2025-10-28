"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../../lib/supabase/supabaseClient";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const supabase = createClient();
  const [holdings, setHoldings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const fetchPortfolio = async () => {
      setLoading(true);
      setError("");
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setError("You need to log in to view your portfolio.");
        setLoading(false);
        return;
      }

      // Fetch holdings for the logged-in user
      const { data, error } = await supabase
        .from("holdings")
        .select("symbol, amount, avg_price, current_price")
        .eq("owner_id", user.id);

      if (error) {
        setError(error.message);
      } else {
        setHoldings(data || []);
        const total = data?.reduce(
          (sum, h) => sum + h.amount * h.current_price,
          0
        );
        setTotalValue(total);
      }
      setLoading(false);
    };

    fetchPortfolio();
  }, [supabase]);

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "USD" ? "INR" : "USD"));
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Your Portfolio</h1>
          <button
            onClick={toggleCurrency}
            className="px-4 py-2 bg-gray-900 rounded-xl border border-gray-800 text-sm text-gray-300 hover:bg-gray-800"
          >
            Switch to {currency === "USD" ? "INR" : "USD"}
          </button>
        </header>

        {loading ? (
          <div className="text-gray-400 text-center mt-20">Loading portfolio...</div>
        ) : error ? (
          <div className="text-red-500 text-center mt-20">{error}</div>
        ) : holdings.length === 0 ? (
          <div className="text-gray-500 text-center mt-20">
            No holdings found. Add assets from your connected wallets.
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-300">Portfolio Value</h2>
                <p className="text-3xl font-bold mt-1">
                  {currency === "USD" ? "$" : "₹"}
                  {totalValue.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-gray-300">
                <thead className="text-gray-500 text-sm border-b border-gray-800">
                  <tr>
                    <th className="py-3">Asset</th>
                    <th className="py-3">Amount</th>
                    <th className="py-3">Avg Price (USD)</th>
                    <th className="py-3">Current Price (USD)</th>
                    <th className="py-3">Value (USD)</th>
                    <th className="py-3 hidden sm:table-cell">ROI %</th>
                  </tr>
                </thead>
                <tbody>
                  {holdings.map((h, i) => {
                    const value = h.amount * h.current_price;
                    const roi =
                      ((h.current_price - h.avg_price) / h.avg_price) * 100;
                    return (
                      <tr
                        key={i}
                        className="border-b border-gray-900 hover:bg-gray-900 transition"
                      >
                        <td className="py-3 font-semibold">{h.symbol}</td>
                        <td className="py-3">{h.amount}</td>
                        <td className="py-3">${h.avg_price.toFixed(2)}</td>
                        <td className="py-3">${h.current_price.toFixed(2)}</td>
                        <td className="py-3 font-medium">${value.toFixed(2)}</td>
                        <td
                          className={`py-3 hidden sm:table-cell ${
                            roi >= 0 ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {roi.toFixed(2)}%
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
