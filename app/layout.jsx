import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'xyz — AI/ML Student | Portfolio',
  description: 'Portfolio of xyz — AI/ML student specializing in Intelligent Systems, Cybersecurity and MERN stack.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-slate-100 antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
