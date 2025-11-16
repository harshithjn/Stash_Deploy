"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github } from "lucide-react";

// --- Team and Project Data ---
const teamMembers = [
  { name: "Jeevitha S", role: "Scrum Master", github: "https://github.com/jeevitha-14s", initials: "JS" },
  { name: "Harshith JN", role: "Developer", github: "https://github.com/harshithjn", initials: "HJ" },
  { name: "Kartik Sumbly", role: "Developer", github: "https://github.com/KARTIKSUMBLY", initials: "KS" },
  { name: "Hema Shree", role: "Developer", github: "https://github.com/HemaShree0408", initials: "HS" },
];

const projectDetails = {
  projectId: "P25",
  course: "UE23CS341A",
  academicYear: "2025",
  semester: "5th Sem",
  campus: "EC",
  branch: "CSE",
  section: "D",
  team: "Stash 📋",
};

const techStack = [
  { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
  { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" },
  { name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
  { name: "Supabase", logo: "https://www.svgrepo.com/show/354431/supabase.svg" },
  { name: "CoinGecko", logo: "https://www.svgrepo.com/show/373553/coingecko.svg" },
  { name: "Vercel", logo: "https://www.svgrepo.com/show/354423/vercel.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
  { name: "Jira", logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg" },
  { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" },
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [nodes, setNodes] = useState<{ x: number; y: number }[]>([]);
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMounted(true);

      setNodes(
        Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 200 + Math.random() * 100;
          return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
        })
      );

      setParticles(
        Array.from({ length: 6 }).map(() => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
        }))
      );
    }
  }, []);

  if (!mounted) return <div className="min-h-screen bg-black" />;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Static nodes (no animation now) */}
          {nodes.map((node, i) => (
            <div
              key={`node-${i}`}
              className="absolute w-2 h-2 bg-white/40 rounded-full"
              style={{
                left: `calc(50% + ${node.x}px)`,
                top: `calc(50% + ${node.y}px)`,
              }}
            />
          ))}

          {/* Particles (static since motion removed) */}
          {particles.map((p, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            />
          ))}
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">

          <div className="mb-8">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
              <span className="text-2xl font-bold">₿</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight text-white">
            Track Your <br /> Digital Assets
          </h1>

          <p className="text-lg sm:text-xl text-white/60 mb-8 max-w-2xl">
            A personal investment tracking application for cryptocurrencies and digital assets.
            Real-time price monitoring, portfolio performance analysis, and investment recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/register"
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition"
            >
              Get Started
            </Link>

            <Link
              href="/login"
              className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition"
            >
              Learn More
            </Link>
          </div>

        </div>

      </section>

    </div>
  );
}
