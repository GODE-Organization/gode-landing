import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GODE Devs - Automatización Inteligente y Soluciones Fintech',
  description: 'Desarrollamos asistentes virtuales con IA y soluciones fintech que escalan tus operaciones 24/7. Equipo fundador especializado en automatización inteligente.',
  keywords: 'desarrollo de software, automatización inteligente, chatbots IA, soluciones fintech, asistentes virtuales, desarrollo a medida',
  authors: [{ name: 'GODE Devs' }],
  openGraph: {
    title: 'GODE Devs - Automatización Inteligente a la Medida',
    description: 'Equipo fundador de ingenieros especializados en automatización inteligente y soluciones fintech',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}