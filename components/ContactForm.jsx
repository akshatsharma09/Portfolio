"use client"
import { useState } from 'react'

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
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold">Contact</h2>
      <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
        <input name="name" required placeholder="Name" className="p-3 rounded bg-white/5" />
        <input name="email" type="email" required placeholder="Email" className="p-3 rounded bg-white/5" />
        <textarea name="message" rows={6} required placeholder="Message" className="p-3 rounded bg-white/5" />
        <div className="flex items-center gap-3">
          <button type="submit" className="px-4 py-2 rounded bg-indigo-600">Send Message</button>
          <a href="/resume.pdf" className="px-3 py-2 rounded bg-white/5">Download Resume</a>
        </div>
      </form>
      {status && <p className="mt-3 text-sm">{status}</p>}
      <div className="mt-6 text-slate-300">
        <p>
          Socials: <a className="underline" href="https://github.com/xyz" target="_blank" rel="noreferrer">GitHub</a>
          {' '}•{' '}
          <a className="underline" href="https://www.linkedin.com/in/xyz" target="_blank" rel="noreferrer">LinkedIn</a>
          {' '}•{' '}
          <a className="underline" href="https://auth.geeksforgeeks.org/user/xyz/profile" target="_blank" rel="noreferrer">GFG</a>
          {' '}•{' '}
          <a className="underline" href="https://leetcode.com/xyz" target="_blank" rel="noreferrer">LeetCode</a>
        </p>
      </div>
    </div>
  )
}
