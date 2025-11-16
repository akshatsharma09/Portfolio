"use client"
import { motion } from 'framer-motion'
import SplineModel from './SplineModel'

export default function Hero() {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center transition-colors duration-500">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <motion.h1
          className="text-4xl md:text-6xl font-black bg-gradient-to-r from-primary-700 via-accent-600 to-primary-900 dark:from-primary-300 dark:via-accent-300 dark:to-primary-100 bg-clip-text text-transparent animate-float transition-colors duration-500"
          style={{
            textShadow: '0 2px 10px rgba(59, 130, 246, 0.1)',
            WebkitTextStroke: '0.5px rgba(59, 130, 246, 0.1)'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I&apos;m Akshat
        </motion.h1>
        <motion.p
          className="mt-6 text-xl md:text-2xl text-secondary-800 dark:text-gray-100 font-semibold transition-colors duration-500"
          style={{
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          AI/ML Engineer passionate about building intelligent & secure applications.
        </motion.p>

        <motion.div
          className="mt-8 flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="inline-block glass border-2 border-primary-500/30 text-primary-600 dark:text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
          </motion.a>
          <motion.a
            href="/resume.pdf"
            className="inline-block glass border-2 border-primary-500/30 text-primary-600 dark:text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex justify-center"
      >
        <SplineModel className="h-[600px] w-full" />
      </motion.div>
    </div>
  )
}
