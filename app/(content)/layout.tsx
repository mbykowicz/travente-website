import '@/app/globals.css'
import {
  IBM_Plex_Sans as FontSans,
  Spectral as FontSerif,
  Passions_Conflict as FontScript,
} from 'next/font/google'
import type { Metadata } from 'next'
import Header from '@/components/elements/Header'
import Footer from '@/components/elements/Footer'

export const dynamic = 'force-dynamic'

const fontSans = FontSans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontSerif = FontSerif({
  weight: ['400', '700'],
  style: ['italic'],
  subsets: ['latin'],
  variable: '--font-serif',
})

const fontScript = FontScript({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-script',
})

export const metadata: Metadata = {
  title: 'Travente',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pl"
      className={`${fontSans.variable} ${fontSerif.variable} ${fontScript.variable} scroll-smooth`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
