"use client";

import { useState } from "react";
import { createClient } from "../../../../lib/supabase/supabaseClient";
import { motion } from "framer-motion";

export default function ConnectPortfolioPage() {
  const supabase = createClient();
  const [form, setForm] = useState({
    exchange: "",
    apiKey: "",
    secretKey: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setMessage("You must be logged in.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("connections").insert({
      user_id: user.id,
      exchange: form.exchange,
      api_key: form.apiKey,
      secret_key: form.secretKey,
    });

    if (error) setMessage(error.message);
    else setMessage(`✅ Connected to ${form.exchange} successfully!`);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-[#0b0b0b] border border-gray-800 p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-2xl font-semibold text-center mb-6">
          Connect Exchange or Wallet
        </h1>

        <form onSubmit={handleConnect} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-gray-400">Select Platform</label>
            <select
              name="exchange"
              value={form.exchange}
              onChange={handleChange}
              required
              className="w-full p-3 bg-black border border-gray-700 rounded-lg text-gray-300 focus:ring-2 focus:ring-gray-500 outline-none"
            >
              <option value="">Choose exchange</option>
              <option value="Binance">Binance</option>
              <option value="Coinbase">Coinbase</option>
              <option value="MetaMask">MetaMask</option>
              <option value="TrustWallet">Trust Wallet</option>
              <option value="Ledger">Ledger</option>
            </select>
          </div>

          <input
            type="text"
            name="apiKey"
            placeholder="API Key"
            value={form.apiKey}
            onChange={handleChange}
            required
            className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 outline-none"
          />

          <input
            type="password"
            name="secretKey"
            placeholder="Secret Key"
            value={form.secretKey}
            onChange={handleChange}
            required
            className="w-full p-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            {loading ? "Connecting..." : "Connect"}
          </button>
        </form>

        {message && (
          <div className="mt-4 text-center text-sm text-gray-400">{message}</div>
        )}

        <div className="text-center mt-6 text-gray-400 text-sm">
          <a href="/portfolio" className="hover:underline">
            ← Back to Portfolio
          </a>
        </div>
      </motion.div>
    </div>
  );
}
