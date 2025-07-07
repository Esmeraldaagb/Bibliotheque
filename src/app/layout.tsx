import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bibliothèque Glose - Interface Dynamique',
  description: 'Interface moderne et dynamique pour explorer vos collections de livres',
  keywords: ['bibliothèque', 'livres', 'lecture', 'collection'],
  authors: [{ name: 'Glose' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}