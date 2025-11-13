"use client"
import { motion } from 'framer-motion'

export default function ProjectCard({ title, desc, tech, links }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.05, y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="p-5 bg-white/5 rounded-lg shadow-lg cursor-pointer"
    >
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="mt-2 text-slate-200">{desc}</p>
      <p className="mt-3 text-sm text-slate-300">Tech: {tech}</p>

      <div className="mt-4 flex gap-3">
        {links.github && <motion.a href={links.github} target="_blank" rel="noreferrer" whileHover={{ scale: 1.1 }} className="text-sm px-3 py-2 bg-indigo-600 rounded">GitHub</motion.a>}
        {links.demo && <motion.a href={links.demo} target="_blank" rel="noreferrer" whileHover={{ scale: 1.1 }} className="text-sm px-3 py-2 bg-white/5 rounded">Demo</motion.a>}
      </div>
    </motion.div>
  )
}
