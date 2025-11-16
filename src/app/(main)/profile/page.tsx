"use client";

import { useEffect, useState } from "react";
import { createClient } from "../../../lib/supabase/supabaseClient";
import Image from "next/image";

export default function ProfilePage() {
  const supabase = createClient();

  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState({
    full_name: "",
    bio: "",
    avatar_url: null as string | null,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  // Load user & profile
  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      setUser(user);

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error && error.code === "PGRST116") {
        await supabase.from("profiles").insert({
          id: user.id,
          full_name: user.user_metadata?.full_name || "",
          bio: "",
          avatar_url: null,
        });
        setProfile({ full_name: "", bio: "", avatar_url: null });
      } else if (data) {
        setProfile({
          full_name: data.full_name || "",
          bio: data.bio || "",
          avatar_url: data.avatar_url || null,
        });
      }

      setLoading(false);
    };

    fetchProfile();
  }, [supabase]);

  // Save updates
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setSaving(true);
    setMessage("");

    const updates = {
      id: user.id,
      full_name: profile.full_name,
      bio: profile.bio,
      avatar_url: profile.avatar_url,
      updated_at: new Date(),
    };

    const { error } = await supabase.from("profiles").upsert(updates);

    if (error) setMessage(`❌ ${error.message}`);
    else setMessage("✅ Profile updated successfully");

    setSaving(false);
  };

  // Upload avatar
  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!user || !e.target.files?.length) return;

    const file = e.target.files[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `${user.id}.${fileExt}`;
    const filePath = `avatars/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      setMessage(`❌ ${uploadError.message}`);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("avatars")
      .getPublicUrl(filePath);

    const { error: updateError } = await supabase
      .from("profiles")
      .update({ avatar_url: urlData.publicUrl })
      .eq("id", user.id);

    if (updateError) {
      setMessage(`❌ ${updateError.message}`);
    } else {
      setProfile((prev) => ({ ...prev, avatar_url: urlData.publicUrl }));
      setMessage("✅ Avatar updated successfully");
    }
  };

  // Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  // Reset password
  const handlePasswordReset = async () => {
    if (!user) return;

    const { error } = await supabase.auth.resetPasswordForEmail(user.email, {
      redirectTo: `${window.location.origin}/update-password`,
    });

    setMessage(error ? error.message : "Password reset link sent!");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      {/* 🔥 Replaced motion.div with a normal <div> */}
      <div className="w-full max-w-lg bg-[#0b0b0b] border border-gray-800 p-8 rounded-2xl shadow-lg transition-opacity duration-300 opacity-100">
        <h1 className="text-2xl font-semibold mb-2 text-center">Profile</h1>
        <p className="text-gray-400 text-sm text-center mb-6">
          Manage your Stash account settings.
        </p>

        {loading ? (
          <div className="text-gray-400 text-center">Loading profile...</div>
        ) : (
          <form onSubmit={handleSave} className="space-y-5">
            {/* Avatar */}
            <div className="flex flex-col items-center mb-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gray-700">
                {profile.avatar_url ? (
                  <Image
                    src={profile.avatar_url}
                    alt="Avatar"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center text-2xl">
                    {profile.full_name
                      ? profile.full_name[0].toUpperCase()
                      : "U"}
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
                value={user?.email || ""}
                disabled
                className="w-full p-3 rounded-lg bg-black border border-gray-700 text-gray-400 cursor-not-allowed"
              />
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm mb-1 text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                value={profile.full_name}
                onChange={(e) =>
                  setProfile({ ...profile, full_name: e.target.value })
                }
                placeholder="Enter your name"
                className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:ring-2 focus:ring-gray-500 outline-none"
              />
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm mb-1 text-gray-400">Bio</label>
              <textarea
                value={profile.bio}
                onChange={(e) =>
                  setProfile({ ...profile, bio: e.target.value })
                }
                placeholder="Tell us something about yourself"
                className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:ring-2 focus:ring-gray-500 outline-none resize-none"
                rows={3}
              />
            </div>

            {/* Save */}
            <button
              type="submit"
              disabled={saving}
              className="w-full p-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>

            {/* Password Reset */}
            <button
              type="button"
              onClick={handlePasswordReset}
              className="w-full p-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition"
            >
              Change Password
            </button>

            {/* Logout */}
            <button
              type="button"
              onClick={handleLogout}
              className="w-full p-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-500 transition"
            >
              Logout
            </button>

            {message && (
              <p className="text-center text-sm text-gray-400 mt-3">
                {message}
              </p>
            )}
          </form>
        )}

        <div className="text-center mt-6 text-gray-400 text-sm">
          <a href="/dashboard" className="hover:underline">
            ← Back to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
