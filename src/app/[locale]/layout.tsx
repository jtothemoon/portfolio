import type React from 'react'
import { type Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import { Head } from '@/components/head'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'
import { Toaster as ToasterProvider } from '@/components/ui/toaster'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { type Locale } from '@/i18n/request'
import '../styles/globals.css'

const metadata: Metadata = {
  title: '임현진 포트폴리오 | LIM HYUN JIN Portfolio',
  description: '금융 소프트웨어 엔지니어 임현진의 포트폴리오입니다. 풀스택 개발, 웹 접근성, 성능 최적화에 집중하는 개발자입니다. Financial Software Engineer LIM HYUN JIN Portfolio.'
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={'min-h-screen bg-background antialiased overflow-y-scroll'}
      suppressHydrationWarning
    >
      <Head metadata={metadata} />
      <body className="font-pretendard w-full">
        <NextIntlClientProvider messages={messages}>
          <ViewTransitions>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <TooltipProvider>
                <main className="flex flex-col items-center justify-center min-h-screen pt-24 pb-8 px-4">
                  <Header />
                  {children}
                  <Footer />
                </main>
              </TooltipProvider>
              <Toaster />
              <ToasterProvider />
            </ThemeProvider>
            <Analytics />
            <SpeedInsights />
          </ViewTransitions>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
