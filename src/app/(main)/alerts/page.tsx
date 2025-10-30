"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../../lib/supabase/supabaseClient";
import { motion } from "framer-motion";

export default function AlertsPage() {
  const supabase = createClient();
  const [alerts, setAlerts] = useState<any[]>([]);
  const [form, setForm] = useState({
    symbol: "",
    id: "",
    condition: ">",
    target: "",
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

  // Fetch existing alerts
  useEffect(() => {
    const fetchAlerts = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase.from("alerts").select("*").eq("user_id", user.id);
      setAlerts(data || []);
      setLoading(false);
    };
    fetchAlerts();
  }, [supabase]);

  // Handle text change and trigger CoinGecko search
  const handleSymbolChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setForm({ ...form, symbol: query });
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    setSearchLoading(true);
    try {
      const res = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`);
      const data = await res.json();
      setSearchResults(data.coins.slice(0, 5)); // limit results
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setSearchLoading(false);
    }
  };

  // When selecting a coin
  const handleSelectCoin = (coin: any) => {
    setForm({
      ...form,
      symbol: coin.symbol,
      id: coin.id,
    });
    setSearchResults([]); // close dropdown
  };

  // Add alert
  const handleAddAlert = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    if (!form.id) {
      setMessage("❌ Please select a valid coin from search results.");
      return;
    }

    const { error } = await supabase.from("alerts").insert({
      user_id: user.id,
      symbol: form.symbol.toUpperCase(),
      coingecko_id: form.id,
      condition: form.condition,
      target_value: parseFloat(form.target),
    });

    if (error) setMessage(error.message);
    else {
      setMessage(`✅ Alert added for ${form.symbol.toUpperCase()}`);
      setForm({ symbol: "", id: "", condition: ">", target: "" });
      const { data } = await supabase.from("alerts").select("*").eq("user_id", user.id);
      setAlerts(data || []);
    }
  };

  // Delete alert
  const handleDelete = async (id: string) => {
    await supabase.from("alerts").delete().eq("id", id);
    setAlerts(alerts.filter((a) => a.id !== id));
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Price Alerts</h1>

        {/* Form */}
        <motion.form
          onSubmit={handleAddAlert}
          className="bg-[#0b0b0b] border border-gray-800 p-6 rounded-2xl mb-8 grid sm:grid-cols-4 gap-3 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Search bar */}
          <div className="relative col-span-2">
            <input
              name="symbol"
              value={form.symbol}
              onChange={handleSymbolChange}
              placeholder="Search coin (e.g. Bitcoin)"
              required
              className="w-full p-3 bg-black border border-gray-700 rounded-lg text-gray-300 focus:ring-2 focus:ring-gray-500 outline-none"
            />

            {/* Search dropdown */}
            {searchLoading && (
              <div className="absolute left-0 top-full bg-[#0b0b0b] border border-gray-800 w-full p-3 rounded-b-lg text-gray-400">
                Searching...
              </div>
            )}
            {searchResults.length > 0 && (
              <ul className="absolute left-0 top-full bg-[#0b0b0b] border border-gray-800 w-full rounded-b-lg max-h-48 overflow-y-auto">
                {searchResults.map((coin) => (
                  <li
                    key={coin.id}
                    onClick={() => handleSelectCoin(coin)}
                    className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-900 transition"
                  >
                    <img src={coin.thumb} alt={coin.name} className="w-5 h-5 rounded-full" />
                    <span className="font-medium">{coin.name}</span>
                    <span className="text-gray-400 text-xs uppercase ml-auto">
                      {coin.symbol}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Condition */}
          <select
            name="condition"
            value={form.condition}
            onChange={(e) => setForm({ ...form, condition: e.target.value })}
            className="p-3 bg-black border border-gray-700 rounded-lg text-gray-300"
          >
            <option value=">">Above</option>
            <option value="<">Below</option>
          </select>

          {/* Target */}
          <input
            name="target"
            value={form.target}
            onChange={(e) => setForm({ ...form, target: e.target.value })}
            placeholder="Target (USD)"
            type="number"
            required
            className="p-3 bg-black border border-gray-700 rounded-lg text-gray-300 focus:ring-2 focus:ring-gray-500 outline-none"
          />

          {/* Button */}
          <button
            type="submit"
            className="p-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Add Alert
          </button>
        </motion.form>

        {message && <p className="text-gray-400 text-center mb-6">{message}</p>}

        {/* List */}
        {loading ? (
          <p className="text-gray-400 text-center">Loading alerts...</p>
        ) : alerts.length === 0 ? (
          <p className="text-gray-500 text-center">No alerts yet.</p>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6"
          >
            <table className="w-full text-left text-gray-300">
              <thead className="text-gray-500 text-sm border-b border-gray-800">
                <tr>
                  <th className="py-3">Coin</th>
                  <th className="py-3">Condition</th>
                  <th className="py-3">Target</th>
                  <th className="py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {alerts.map((a) => (
                  <tr key={a.id} className="border-b border-gray-900 hover:bg-gray-900 transition">
                    <td className="py-3 font-semibold uppercase">{a.symbol}</td>
                    <td className="py-3">{a.condition}</td>
                    <td className="py-3">${a.target_value}</td>
                    <td className="py-3 text-right">
                      <button
                        onClick={() => handleDelete(a.id)}
                        className="px-3 py-1 text-sm bg-gray-800 rounded-lg hover:bg-gray-700"
                      >
                        Delete
                      </button>
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
