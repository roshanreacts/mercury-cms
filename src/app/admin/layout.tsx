import { Inter } from 'next/font/google'
import Script from 'next/script'
import '@/app/globals.css'
import Head from 'next/head'
import InitialCheck from '@/containers/InitialCheck'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Head>
        <Script src="https://cdn.tailwindcss.com" />
      </Head>
      <body className={inter.className}>
        <InitialCheck />
        {children}
      </body>
    </html>
  )
}
