"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../../lib/supabase/supabaseClient";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

export default function HistoryPage() {
  const supabase = createClient();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      const { data } = await supabase.from("roi_history").select("date, roi_percentage");
      if (data) setData(data);
      setLoading(false);
    };
    fetchHistory();
  }, [supabase]);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Performance History</h1>

        {loading ? (
          <div className="text-gray-500 text-center mt-20">Loading history...</div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#0b0b0b] border border-gray-800 p-6 rounded-2xl"
          >
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data}>
                <XAxis dataKey="date" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="roi_percentage"
                  stroke="#00C49F"
                  fill="#00C49F22"
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>
        )}
      </div>
    </div>
  );
}
