"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../../lib/supabase/supabaseClient";
import { motion } from "framer-motion";

export default function AlertsPage() {
  const supabase = createClient();
  const [alerts, setAlerts] = useState<any[]>([]);
  const [form, setForm] = useState({ symbol: "", condition: ">", target: "" });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddAlert = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase.from("alerts").insert({
      user_id: user.id,
      symbol: form.symbol.toUpperCase(),
      condition: form.condition,
      target_value: parseFloat(form.target),
    });

    if (error) setMessage(error.message);
    else {
      setMessage(`✅ Alert added for ${form.symbol.toUpperCase()}`);
      setForm({ symbol: "", condition: ">", target: "" });
      const { data } = await supabase.from("alerts").select("*").eq("user_id", user.id);
      setAlerts(data || []);
    }
  };

  const handleDelete = async (id: string) => {
    await supabase.from("alerts").delete().eq("id", id);
    setAlerts(alerts.filter((a) => a.id !== id));
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Price Alerts</h1>

        {/* Create Alert Form */}
        <motion.form
          onSubmit={handleAddAlert}
          className="bg-[#0b0b0b] border border-gray-800 p-6 rounded-2xl mb-8 grid sm:grid-cols-4 gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <input
            name="symbol"
            value={form.symbol}
            onChange={handleChange}
            placeholder="Symbol (e.g. BTC)"
            required
            className="p-3 bg-black border border-gray-700 rounded-lg text-gray-300 focus:ring-2 focus:ring-gray-500 outline-none"
          />
          <select
            name="condition"
            value={form.condition}
            onChange={handleChange}
            className="p-3 bg-black border border-gray-700 rounded-lg text-gray-300"
          >
            <option value=">">Above</option>
            <option value="<">Below</option>
          </select>
          <input
            name="target"
            value={form.target}
            onChange={handleChange}
            placeholder="Target price"
            type="number"
            required
            className="p-3 bg-black border border-gray-700 rounded-lg text-gray-300 focus:ring-2 focus:ring-gray-500 outline-none"
          />
          <button
            type="submit"
            className="p-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Add Alert
          </button>
        </motion.form>

        {message && <p className="text-gray-400 text-center mb-6">{message}</p>}

        {/* Existing Alerts */}
        {loading ? (
          <p className="text-gray-400 text-center">Loading alerts...</p>
        ) : alerts.length === 0 ? (
          <p className="text-gray-500 text-center">No alerts yet. Add one above.</p>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6"
          >
            <table className="w-full text-left text-gray-300">
              <thead className="text-gray-500 text-sm border-b border-gray-800">
                <tr>
                  <th className="py-3">Symbol</th>
                  <th className="py-3">Condition</th>
                  <th className="py-3">Target</th>
                  <th className="py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {alerts.map((a) => (
                  <tr key={a.id} className="border-b border-gray-900 hover:bg-gray-900">
                    <td className="py-3 font-semibold">{a.symbol}</td>
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
