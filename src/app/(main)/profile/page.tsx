"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../../lib/supabase/supabaseClient";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);
  const [fullName, setFullName] = useState("");
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        // Optionally load extra profile info from your "profiles" table
        const { data } = await supabase
          .from("profiles")
          .select("full_name")
          .eq("id", user.id)
          .single();
        if (data?.full_name) setFullName(data.full_name);
      }
    };
    getUser();
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdating(true);
    setMessage("");

    const { error } = await supabase
      .from("profiles")
      .upsert({ id: user.id, full_name: fullName });

    setUpdating(false);
    if (error) setMessage(error.message);
    else setMessage("Profile updated successfully!");
  };

  const handlePasswordReset = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(user.email, {
      redirectTo: `${window.location.origin}/update-password`,
    });
    setMessage(error ? error.message : "Password reset email sent!");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-[#0b0b0b] border border-gray-800 p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-2xl font-semibold mb-2 text-center">Profile</h1>
        <p className="text-gray-400 text-sm text-center mb-6">
          Manage your account details and security.
        </p>

        {!user ? (
          <div className="text-gray-400 text-center">Loading user data...</div>
        ) : (
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-gray-400">Email</label>
              <input
                type="email"
                value={user.email}
                disabled
                className="w-full p-3 rounded-lg bg-black border border-gray-700 text-gray-400 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-gray-400">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:ring-2 focus:ring-gray-500 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={updating}
              className="w-full p-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              {updating ? "Saving..." : "Save Changes"}
            </button>

            <button
              type="button"
              onClick={handlePasswordReset}
              className="w-full p-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition"
            >
              Change Password
            </button>

            <div className="text-center text-sm text-gray-500 mt-4">
              {message && <p>{message}</p>}
            </div>
          </form>
        )}

        <div className="text-center mt-6 text-gray-400 text-sm">
          <a href="/dashboard" className="hover:underline">← Back to Dashboard</a>
        </div>
      </motion.div>
    </div>
  );
}
