import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@radix-ui/themes/styles.css'
import 'react-loading-skeleton/dist/skeleton.css'
import {HarmonySetup} from 'harmony-ai-editor';
import { fonts } from '@/lib/fonts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Catalog',
  description: 'A collection of design patterns for the web.',
  openGraph: {
    title: 'Find the perfect component.',
  },
  twitter: {
    title: 'Find the perfect component.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {process.env.NODE_ENV !== 'production' || true ? <HarmonySetup repositoryId="6c7837c6-3cad-4481-87d5-2a2a336c90e1" fonts={fonts}/> : null }
      </body>
      <script async defer src="https://buttons.github.io/buttons.js"></script>
    </html>
  )
}
