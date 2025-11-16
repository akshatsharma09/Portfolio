"use client"
import { motion } from 'framer-motion'

export default function SkillCard({ name, icon, category, color }) {
  return (
    <motion.div
      className="glass bg-white/95 dark:bg-gray-800/75 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 card-glow animate-float"
      whileHover={{ y: -10, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-center"
        whileHover={{ scale: 1.03 }}
      >
        <div className="text-4xl mb-4 flex justify-center">
          {icon.startsWith('http') ? (
            <img src={icon} alt={name} className="w-12 h-12" />
          ) : (
            <span>{icon}</span>
          )}
        </div>
        <motion.h3
          className="text-xl font-bold mb-2 text-secondary-900 dark:text-white"
        >
          {name}
        </motion.h3>
        <motion.span
          className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${color} text-white`}
        >
          {category}
        </motion.span>
      </motion.div>
    </motion.div>
  )
}
