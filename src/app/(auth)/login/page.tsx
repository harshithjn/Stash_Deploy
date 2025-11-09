"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/supabaseClient";
import { useRouter } from "next/navigation";
import Link from "next/link";

// --- Logo ---
const Logo = () => (
  <img
    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
    alt="Bitcoin Logo"
    className="w-8 h-8"
  />
);

const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
    <path
      d="M22.56 12.25C22.56 11.45 22.49 10.68 22.36 9.94H12V14.4H18.06C17.74 16.03 16.81 17.39 15.39 18.38V21.32H19.2C21.35 19.39 22.56 16.09 22.56 12.25Z"
      fill="#4285F4"
    />
    <path
      d="M12 23C15.24 23 17.98 21.94 19.92 20.25L15.39 18.38C14.31 19.12 13.03 19.58 11.5 19.58C8.58 19.58 6.06 17.72 5.12 14.9H1.19V17.9C3.12 21.03 7.22 23 12 23Z"
      fill="#34A853"
    />
    <path
      d="M5.12 14.9C4.87 14.18 4.72 13.41 4.72 12.61C4.72 11.81 4.87 11.04 5.12 10.32V7.3H1.19C0.44 8.73 0 10.61 0 12.61C0 14.61 0.44 16.49 1.19 17.9L5.12 14.9Z"
      fill="#FBBC05"
    />
    <path
      d="M12 4.42C13.71 4.42 15.08 5.03 16.14 5.99L19.27 3.03C17.29 1.16 14.86 0 12 0C7.22 0 3.12 1.97 1.19 5.1L5.12 8.1C6.06 5.3 8.58 3.42 11.5 3.42H12V4.42Z"
      fill="#EA4335"
    />
  </svg>
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  // ✅ Handle Email Login
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else if (data?.user) {
      // ✅ Redirect directly to dashboard
      router.push("/dashboard");
    }

    setLoading(false);
  };

  // ✅ Handle Google Login
  // ✅ Handle Google Login
const handleGoogleSignIn = async () => {
  try {
    setLoadingGoogle(true);
    setError(null);

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`, // ✅ PKCE redirect
        queryParams: {
          access_type: "offline",
          prompt: "consent", // ensures refresh token
        },
      },
    });

    if (error) {
      console.error("Google login error:", error.message);
      setError(error.message);
    }
  } catch (err: any) {
    console.error("Unexpected login error:", err.message);
    setError(err.message);
  } finally {
    setLoadingGoogle(false);
  }
};


  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black px-4">
      <div className="flex w-full max-w-sm flex-col items-center">
        <Logo />
        <h2 className="mt-4 text-2xl font-semibold text-white">
          Sign in to Stash
        </h2>
        <p className="mt-2 text-sm text-zinc-400">
          Access your digital portfolio securely.
        </p>

        {/* Google Sign In */}
        <button
          onClick={handleGoogleSignIn}
          disabled={loading || loadingGoogle}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-base font-medium text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <GoogleIcon />
          {loadingGoogle ? "Redirecting..." : "Sign in with Google"}
        </button>

        {/* Divider */}
        <div className="my-6 flex w-full items-center gap-4">
          <div className="h-px w-full bg-zinc-700"></div>
          <span className="text-sm text-zinc-500">OR</span>
          <div className="h-px w-full bg-zinc-700"></div>
        </div>

        <form onSubmit={handleSignIn} className="w-full space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading || loadingGoogle}
              className="mt-2 block w-full rounded-lg border-zinc-700 bg-zinc-900 p-3 text-white placeholder-zinc-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-300">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading || loadingGoogle}
              className="mt-2 block w-full rounded-lg border-zinc-700 bg-zinc-900 p-3 text-white placeholder-zinc-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-center text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading || loadingGoogle}
            className="w-full rounded-lg bg-white p-3 text-base font-medium text-black hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In with Email"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-zinc-400">
          Don’t have an account?{" "}
          <Link href="/register" className="font-medium text-white hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
