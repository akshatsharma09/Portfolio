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
          <h3 className="text-2xl font-semibold mb-6 text-secondary-800 dark:text-white">Let's Connect</h3>
          <p className="text-secondary-600 dark:text-gray-300 mb-8 leading-relaxed">
            I'm always interested in new opportunities and collaborations.
            Whether you have a project in mind or just want to chat about technology,
            feel free to reach out!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-secondary-800 dark:text-white">Email</p>
                <p className="text-secondary-600 dark:text-gray-300">akshats070205@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/50 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-secondary-800 dark:text-white">Location</p>
                <p className="text-secondary-600 dark:text-gray-300">Prayagraj, Uttar Pradesh</p>
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
            <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-gray-200 mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white dark:bg-gray-800 shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-gray-200 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white dark:bg-gray-800 shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-gray-200 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Tell me about your project or just say hello..."
              className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-white dark:bg-gray-800 shadow-sm resize-none"
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
            className="flex items-center gap-2 text-secondary-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/akshat-sharma-2433b1274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-secondary-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/akshatsh00w/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-secondary-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <span className="text-green-600 font-bold text-lg">GFG</span>
            GeeksForGeeks
          </a>
          <a
            href="https://leetcode.com/u/Caksh/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-secondary-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg" alt="LeetCode" className="w-5 h-5" />
            LeetCode
          </a>
        </div>
      </motion.div>
    </div>
  )
}
