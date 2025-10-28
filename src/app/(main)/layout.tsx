"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/supabaseClient"; // ✅ corrected path
import {
  Menu,
  Bell,
  LogOut,
  LineChart,
  Wallet,
  BarChart3,
  Settings,
  Home,
  History,
  FolderOpen,
  PieChart,
  FileText,
  ListChecks,
} from "lucide-react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const [user, setUser] = useState<{ name: string | null; email: string | null }>({
    name: null,
    email: null,
  });

  // ✅ Fetch the logged-in user from Supabase
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUser({
  name: user.user_metadata?.name ?? user.email?.split("@")[0] ?? "User",
  email: user.email ?? null,
});

      } else {
        router.push("/login");
      }
    };
    getUser();
  }, [supabase, router]);

  // ✅ Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  // ✅ Sidebar navigation items
  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: <Home size={18} /> },
    { name: "Portfolio", href: "/portfolio", icon: <Wallet size={18} /> },
    { name: "Market", href: "/market", icon: <BarChart3 size={18} /> },
    { name: "Analytics", href: "/analytics", icon: <LineChart size={18} /> },
    { name: "Alerts", href: "/alerts", icon: <Bell size={18} /> },
    { name: "History", href: "/history", icon: <History size={18} /> },
    { name: "Asset", href: "/asset", icon: <FolderOpen size={18} /> },
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
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-bold text-xl">
            S
          </div>
          <h1 className="text-xl font-semibold">Stash</h1>
        </div>

        {/* Navigation Links */}
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
        </nav>

        {/* Logout */}
        <div className="mt-auto pt-8">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
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

          <div className="flex items-center gap-4">
            <button className="relative hover:text-gray-300">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full" />
            </button>

            {/* Profile Circle */}
            <div
              className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm font-semibold cursor-pointer hover:bg-gray-600 transition"
              title={user.email || ""}
            >
              {firstLetter}
            </div>
          </div>
        </header>

        {/* Page Transition + Content */}
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
