"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Holding = {
  id: string;
  symbol: string;
  amount: number;
  avg_price: number;
  current_price: number;
};

export default function DashboardPage() {
  const { id } = useParams();
  const [data, setData] = useState<null | {
    profile: any;
    holdings: Holding[];
    stats: { portfolioValue: number; assetsCount: number };
  }>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);

    fetch(`/api/dashboard/${id}`)
      .then(async (res) => {
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err?.error || `Failed (${res.status})`);
        }
        return res.json();
      })
      .then((json) => setData(json))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Main */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile + Stats */}
        <section className="lg:col-span-1 space-y-6">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-[#0b0b0b] border border-gray-800 rounded-2xl"
          >
            {loading ? (
              <div className="animate-pulse space-y-2">
                <div className="h-6 bg-gray-800 rounded w-2/3" />
                <div className="h-4 bg-gray-800 rounded w-1/2" />
              </div>
            ) : error ? (
              <div className="text-red-500">Error: {error}</div>
            ) : (
              <div className="flex gap-4 items-center">
                <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white text-lg">
                  {data?.profile?.full_name?.[0]?.toUpperCase() ?? "U"}
                </div>
                <div>
                  <div className="font-semibold text-lg">{data?.profile?.full_name}</div>
                  <div className="text-sm text-gray-400">{data?.profile?.email}</div>
                  <div className="text-xs text-gray-500 mt-2">ID: {data?.profile?.id}</div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Portfolio Card */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="p-6 bg-[#0b0b0b] border border-gray-800 rounded-2xl"
          >
            <h3 className="text-sm text-gray-400 mb-3">Portfolio</h3>
            {loading ? (
              <div className="space-y-2 animate-pulse">
                <div className="h-8 bg-gray-800 rounded" />
                <div className="h-6 bg-gray-800 rounded w-2/3" />
              </div>
            ) : (
              <div>
                <div className="text-3xl font-bold">
                  ${Number(data?.stats.portfolioValue ?? 0).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  {data?.stats.assetsCount} assets
                </div>
              </div>
            )}
          </motion.div>
        </section>

        {/* Holdings Table */}
        <section className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 bg-[#0b0b0b] border border-gray-800 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Holdings</h2>
              <div className="text-sm text-gray-400">Live Prices</div>
            </div>

            {loading ? (
              <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-14 bg-gray-900 rounded animate-pulse" />
                ))}
              </div>
            ) : error ? (
              <div className="text-red-500">Error: {error}</div>
            ) : (data?.holdings?.length ?? 0) === 0 ? (
              <div className="text-gray-500">No holdings yet.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-300">
                  <thead className="text-gray-500 text-sm border-b border-gray-800">
                    <tr>
                      <th className="py-3">Asset</th>
                      <th className="py-3">Amount</th>
                      <th className="py-3">Avg Price</th>
                      <th className="py-3">Current Price</th>
                      <th className="py-3">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data!.holdings.map((h) => {
                      const value = Number(h.amount) * Number(h.current_price);
                      return (
                        <tr key={h.id} className="border-b border-gray-900 hover:bg-gray-900 transition">
                          <td className="py-4 font-semibold">{h.symbol}</td>
                          <td className="py-4">{h.amount}</td>
                          <td className="py-4">${h.avg_price.toFixed(2)}</td>
                          <td className="py-4">${h.current_price.toFixed(2)}</td>
                          <td className="py-4 font-semibold">${value.toFixed(2)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        </section>
      </main>
    </div>
  );
}
