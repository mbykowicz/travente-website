import './globals.css'
import {
  IBM_Plex_Sans as FontSans,
  Spectral as FontSerif,
  Passions_Conflict as FontScript,
} from 'next/font/google'
import type { Metadata } from 'next'
import Header from '@/components/header'
import Logo from '@/components/logo'

export const fontSans = FontSans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
})

export const fontSerif = FontSerif({
  weight: ['400', '700'],
  style: ['italic'],
  subsets: ['latin'],
  variable: '--font-serif',
})

export const fontScript = FontScript({
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
        <footer className="flex flex-col items-center justify-center gap-4 my-12 text-xs text-storm-dust-600">
          <Logo className="h-8" />
          <p>Copyright &copy; 2023 - Travente Ewa Markiewicz</p>
        </footer>
      </body>
    </html>
  )
}
