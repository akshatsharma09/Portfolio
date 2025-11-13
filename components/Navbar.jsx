"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur bg-black/30 dark:bg-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#home" className="text-2xl font-semibold">xyz.dev</Link>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#home" className="hover:underline transition-colors">Home</a>
          <a href="#about" className="hover:underline transition-colors">About</a>
          <a href="#skills" className="hover:underline transition-colors">Skills</a>
          <a href="#projects" className="hover:underline transition-colors">Projects</a>
          <a href="#experience" className="hover:underline transition-colors">Experience</a>
          <a href="#contact" className="hover:underline transition-colors">Contact</a>
          <div className="ml-4 relative">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="relative w-14 h-7 bg-white/10 dark:bg-black/20 rounded-full p-1 transition-colors duration-300"
            >
              <motion.div
                className="w-5 h-5 bg-white rounded-full shadow-md"
                layout
                transition={{ type: 'spring', stiffness: 700, damping: 30 }}
                style={{ x: darkMode ? 24 : 0 }}
              />
            </button>
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 hover:opacity-100 transition-opacity">
              {darkMode ? 'Light' : 'Dark'}
            </span>
          </div>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-12 h-6 bg-white/10 dark:bg-black/20 rounded-full p-0.5 transition-colors duration-300"
          >
            <motion.div
              className="w-5 h-5 bg-white rounded-full shadow-md"
              layout
              transition={{ type: 'spring', stiffness: 700, damping: 30 }}
              style={{ x: darkMode ? 18 : 0 }}
            />
          </button>
          <button onClick={() => setOpen(!open)} aria-label="menu" className="px-3 py-2 rounded bg-white/5 dark:bg-black/10">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/60 dark:bg-white/10 backdrop-blur"
        >
          <div className="flex flex-col gap-3 px-6 py-4">
            <a href="#home" onClick={() => setOpen(false)} className="hover:underline transition-colors">Home</a>
            <a href="#about" onClick={() => setOpen(false)} className="hover:underline transition-colors">About</a>
            <a href="#skills" onClick={() => setOpen(false)} className="hover:underline transition-colors">Skills</a>
            <a href="#projects" onClick={() => setOpen(false)} className="hover:underline transition-colors">Projects</a>
            <a href="#experience" onClick={() => setOpen(false)} className="hover:underline transition-colors">Experience</a>
            <a href="#contact" onClick={() => setOpen(false)} className="hover:underline transition-colors">Contact</a>
          </div>
        </motion.div>
      )}
    </header>
  )
}
