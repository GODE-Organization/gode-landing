import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export function generateMetadata({params: {locale}}: {params: {locale: string}}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gode-devs.com'
  const currentUrl = locale === 'es' ? baseUrl : `${baseUrl}/en`
  
  return {
    title: locale === 'en' 
      ? 'GODE Devs - Intelligent Automation and Fintech Solutions'
      : 'GODE Devs - Automatización Inteligente y Soluciones Fintech',
    description: locale === 'en'
      ? 'We develop AI-powered virtual assistants and fintech solutions that scale your operations 24/7. Founding team specialized in intelligent automation.'
      : 'Desarrollamos asistentes virtuales con IA y soluciones fintech que escalan tus operaciones 24/7. Equipo fundador especializado en automatización inteligente.',
    keywords: locale === 'en'
      ? 'software development, intelligent automation, AI chatbots, fintech solutions, virtual assistants, custom development'
      : 'desarrollo de software, automatización inteligente, chatbots IA, soluciones fintech, asistentes virtuales, desarrollo a medida',
    authors: [{ name: 'GODE Devs' }],
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/images/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/images/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [
        { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    manifest: '/site.webmanifest',
    alternates: {
      canonical: currentUrl,
      languages: {
        'es': baseUrl,
        'en': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: locale === 'en'
        ? 'GODE Devs - Intelligent Automation Made to Measure'
        : 'GODE Devs - Automatización Inteligente a la Medida',
      description: locale === 'en'
        ? 'Founding team of engineers specialized in intelligent automation and fintech solutions'
        : 'Equipo fundador de ingenieros especializados en automatización inteligente y soluciones fintech',
      type: 'website',
      url: currentUrl,
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      alternateLocale: locale === 'es' ? 'en_US' : 'es_ES',
    },
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: {locale: string}
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(params.locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
