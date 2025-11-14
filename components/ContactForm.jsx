"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.target)
    try {
      // example using Formspree: replace action with your form endpoint
      await fetch('https://formspree.io/f/{your-id}', { method: 'POST', body: form })
      setStatus('Thanks — message sent!')
      e.target.reset()
    } catch (err) {
      setStatus('Failed to send. Try email: example@xyz.dev')
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-secondary-800">Let's Connect</h3>
          <p className="text-secondary-600 mb-8 leading-relaxed">
            I'm always interested in new opportunities and collaborations.
            Whether you have a project in mind or just want to chat about technology,
            feel free to reach out!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-secondary-800">Email</p>
                <p className="text-secondary-600">akshats070205@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-secondary-800">Location</p>
                <p className="text-secondary-600">Prayagraj, Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Tell me about your project or just say hello..."
              className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white shadow-sm resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              type="submit"
              className="flex-1 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
            <motion.a
              href="/resume.pdf"
              className="flex-1 glass border-2 border-primary-500/30 text-primary-700 px-6 py-3 rounded-lg font-semibold text-center hover:bg-primary-50 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
            </motion.a>
          </div>

          {status && (
            <motion.p
              className={`text-sm text-center ${status.includes('Thanks') ? 'text-accent-600' : 'text-red-600'}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {status}
            </motion.p>
          )}
        </motion.form>
      </div>

      <motion.div
        className="mt-16 pt-8 border-t border-secondary-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/akshatsharma09"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-secondary-600 hover:text-primary-600 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/akshat-sharma-2433b1274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-secondary-600 hover:text-primary-600 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/akshatsh00w/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-secondary-600 hover:text-primary-600 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.015 4.629c.082 0 .149.067.149.15v.345c0 .083-.067.15-.149.15h-.345c-.083 0-.15-.067-.15-.15v-.345c0-.083.067-.15.15-.15h.345zm0 2.686c.082 0 .149.067.149.15v.345c0 .083-.067.15-.149.15h-.345c-.083 0-.15-.067-.15-.15v-.345c0-.083.067-.15.15-.15h.345zm0 2.686c.082 0 .149.067.149.15v.345c0 .083-.067.15-.149.15h-.345c-.083 0-.15-.067-.15-.15v-.345c0-.083.067-.15.15-.15h.345zm0 2.686c.082 0 .149.067.149.15v.345c0 .083-.067.15-.149.15h-.345c-.083 0-.15-.067-.15-.15v-.345c0-.083.067-.15.15-.15h.345zm0 2.686c.082 0 .149.067.149.15v.345c0 .083-.067.15-.149.15h-.345c-.083 0-.15-.067-.15-.15v-.345c0-.083.067-.15.15-.15h.345z"/>
            </svg>
            GFG
          </a>
          <a
            href="https://leetcode.com/u/Caksh/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-secondary-600 hover:text-primary-600 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513v.542c0 5.221 4.477 9.466 9.976 9.466a9.916 9.916 0 0 0 6.68-2.621 1.375 1.375 0 0 0 .17-1.727l-.577-1.154a1.375 1.375 0 0 0-1.846-.625 6.573 6.573 0 0 1-3.853 1.267 6.584 6.584 0 0 1-4.696-1.909 6.508 6.508 0 0 1-1.953-4.637 6.466 6.466 0 0 1 1.953-4.637 6.566 6.566 0 0 1 4.696-1.909 6.573 6.573 0 0 1 3.853 1.267 1.375 1.375 0 0 0 1.846-.625l.577-1.154a1.375 1.375 0 0 0-.17-1.727A9.917 9.917 0 0 0 13.483 0zM6.519 9.75a1.375 1.375 0 0 0-.962.438L.838 15.963a1.375 1.375 0 0 0 .17 1.727 9.916 9.916 0 0 0 6.68 2.621 9.976 9.976 0 0 0 9.976-9.466v-.542a5.35 5.35 0 0 0-.125-.513 5.266 5.266 0 0 0-1.209-2.104L9.445 6.664a1.374 1.374 0 0 0-.961-.438 1.374 1.374 0 0 0-.961.438L3.712 13.513a1.375 1.375 0 0 0 .17 1.727 6.573 6.573 0 0 1 3.853-1.267 6.584 6.584 0 0 1 4.696 1.909 6.508 6.508 0 0 1 1.953 4.637 6.466 6.466 0 0 1-1.953 4.637 6.566 6.566 0 0 1-4.696 1.909 6.573 6.573 0 0 1-3.853-1.267 1.375 1.375 0 0 0-1.846.625L.838 15.963a1.375 1.375 0 0 0 .17-1.727l4.739-5.775a1.374 1.374 0 0 0 0-1.875z"/>
            </svg>
            LeetCode
          </a>
        </div>
      </motion.div>
    </div>
  )
}
