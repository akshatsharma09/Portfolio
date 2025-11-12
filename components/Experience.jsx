"use client"
import { motion } from 'framer-motion'

const items = [
  { title: 'Edunet Foundation', sub: 'Internship — Azure AI Fundamentals' },
  { title: 'Summer Training', sub: 'AI & ML' },
  { title: 'Achievements', sub: '3rd position in 1st semester; Code for Bharat participant; Naukri Campus Contest' }
]

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold">Experience & Certifications</h2>
      <div className="mt-6 space-y-4">
        {items.map(i => (
          <motion.div key={i.title} whileHover={{ x: 4 }} className="p-4 bg-white/5 rounded">
            <h3 className="font-semibold">{i.title}</h3>
            <p className="text-slate-200">{i.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
