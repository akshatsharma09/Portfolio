"use client"
import { motion } from 'framer-motion'

export default function ProjectCard({ title, desc, tech, links }) {
  return (
    <motion.div whileHover={{ scale: 1.02, y: -6 }} className="p-5 bg-white/5 rounded-lg shadow-lg">
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="mt-2 text-slate-200">{desc}</p>
      <p className="mt-3 text-sm text-slate-300">Tech: {tech}</p>

      <div className="mt-4 flex gap-3">
        {links.github && <a href={links.github} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-indigo-600 rounded">GitHub</a>}
        {links.demo && <a href={links.demo} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 bg-white/5 rounded">Demo</a>}
      </div>
    </motion.div>
  )
}
