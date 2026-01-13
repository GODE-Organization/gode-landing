'use client'

import { ArrowRight, Sparkles, Zap } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('Hero')
  
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20 pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full mix-blend-screen filter blur-xl opacity-50 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-screen filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/40 text-purple-300 border border-purple-700/50 rounded-full text-sm font-medium mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            {t('badge')}
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('title')}
            <span className="block gradient-text"> {t('titleHighlight')}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.rich('subtitle', {
              ai: (chunks) => <span className="font-semibold text-purple-400">{chunks}</span>,
              fintech: (chunks) => <span className="font-semibold text-purple-400">{chunks}</span>,
              availability: (chunks) => <span className="font-semibold text-white">{chunks}</span>,
            })}
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-300">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="font-medium">{t('feature24')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="font-medium">{t('featureAI')}</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-purple-400" />
              <span className="font-medium">{t('featureCustom')}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-lg shadow-purple-900/50 hover:shadow-xl transform hover:-translate-y-0.5"
              aria-label={t('ctaPrimary')}
            >
              {t('ctaPrimary')}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#caso-exito"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-purple-400 font-semibold rounded-lg border-2 border-purple-600 hover:bg-gray-700 transition-all duration-200"
              aria-label={t('ctaSecondary')}
            >
              {t('ctaSecondary')}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
