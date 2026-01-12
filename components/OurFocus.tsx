'use client'

import { 
  MessageSquare, 
  Clock, 
  TrendingUp, 
  DollarSign, 
  Shield, 
  Zap,
  Globe,
  Code
} from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function OurFocus() {
  const t = useTranslations('OurFocus')
  
  const iaFeatures = [
    {
      icon: MessageSquare,
      titleKey: 'ia.chatbots.title',
      descKey: 'ia.chatbots.desc',
    },
    {
      icon: Clock,
      titleKey: 'ia.availability.title',
      descKey: 'ia.availability.desc',
    },
    {
      icon: TrendingUp,
      titleKey: 'ia.optimization.title',
      descKey: 'ia.optimization.desc',
    },
    {
      icon: Zap,
      titleKey: 'ia.scalability.title',
      descKey: 'ia.scalability.desc',
    },
  ]

  const fintechFeatures = [
    {
      icon: DollarSign,
      titleKey: 'fintech.transactions.title',
      descKey: 'fintech.transactions.desc',
    },
    {
      icon: Globe,
      titleKey: 'fintech.digital.title',
      descKey: 'fintech.digital.desc',
    },
    {
      icon: Shield,
      titleKey: 'fintech.tracking.title',
      descKey: 'fintech.tracking.desc',
    },
    {
      icon: Code,
      titleKey: 'fintech.apis.title',
      descKey: 'fintech.apis.desc',
    },
  ]

  return (
    <section id="nuestro-foco" className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Inteligencia Conversacional */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-900/40 border border-purple-700/50 text-purple-300 rounded-full mb-6 backdrop-blur-sm">
              <MessageSquare className="w-6 h-6" />
              <h3 className="text-2xl md:text-3xl font-bold">{t('ia.title')}</h3>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {t('ia.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {iaFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-900/20 p-6 rounded-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-900/40 border border-purple-700/50 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{t(feature.titleKey as any)}</h4>
                <p className="text-gray-300 leading-relaxed">{t(feature.descKey as any)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soluciones Fintech */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-900/40 border border-purple-700/50 text-purple-300 rounded-full mb-6 backdrop-blur-sm">
              <DollarSign className="w-6 h-6" />
              <h3 className="text-2xl md:text-3xl font-bold">{t('fintech.title')}</h3>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {t('fintech.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fintechFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-900/20 p-6 rounded-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-900/40 border border-purple-700/50 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{t(feature.titleKey as any)}</h4>
                <p className="text-gray-300 leading-relaxed">{t(feature.descKey as any)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
