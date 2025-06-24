import type { AppProps } from 'next/app'
import '@/app/globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme="light"
      disableTransitionOnChange
    >
      <main className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden antialiased`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
} 