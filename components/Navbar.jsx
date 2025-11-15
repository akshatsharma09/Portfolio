"use client"
import { useState, useEffect } from 'react'
import { useTheme } from './ThemeContext'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <header className="w-full sticky top-0 z-50 glass shadow-xl border-b border-secondary-200/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="#home" className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent hover:from-primary-700 hover:to-accent-700 transition-all duration-300">
            Akshat.dev
          </Link>
        </motion.div>

        <nav className="hidden md:flex gap-8 items-center">
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="ml-4 px-3 py-2 rounded-lg font-bold text-sm bg-navy-900 dark:bg-white text-white dark:text-navy-900 border border-navy-800 dark:border-white transition-all duration-500 shadow-md"
            style={{ minWidth: 40 }}
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-primary-700 bg-primary-100 shadow-lg'
                  : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                  layoutId="activeTab"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="px-2 py-2 rounded-lg font-bold text-sm bg-navy-900 dark:bg-white text-white dark:text-navy-900 border border-navy-800 dark:border-white transition-all duration-500 shadow-md"
            style={{ minWidth: 40 }}
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <motion.button
            onClick={() => setOpen(!open)}
            aria-label="menu"
            className="px-3 py-2 rounded-lg bg-primary-50 hover:bg-primary-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {open ? '✕' : '☰'}
          </motion.button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white/95 backdrop-blur-lg border-t border-secondary-200/50"
        >
          <div className="flex flex-col gap-2 px-6 py-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-primary-700 bg-primary-100 shadow-lg'
                    : 'text-secondary-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                whileTap={{ x: 0 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}
