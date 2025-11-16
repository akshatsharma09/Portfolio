"use client"
import { motion } from 'framer-motion'

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
        <div className="relative w-full h-96 perspective-1000">
          {/* Floating Desk Setup */}
          <motion.div
            className="relative w-full h-full transform-gpu"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(15deg) rotateY(-10deg)'
            }}
            animate={{
              rotateX: [15, 18, 15],
              rotateY: [-10, -5, -10]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Desk Surface */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-16 bg-gradient-to-t from-amber-800 to-amber-600 rounded-lg shadow-2xl"
              style={{ transform: 'translateZ(20px)' }}
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Monitor Base */}
            <div
              className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gray-700 rounded-t-lg"
              style={{ transform: 'translateZ(15px)' }}
            />

            {/* Monitor Arm */}
            <div
              className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-2 h-12 bg-gray-600"
              style={{ transform: 'translateZ(10px)' }}
            />

            {/* Monitor Screen */}
            <motion.div
              className="absolute bottom-36 left-1/2 transform -translate-x-1/2 w-72 h-40 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg border-2 border-gray-600 shadow-2xl"
              style={{ transform: 'translateZ(25px)' }}
              animate={{
                rotateY: [0, 3, 0],
                rotateX: [0, -1, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Screen Content */}
              <div className="w-full h-full bg-slate-900 rounded-md p-4 flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-xs">portfolio.jsx</div>
                </div>
                <div className="flex-1 text-green-400 text-sm font-mono space-y-2">
                  <div className="animate-pulse">import React from 'react';</div>
                  <div className="animate-pulse delay-75">{`const Akshat = () => {`}</div>
                  <div className="animate-pulse delay-150">  return (</div>
                  <div className="animate-pulse delay-225">{`    <AI_ML_Engineer />`}</div>
                  <div className="animate-pulse delay-300">  );</div>
                  <div className="animate-pulse delay-375">&#125;;</div>
                </div>
              </div>
            </motion.div>

            {/* Keyboard */}
            <motion.div
              className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-80 h-12 bg-gradient-to-t from-gray-700 to-gray-600 rounded-lg shadow-xl"
              style={{ transform: 'translateZ(30px) rotateX(-5deg)' }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full h-full rounded-lg border border-gray-500 grid grid-cols-15 gap-1 p-2">
                {Array.from({ length: 45 }).map((_, i) => (
                  <div key={i} className="bg-gray-800 rounded"></div>
                ))}
              </div>
            </motion.div>

            {/* Mouse */}
            <motion.div
              className="absolute bottom-20 right-32 w-10 h-14 bg-gradient-to-t from-gray-600 to-gray-500 rounded-full shadow-lg"
              style={{ transform: 'translateZ(35px)' }}
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Coffee Mug */}
            <motion.div
              className="absolute bottom-28 left-20 w-12 h-16 bg-gradient-to-t from-blue-600 to-blue-400 rounded-b-lg shadow-lg"
              style={{ transform: 'translateZ(25px)' }}
              animate={{ rotate: [0, 2, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full h-4 bg-amber-600 rounded-t-lg mt-1"></div>
            </motion.div>

            {/* Notebook */}
            <motion.div
              className="absolute bottom-20 right-12 w-20 h-14 bg-gradient-to-t from-blue-800 to-blue-600 rounded-lg shadow-lg"
              style={{ transform: 'translateZ(20px) rotateY(10deg)' }}
              animate={{ rotateY: [10, 15, 10] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating Particles */}
            <motion.div
              className="absolute top-8 left-8 text-blue-400 text-2xl font-bold"
              style={{ transform: 'translateZ(40px)' }}
              animate={{
                y: [0, -15, 0],
                rotateY: [0, 180, 360],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {'</>'}
            </motion.div>

            <motion.div
              className="absolute top-12 right-12 text-purple-400 text-xl font-bold"
              style={{ transform: 'translateZ(35px)' }}
              animate={{
                y: [0, -12, 0],
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.9, 0.6]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              {'{ }'}
            </motion.div>

            <motion.div
              className="absolute top-16 left-1/3 text-green-400 text-lg font-bold"
              style={{ transform: 'translateZ(30px)' }}
              animate={{
                y: [0, -10, 0],
                rotateX: [0, 10, 0],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              AI
            </motion.div>

            {/* Ambient Lighting */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" style={{ transform: 'translateZ(50px)' }} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
