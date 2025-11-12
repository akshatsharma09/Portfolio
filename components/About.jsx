"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const [open, setOpen] = useState(false)

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold">About</motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-4 text-slate-200">
        I’m xyz, a BTech student in Artificial Intelligence and Machine Learning at ABC College, Kanpur. Awarded 3rd position in the first semester and recognized by the college principal. I’ve completed internships at Edunet Foundation (Azure AI Fundamentals) and built real-world projects in cybersecurity and AI.
      </motion.p>

      <div className="mt-4">
        <button onClick={() => setOpen(!open)} className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500">{open ? 'Hide' : 'Learn More'}</button>
        {open && (
          <div className="mt-3 p-4 bg-white/5 rounded">
            <h3 className="font-semibold">Interests</h3>
            <ul className="mt-2 list-disc list-inside text-slate-200">
              <li>Artificial Intelligence & Machine Learning</li>
              <li>Cybersecurity</li>
              <li>Web Development (MERN)</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
