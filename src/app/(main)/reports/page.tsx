"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../../lib/supabase/supabaseClient";
import { motion } from "framer-motion";

export default function ReportsPage() {
  const supabase = createClient();
  const [holdings, setHoldings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase
        .from("holdings")
        .select("symbol, amount, avg_price, current_price")
        .eq("owner_id", user.id);
      setHoldings(data || []);
      setLoading(false);
    };
    fetchData();
  }, [supabase]);

  const downloadCSV = () => {
    const csv = [
      ["Symbol", "Amount", "Avg Price", "Current Price"],
      ...holdings.map((h) => [h.symbol, h.amount, h.avg_price, h.current_price]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "stash_portfolio_report.csv";
    a.click();
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Reports & Exports</h1>

        {loading ? (
          <div className="text-gray-400 text-center">Fetching report data...</div>
        ) : holdings.length === 0 ? (
          <div className="text-gray-500 text-center">No holdings to export.</div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left text-gray-300">
                <thead className="text-gray-500 text-sm border-b border-gray-800">
                  <tr>
                    <th className="py-3">Asset</th>
                    <th className="py-3">Amount</th>
                    <th className="py-3">Avg Price</th>
                    <th className="py-3">Current Price</th>
                  </tr>
                </thead>
                <tbody>
                  {holdings.map((h, i) => (
                    <tr key={i} className="border-b border-gray-900">
                      <td className="py-3 font-semibold">{h.symbol}</td>
                      <td className="py-3">{h.amount}</td>
                      <td className="py-3">${h.avg_price}</td>
                      <td className="py-3">${h.current_price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button
              onClick={downloadCSV}
              className="w-full p-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Download as CSV
            </button>

            {message && (
              <p className="text-center mt-4 text-sm text-gray-400">{message}</p>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
