export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-secondary-200 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-secondary-500 text-sm">
          © {currentYear} Akshat.dev
        </p>
      </div>
    </footer>
  )
}
