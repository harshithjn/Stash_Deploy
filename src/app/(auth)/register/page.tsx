'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/supabaseClient'
import { useRouter } from 'next/navigation'
import Link from 'next/link' // Import Link

// A simple, theme-appropriate SVG logo (same as login)
const Logo = () => (
  <img
    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
    alt="Bitcoin Logo"
    className="w-8 h-8"
  />
);

// NEW: Google Icon SVG
const GoogleIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
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
)

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null) // For success message
  const [loading, setLoading] = useState(false)
  const [loadingGoogle, setLoadingGoogle] = useState(false) // NEW: Loading state for Google
  const router = useRouter()
  const supabase = createClient()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setMessage(null)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // This will redirect the user to your site after they click the email confirmation link
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    })

    if (error) {
      setError(error.message)
    } else {
      setMessage('Check your email for the confirmation link!')
      setEmail('') // Clear form
      setPassword('') // Clear form
    }
    setLoading(false)
  }

  // NEW: Google Sign-In Handler
  const handleGoogleSignIn = async () => {
    setLoadingGoogle(true)
    setError(null)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/api/auth/callback`,
      },
    })

    if (error) {
      setError(error.message)
      setLoadingGoogle(false)
    }
    // No need to set loading to false on success, as the user is redirected
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black px-4">
      <div className="flex w-full max-w-sm flex-col items-center">
        <Logo />
        <h2 className="mt-4 text-2xl font-semibold text-white">
          Create your account
        </h2>
        <p className="mt-2 text-sm text-zinc-400">
          Get started tracking your assets.
        </p>

        {/* NEW: Google Sign Up Button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={loading || loadingGoogle}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-700 bg-zinc-900 p-3 text-base font-medium text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <GoogleIcon />
          {loadingGoogle ? 'Redirecting...' : 'Sign up with Google'}
        </button>

        {/* NEW: Divider */}
        <div className="my-6 flex w-full items-center gap-4">
          <div className="h-px w-full bg-zinc-700"></div>
          <span className="text-sm text-zinc-500">OR</span>
          <div className="h-px w-full bg-zinc-700"></div>
        </div>

        <form onSubmit={handleSignUp} className="w-full space-y-6">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading || loadingGoogle}
              className="mt-2 block w-full rounded-lg border-zinc-700 bg-zinc-900 p-3 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-zinc-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading || loadingGoogle}
              className="mt-2 block w-full rounded-lg border-zinc-700 bg-zinc-900 p-3 text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-center text-sm text-red-400">
              {error}
            </p>
          )}

          {/* Success Message */}
          {message && (
            <p className="text-center text-sm text-green-400">
              {message}
            </p>
          )}

          {/* Sign Up Button */}
          <button
            type="submit"
            disabled={loading || loadingGoogle}
            className="w-full rounded-lg bg-white p-3 text-base font-medium text-black transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Sign Up with Email'}
          </button>
        </form>

        {/* Sign In Link */}
        <p className="mt-8 text-center text-sm text-zinc-400">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-medium text-white hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

