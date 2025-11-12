"use client"
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <h1 className="text-4xl md:text-5xl font-bold">Hi, I&apos;m xyz <span className="text-3xl">👋</span></h1>
        <p className="mt-4 text-lg text-slate-200">AI/ML student passionate about building intelligent & secure applications.</p>

        <div className="mt-6 flex gap-4">
          <a href="#projects" className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-md shadow-lg transform hover:scale-105 transition">View My Projects</a>
          <a href="/resume.pdf" className="inline-block bg-transparent border border-white/20 text-white px-5 py-3 rounded-md hover:bg-white/5">Download Resume</a>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex justify-center">
        <div className="w-72 h-72 rounded-2xl bg-gradient-to-tr from-indigo-700 via-violet-700 to-slate-800 shadow-2xl flex items-center justify-center">
          <p className="text-center text-sm md:text-base px-4">Subtle 3D / canvas placeholder — replace with React Three Fiber floating model for extra flair.</p>
        </div>
      </motion.div>
    </div>
  )
}
