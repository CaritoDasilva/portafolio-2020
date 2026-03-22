import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Carito Da Silva - Full Stack Developer',
  description: 'Portfolio de Carolina Da Silva, Full Stack Developer. Angular, React, Next.js, Node.js.',
  keywords: 'full stack developer, frontend, react, nextjs, angular, nodejs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
