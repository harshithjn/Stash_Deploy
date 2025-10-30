"use client";
import { useEffect, useState } from "react";
import { createClient } from "../../../lib/supabase/supabaseClient";

export default function NotificationsPage() {
  const supabase = createClient();
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase
        .from("notifications")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      setNotifications(data || []);
    };
    fetchData();
  }, [supabase]);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      {notifications.length === 0 ? (
        <p className="text-gray-500">No notifications yet.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((n) => (
            <li
              key={n.id}
              className="bg-[#0b0b0b] border border-gray-800 p-4 rounded-xl"
            >
              <h2 className="text-lg font-semibold">{n.title}</h2>
              <p className="text-gray-400 text-sm">{n.message}</p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(n.created_at).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
