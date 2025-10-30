"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../../lib/supabase/supabaseClient";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfilePage() {
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Fetch user & profile info
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      setUser(user);
      const { data } = await supabase
        .from("profiles")
        .select("full_name, bio, avatar_url")
        .eq("id", user.id)
        .single();

      if (data) {
        setFullName(data.full_name || "");
        setBio(data.bio || "");
        setAvatarUrl(data.avatar_url || null);
      }
    };
    getUser();
  }, [supabase]);

  // ✅ Handle profile update
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setUpdating(true);
    setMessage("");

    const { error } = await supabase.from("profiles").upsert({
      id: user.id,
      full_name: fullName,
      bio,
      avatar_url: avatarUrl,
      updated_at: new Date(),
    });

    setUpdating(false);
    if (error) setMessage(error.message);
    else setMessage("Profile updated successfully ✅");
  };

  // ✅ Handle avatar upload
  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0 || !user) return;

    const file = e.target.files[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `${user.id}.${fileExt}`;
    const filePath = `avatars/${fileName}`;

    // upload to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      setMessage(uploadError.message);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from("avatars")
      .getPublicUrl(filePath);

    setAvatarUrl(publicUrlData.publicUrl);
    setMessage("Avatar updated successfully 🖼️");
  };

  // ✅ Password reset
  const handlePasswordReset = async () => {
    if (!user) return;
    const { error } = await supabase.auth.resetPasswordForEmail(user.email, {
      redirectTo: `${window.location.origin}/update-password`,
    });
    setMessage(error ? error.message : "Password reset email sent!");
  };

  // ✅ Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-[#0b0b0b] border border-gray-800 p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-2xl font-semibold mb-2 text-center">Profile</h1>
        <p className="text-gray-400 text-sm text-center mb-6">
          Manage your Stash account settings.
        </p>

        {!user ? (
          <div className="text-gray-400 text-center">Loading user data...</div>
        ) : (
          <form onSubmit={handleUpdate} className="space-y-5">
            {/* Avatar */}
            <div className="flex flex-col items-center mb-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-700">
                {avatarUrl ? (
                  <Image
                    src={avatarUrl}
                    alt="Avatar"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center text-2xl">
                    {fullName ? fullName[0].toUpperCase() : "U"}
                  </div>
                )}
              </div>
              <label className="mt-3 text-sm text-gray-400 cursor-pointer hover:text-gray-200">
                Change Avatar
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1 text-gray-400">Email</label>
              <input
                type="email"
                value={user.email}
                disabled
                className="w-full p-3 rounded-lg bg-black border border-gray-700 text-gray-400 cursor-not-allowed"
              />
            </div>

            {/* Name */}
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

            {/* Bio */}
            <div>
              <label className="block text-sm mb-1 text-gray-400">Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell us something about yourself"
                className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:ring-2 focus:ring-gray-500 outline-none resize-none"
                rows={3}
              />
            </div>

            {/* Account Info */}
            <div className="text-gray-500 text-sm border-t border-gray-800 pt-4">
              <p>Member since: {new Date(user.created_at).toLocaleDateString()}</p>
              <p>Last sign-in: {new Date(user.last_sign_in_at).toLocaleString()}</p>
            </div>

            {/* Buttons */}
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

            <button
              type="button"
              onClick={handleLogout}
              className="w-full p-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-500 transition"
            >
              Logout
            </button>

            {message && (
              <p className="text-center text-sm text-gray-400 mt-3">{message}</p>
            )}
          </form>
        )}

        <div className="text-center mt-6 text-gray-400 text-sm">
          <a href="/dashboard" className="hover:underline">← Back to Dashboard</a>
        </div>
      </motion.div>
    </div>
  );
}
