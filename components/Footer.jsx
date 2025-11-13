export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-12 border-t border-white/5 py-6">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-300">
        <p>© {currentYear} xyz — Built with ❤️ using Next.js and Tailwind CSS</p>
      </div>
    </footer>
  )
}
