import { Inter } from 'next/font/google'
import Script from 'next/script'
import '@/app/globals.css'
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
        {children}
      </body>
    </html>
  )
}
