"use client"
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei'

function Cube() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <MeshDistortMaterial color="#3b82f6" distort={0.4} speed={2} />
    </mesh>
  )
}

export default function Hero() {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center transition-colors duration-500">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <motion.h1
          className="text-4xl md:text-6xl font-black bg-gradient-to-r from-primary-600 via-accent-600 to-primary-800 dark:from-primary-400 dark:via-accent-400 dark:to-primary-300 bg-clip-text text-transparent animate-float transition-colors duration-500"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I&apos;m Akshat
        </motion.h1>
        <motion.p
          className="mt-6 text-xl md:text-2xl text-secondary-800 dark:text-white font-medium transition-colors duration-500"
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
            className="inline-block bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-4 rounded-xl shadow-xl font-semibold text-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
          </motion.a>
          <motion.a
            href="/resume.pdf"
            className="inline-block glass border-2 border-primary-500/30 text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.6 }} className="flex justify-center">
        <div className="w-72 h-72 rounded-2xl bg-white dark:bg-navy-900 shadow-2xl flex items-center justify-center overflow-hidden border border-secondary-200 dark:border-navy-700 transition-colors duration-500">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-600">
            <path d="M12 2C13.1 2 14 2.9 14 4V5H16C17.1 5 18 5.9 18 7V9C19.1 9 20 9.9 20 11V13C20 14.1 19.1 15 18 15V17C18 18.1 17.1 19 16 19H14V20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20V19H8C6.9 19 6 18.1 6 17V15C4.9 15 4 14.1 4 13V11C4 9.9 4.9 9 6 9V7C6 5.9 6.9 5 8 5H10V4C10 2.9 10.9 2 12 2ZM12 4C11.4 4 11 4.4 11 5V6H13V5C13 4.4 12.6 4 12 4ZM8 7V9H6V11H8V13H6V15H8V17H16V15H18V13H16V11H18V9H16V7H8ZM10 9V11H14V9H10ZM10 13V15H14V13H10Z" fill="currentColor"/>
          </svg>
        </div>
      </motion.div>
    </div>
  )
}
