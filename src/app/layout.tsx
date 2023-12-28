// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import InitialCheck from '@/containers/InitialCheck'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Script src="https://cdn.tailwindcss.com" />
        {/* <InitialCheck/> */}
        {children}
      </body>
    </html>
  )
}
