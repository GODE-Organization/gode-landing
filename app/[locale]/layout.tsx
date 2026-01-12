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
    openGraph: {
      title: locale === 'en'
        ? 'GODE Devs - Intelligent Automation Made to Measure'
        : 'GODE Devs - Automatización Inteligente a la Medida',
      description: locale === 'en'
        ? 'Founding team of engineers specialized in intelligent automation and fintech solutions'
        : 'Equipo fundador de ingenieros especializados en automatización inteligente y soluciones fintech',
      type: 'website',
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
