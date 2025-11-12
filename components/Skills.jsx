"use client"
import { motion } from 'framer-motion'

const groups = [
  { title: 'Languages', items: ['Python', 'JavaScript', 'C++'] },
  { title: 'Frameworks', items: ['React.js', 'Next.js', 'Node.js', 'Express.js'] },
  { title: 'AI/ML', items: ['TensorFlow', 'scikit-learn', 'OpenCV'] },
  { title: 'Cybersecurity', items: ['Wireshark', 'Burp Suite'] },
  { title: 'Databases', items: ['MongoDB', 'MySQL'] },
  { title: 'Other', items: ['Git', 'GitHub', 'Azure AI', 'APIs'] }
]

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g, idx) => (
          <motion.div key={g.title} whileHover={{ y: -6 }} className="p-4 bg-white/5 rounded-lg">
            <h3 className="font-semibold text-lg">{g.title}</h3>
            <ul className="mt-2 text-slate-200">
              {g.items.map(i => <li key={i}>• {i}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
