"use client"
import { motion } from 'framer-motion'

const groups = [
  {
    title: 'Languages',
    icon: '💻',
    items: ['Python', 'JavaScript', 'C++'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Frameworks',
    icon: '⚛️',
    items: ['React.js', 'Next.js', 'Node.js', 'Express.js'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'AI/ML',
    icon: '🤖',
    items: ['TensorFlow', 'scikit-learn', 'OpenCV'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Cybersecurity',
    icon: '🔒',
    items: ['Wireshark', 'Burp Suite'],
    color: 'from-red-500 to-orange-500'
  },
  {
    title: 'Databases',
    icon: '🗄️',
    items: ['MongoDB', 'MySQL'],
    color: 'from-yellow-500 to-amber-500'
  },
  {
    title: 'Other',
    icon: '🛠️',
    items: ['Git', 'GitHub', 'Azure AI', 'APIs'],
    color: 'from-indigo-500 to-blue-500'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-center mb-16">Skills</motion.h2>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.03 }}
            className="relative p-6 bg-secondary-50 border border-secondary-200 rounded-xl shadow-lg overflow-hidden group"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${g.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{g.icon}</span>
                <h3 className="font-semibold text-xl">{g.title}</h3>
              </div>
              <div className="space-y-2">
                {g.items.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${g.color}`} />
                    <span className="text-secondary-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
