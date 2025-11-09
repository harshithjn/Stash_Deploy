"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/supabaseClient";
import {
  Menu,
  Bell,
  LogOut,
  Wallet,
  BarChart3,
  Settings,
  Home,
  FolderOpen,
  PieChart,
  FileText,
  ListChecks,
} from "lucide-react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const [user, setUser] = useState<{ id?: string | null; name: string | null; email: string | null }>({
    id: null,
    name: null,
    email: null,
  });

  const [notifications, setNotifications] = useState<any[]>([]);

  // ✅ FIX: define dropdown as union type to handle multiple menus
  const [showDropdown, setShowDropdown] = useState<"notifications" | "profile" | null>(null);

  // ✅ Fetch user info + redirect after login
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setUser({
        id: user.id,
        name: user.user_metadata?.name ?? user.email?.split("@")[0] ?? "User",
        email: user.email ?? null,
      });

      // Redirect to dashboard only if at root or login
      if (pathname === "/" || pathname === "/login") {
        router.push("/dashboard");
      }

      fetchNotifications(user.id);
    };

    getUser();

    // Poll notifications every 30 seconds
    const interval = setInterval(async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) fetchNotifications(data.user.id);
    }, 30000);

    return () => clearInterval(interval);
  }, [supabase, router, pathname]);

  // ✅ Fetch latest notifications
  const fetchNotifications = async (userId: string) => {
    const { data, error } = await supabase
      .from("notifications")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(5);
    if (!error) setNotifications(data || []);
  };

  // ✅ Logout
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      router.push("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // ✅ Sidebar navigation
  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: <Home size={18} /> },
    { name: "Portfolio", href: user.id ? `/portfolio/${user.id}` : "/portfolio", icon: <Wallet size={18} /> },
    { name: "Market", href: "/market", icon: <BarChart3 size={18} /> },
    { name: "Asset", href: "/asset", icon: <FolderOpen size={18} /> },
    { name: "Alerts", href: "/alerts", icon: <Bell size={18} /> },
    { name: "Reports", href: "/reports", icon: <FileText size={18} /> },
    { name: "Watchlist", href: "/watchlist", icon: <ListChecks size={18} /> },
    { name: "Notifications", href: "/notifications", icon: <PieChart size={18} /> },
    { name: "Profile", href: "/profile", icon: <Settings size={18} /> },
  ];

  const firstLetter = user.name ? user.name[0].toUpperCase() : "U";

  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Sidebar */}
      <aside className="hidden md:flex md:flex-col w-64 border-r border-gray-800 bg-[#0b0b0b] p-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
              alt="Bitcoin Logo"
              className="w-8 h-8"
            />
          </div>
          <h1 className="text-xl font-semibold">Stash</h1>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 p-3 rounded-lg transition ${
                  active
                    ? "bg-white text-black font-semibold"
                    : "text-gray-400 hover:bg-gray-900 hover:text-white"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}

          {/* ✅ Proper logout button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 p-3 rounded-lg text-gray-400 hover:bg-red-600 hover:text-white w-full transition mt-4"
          >
            <LogOut size={18} />
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-gray-800 bg-[#0b0b0b] px-6 py-4 sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-900">
              <Menu size={20} />
            </button>
            <h2 className="text-lg font-semibold capitalize">
              {pathname.split("/")[1] || "Dashboard"}
            </h2>
          </div>

          <div className="flex items-center gap-4 relative">
            {/* Notifications Dropdown */}
            <button
              className="relative hover:text-gray-300"
              onClick={() =>
                setShowDropdown((prev) =>
                  prev === "notifications" ? null : "notifications"
                )
              }
            >
              <Bell size={20} />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full" />
              )}
            </button>

            <AnimatePresence>
              {showDropdown === "notifications" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-12 mt-2 w-72 bg-[#0b0b0b] border border-gray-800 rounded-xl shadow-lg p-4 z-50"
                >
                  <h3 className="text-sm font-semibold mb-3 text-gray-400">
                    Recent Notifications
                  </h3>

                  {notifications.length === 0 ? (
                    <p className="text-gray-500 text-sm text-center">
                      No new notifications.
                    </p>
                  ) : (
                    <ul className="space-y-3 max-h-64 overflow-y-auto">
                      {notifications.map((n) => (
                        <li
                          key={n.id}
                          className="p-3 rounded-lg bg-black border border-gray-800 hover:bg-gray-900 transition"
                        >
                          <p className="text-sm">{n.message}</p>
                          <span className="text-xs text-gray-500">
                            {new Date(n.created_at).toLocaleString()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    href="/notifications"
                    className="block text-center text-sm text-gray-400 mt-3 hover:underline"
                  >
                    View all
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setShowDropdown((prev) => (prev === "profile" ? null : "profile"))
                }
                className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm font-semibold cursor-pointer hover:bg-gray-600 transition"
                title={user.email || ""}
              >
                {firstLetter}
              </button>

              <AnimatePresence>
                {showDropdown === "profile" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-56 bg-[#0b0b0b] border border-gray-800 rounded-xl shadow-xl z-50"
                  >
                    <div className="p-4 border-b border-gray-800">
                      <p className="text-sm font-semibold text-white">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-400 truncate">
                        {user.email}
                      </p>
                    </div>

                    <div className="p-2">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-300 rounded-lg hover:bg-red-600 hover:text-white transition"
                      >
                        <LogOut size={16} />
                        Logout
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="flex-1 p-6 overflow-y-auto"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
}
