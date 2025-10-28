"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../../lib/supabase/supabaseClient";
import { motion } from "framer-motion";

export default function NotificationsPage() {
  const supabase = createClient();
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from("notifications")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      setNotifications(data || []);
      setLoading(false);
    };
    fetchNotifications();
  }, [supabase]);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Notification Center</h1>

        {loading ? (
          <p className="text-gray-400 text-center">Loading notifications...</p>
        ) : notifications.length === 0 ? (
          <p className="text-gray-500 text-center">No notifications yet.</p>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {notifications.map((n) => (
              <div
                key={n.id}
                className="bg-[#0b0b0b] border border-gray-800 p-4 rounded-xl hover:bg-gray-900 transition"
              >
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">{n.title}</h2>
                  <p className="text-xs text-gray-500">
                    {new Date(n.created_at).toLocaleString()}
                  </p>
                </div>
                <p className="text-gray-400 mt-2">{n.message}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
