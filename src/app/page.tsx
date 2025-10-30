"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github } from "lucide-react"

// Team member data
const teamMembers = [
  {
    name: "Jeevitha S",
    role: "Scrum Master",
    github: "https://github.com/jeevitha-14s",
    initials: "JS",
  },
  {
    name: "Harshith JN",
    role: "Developer",
    github: "https://github.com/harshithjn",
    initials: "HJ",
  },
  {
    name: "Kartik Sumbly",
    role: "Developer",
    github: "https://github.com/KARTIKSUMBLY",
    initials: "KS",
  },
  {
    name: "Hema Shree",
    role: "Developer",
    github: "https://github.com/HemaShree0408",
    initials: "HS",
  },
]

const projectDetails = {
  projectId: "P25",
  course: "UE23CS341A",
  academicYear: "2025",
  semester: "5th Sem",
  campus: "EC",
  branch: "CSE",
  section: "D",
  team: "Stash 📋",
}

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const techStack = [
  { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
  { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" },
  { name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
  { name: "Supabase", logo: "https://www.svgrepo.com/show/354431/supabase.svg" },
  {
    name: "CoinGecko",
    logo: "https://www.svgrepo.com/show/373553/coingecko.svg",
  },
  { name: "Vercel", logo: "https://www.svgrepo.com/show/354423/vercel.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
  { name: "Jira", logo: "https://cdn.worldvectorlogo.com/logos/jira-1.svg" },
  { name: "GitHub", logo: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Blockchain Network Nodes */}
          {[...Array(8)].map((_, i) => {
            const angle = (i / 8) * Math.PI * 2
            const radius = 200 + Math.random() * 100
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            return (
              <motion.div
                key={`node-${i}`}
                className="absolute w-2 h-2 bg-white/40 rounded-full"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            )
          })}

          {/* Connecting Lines Between Nodes */}
          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              </linearGradient>
            </defs>
            {[...Array(6)].map((_, i) => {
              const angle1 = (i / 6) * Math.PI * 2
              const angle2 = ((i + 2) / 6) * Math.PI * 2
              const radius = 250
              const x1 = Math.cos(angle1) * radius + window.innerWidth / 2
              const y1 = Math.sin(angle1) * radius + window.innerHeight / 4
              const x2 = Math.cos(angle2) * radius + window.innerWidth / 2
              const y2 = Math.sin(angle2) * radius + window.innerHeight / 4

              return (
                <motion.line
                  key={`line-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  opacity="0.3"
                  animate={{ opacity: [0.1, 0.4, 0.1] }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              )
            })}
          </svg>

          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Animated Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Animated Accent Lines */}
          <motion.div
            className="absolute top-1/3 left-0 w-1/2 h-px  from-white/20 to-transparent"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-1/3 right-0 w-1/2 h-px  from-white/20 to-transparent"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          />

          {/* Primary Orb - Enhanced Animation */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/8 rounded-full blur-3xl"
            animate={{
              y: [0, 40, 0],
              x: [0, 20, 0],
              opacity: [0.15, 0.25, 0.15],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Secondary Orb - Enhanced Animation */}
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/6 rounded-full blur-3xl"
            animate={{
              y: [0, -40, 0],
              x: [0, -20, 0],
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Tertiary Accent Orb */}
          <motion.div
            className="absolute top-1/2 right-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl"
            animate={{
              y: [0, 30, 0],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center text-center max-w-4xl"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="mb-8"
          >
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 transition-all duration-300">
              <span className="text-2xl font-bold">₿</span>
            </div>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight text-white">
            Track Your
            <br />
            Digital Assets
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/60 mb-8 max-w-2xl leading-relaxed">
            A personal investment tracking application for cryptocurrencies and digital assets. Real-time price
            monitoring, portfolio performance analysis, and investment recommendations.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/register"
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 hover:border-white/50"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-2 bg-white/50 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-6 border-t border-white/10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white/50 text-sm mb-12 uppercase tracking-widest"
          >
            Built With Modern Tech Stack
          </motion.p>

          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-12 whitespace-nowrap"
              animate={{ x: [0, -1200] }}
              transition={{
                duration: 25,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {/* First set of tech items */}
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-4 px-8 py-6 border border-white/20 rounded-lg hover:border-white/40 transition-all duration-300 hover:bg-white/5 "
                >
                  <img src={tech.logo || "/placeholder.svg"} alt={tech.name} className="w-16 h-16 object-contain" />
                  <span className="text-white/80 font-semibold text-sm">{tech.name}</span>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {techStack.map((tech, idx) => (
                <div
                  key={`duplicate-${idx}`}
                  className="flex flex-col items-center gap-4 px-8 py-6 border border-white/20 rounded-lg hover:border-white/40 transition-all duration-300 hover:bg-white/5 "
                >
                  <img src={tech.logo || "/placeholder.svg"} alt={tech.name} className="w-16 h-16 object-contain" />
                  <span className="text-white/80 font-semibold text-sm">{tech.name}</span>
                </div>
              ))}
            </motion.div>

            {/* Gradient fade effect on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20  from-black to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20  from-black to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </section>

      {/* Laptop Mockups Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
          >
            See It In Action
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="relative  from-white/10 to-white/5 rounded-2xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10">
                <div className="bg-black rounded-lg aspect-video flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <p className="text-white/40 text-sm mb-2">Dashboard Screenshot</p>
                    <p className="text-white/20 text-xs">Add your screenshot here</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group"
            >
              <div className="relative  from-white/10 to-white/5 rounded-2xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10">
                <div className="bg-black rounded-lg aspect-video flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <p className="text-white/40 text-sm mb-2">Portfolio View</p>
                    <p className="text-white/20 text-xs">Add your screenshot here</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Project Details Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-4 text-center"
          >
            Project Details
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-white/60 mb-12 max-w-2xl mx-auto"
          >
            {projectDetails.team}
          </motion.p>

          {/* Details Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { label: "Project ID", value: projectDetails.projectId },
              { label: "Course", value: projectDetails.course },
              { label: "Academic Year", value: projectDetails.academicYear },
              { label: "Semester", value: projectDetails.semester },
              { label: "Campus", value: projectDetails.campus },
              { label: "Branch", value: projectDetails.branch },
              { label: "Section", value: projectDetails.section },
              { label: "Team", value: "Stash" },
            ].map((detail, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <p className="text-white/50 text-xs uppercase tracking-widest mb-2">{detail.label}</p>
                <p className="text-white font-semibold">{detail.value}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Project Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-4">About This Project</h3>
            <p className="text-white/70 leading-relaxed">
              A personal investment tracking application for cryptocurrencies and digital assets, featuring real-time
              price monitoring, portfolio performance analysis, and investment recommendations. This project involves
              API integration, financial calculations, and data visualization components. Developed as part of the
              UE23CS341A course at PES University.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-6 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
          >
            Development Team
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {teamMembers.map((member, idx) => (
              <motion.div key={idx} variants={itemVariants} className="group">
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-white/30 duration-300 hover:shadow-lg hover:shadow-white/10 h-full flex flex-col items-center text-center group-hover:scale-105 transform transition-transform">
                    {/* Avatar */}
                    <div className="w-16 h-16  from-white/20 to-white/10 rounded-full flex items-center justify-center mb-4 group-hover:from-white/30 group-hover:to-white/20 transition-all">
                      <span className="text-xl font-bold text-white/80">{member.initials}</span>
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>

                    {/* Role */}
                    <p className="text-sm text-white/60 mb-4">{member.role}</p>

                    {/* GitHub Link */}
                    <div className="flex items-center gap-2 text-white/50 group-hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                      <span className="text-xs">View Profile</span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center text-white/50 text-sm"
        >
          <p>© {new Date().getFullYear()} Stash. Built with passion at PES University.</p>
        </motion.div>
      </footer>
    </div>
  )
}
