"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const [open, setOpen] = useState(false)

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-8"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-secondary-700 leading-relaxed mb-6"
          >
            I’m Akshat Sharma, a BTech student in Artificial Intelligence and Machine Learning.
            Awarded 3rd position in the first semester and recognized by the college principal.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-secondary-700 leading-relaxed mb-8"
          >
            I’ve completed internships at Edunet Foundation (Azure AI Fundamentals) and built real-world projects
            in cybersecurity and AI, combining my passion for technology with practical problem-solving.
          </motion.p>

          <motion.button
            onClick={() => setOpen(!open)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-medium shadow-lg transition-all duration-300"
          >
            {open ? 'Hide Details' : 'Learn More'}
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary-100 via-accent-100 to-primary-200 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-6xl">A</span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 rounded-full border-2 border-primary-200/50"
            />
          </div>
        </motion.div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="mt-12 p-8 bg-secondary-50 border border-secondary-200 rounded-xl"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-secondary-800">My Interests & Focus Areas</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🤖', title: 'AI & ML', desc: 'Developing intelligent systems and machine learning models' },
              { icon: '🔒', title: 'Cybersecurity', desc: 'Securing digital assets and preventing cyber threats' },
              { icon: '💻', title: 'Web Development', desc: 'Building modern, responsive web applications' }
            ].map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 rounded-lg bg-secondary-50 border border-secondary-200"
              >
                <div className="text-4xl mb-3">{interest.icon}</div>
                <h4 className="font-semibold text-lg mb-2 text-secondary-800">{interest.title}</h4>
                <p className="text-secondary-600 text-sm">{interest.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
