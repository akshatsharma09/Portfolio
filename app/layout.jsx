
import '../styles/globals.css'
import ClientLayout from '../components/ClientLayout'

export const metadata = {
  title: 'Portfolio | AI/ML & Web Developer',
  description: 'Modern portfolio showcasing skills in AI/ML, Cybersecurity, and full-stack web development.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:bg-gradient-to-br dark:from-navy-900 dark:via-darkblue-900 dark:to-navy-800 text-secondary-900 dark:text-white antialiased transition-colors duration-500">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
