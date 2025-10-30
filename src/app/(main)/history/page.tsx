"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../../lib/supabase/supabaseClient";
import { motion } from "framer-motion";

type Transaction = {
  id: string;
  user_id: string;
  symbol: string;
  type: "buy" | "sell" | "deposit" | "withdraw";
  amount: number;
  price: number;
  date: string;
};

export default function TransactionHistoryPage() {
  const supabase = createClient();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchTransactions = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("transactions")
        .select("*")
        .eq("user_id", user.id)
        .order("date", { ascending: false });

      if (!error && data) setTransactions(data);
      setLoading(false);
    };
    fetchTransactions();
  }, [supabase]);

  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter((tx) => tx.type === filter);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Transaction History</h1>
        <p className="text-gray-400 mb-8">
          View your full transaction log — including buys, sells, deposits, and withdrawals.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          {["all", "buy", "sell", "deposit", "withdraw"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                filter === type
                  ? "bg-white text-black"
                  : "bg-[#0b0b0b] border border-gray-800 text-gray-400 hover:bg-gray-900"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-gray-500 text-center mt-20">
            Loading transactions...
          </div>
        ) : filteredTransactions.length === 0 ? (
          <div className="text-gray-500 text-center mt-10">
            No transactions found.
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="overflow-x-auto bg-[#0b0b0b] border border-gray-800 rounded-2xl"
          >
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="border-b border-gray-800 text-gray-500 uppercase text-xs">
                <tr>
                  <th className="p-4">Date</th>
                  <th className="p-4">Asset</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Price (USD)</th>
                  <th className="p-4">Total Value</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((tx) => (
                  <tr
                    key={tx.id}
                    className="border-b border-gray-900 hover:bg-gray-900 transition"
                  >
                    <td className="p-4 text-gray-400">
                      {new Date(tx.date).toLocaleString()}
                    </td>
                    <td className="p-4 font-semibold uppercase">{tx.symbol}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded-lg text-xs font-medium ${
                          tx.type === "buy"
                            ? "bg-green-900/40 text-green-400"
                            : tx.type === "sell"
                            ? "bg-red-900/40 text-red-400"
                            : tx.type === "deposit"
                            ? "bg-blue-900/40 text-blue-400"
                            : "bg-yellow-900/40 text-yellow-400"
                        }`}
                      >
                        {tx.type.toUpperCase()}
                      </span>
                    </td>
                    <td className="p-4">{tx.amount}</td>
                    <td className="p-4">${tx.price.toLocaleString()}</td>
                    <td className="p-4 font-semibold">
                      ${(tx.amount * tx.price).toLocaleString()}
                    </td>
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
