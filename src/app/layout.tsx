import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Cole Uyematsu - Developer Portfolio',
  description: 'Full-stack developer | CS & Math @ Pomona College',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
              Cole Uyematsu
            </Link>
            <div className="flex items-center space-x-8">
              <a
                href="https://www.linkedin.com/in/cole-uyematsu-94995a252/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/cjuyematsu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:colejuyematsu@gmail.com"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
