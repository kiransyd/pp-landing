import type { AppProps } from 'next/app'
import '@/app/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import posthog from 'posthog-js'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
    capture_pageview: false, // we capture manually on route change
    capture_pageleave: true,
  })
}

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    // Track initial page view
    posthog.capture('$pageview')

    // Track subsequent route changes
    const handleRouteChange = () => posthog.capture('$pageview')
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

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