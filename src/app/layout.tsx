import './globals.css'
import { Inter } from 'next/font/google'
import { SlideTabsNav } from '@/components/SlideTabsNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cole Uyematsu - Projects',
  description: 'Full-stack developer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50">
          <SlideTabsNav />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}