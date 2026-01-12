'use client'

import { 
  Users, 
  Target, 
  MessageSquare, 
  Clock, 
  Shield, 
  TrendingUp,
  Zap,
  DollarSign
} from 'lucide-react'
import { useTranslations } from 'next-intl'

const colors = {
  primary: 'bg-purple-900/20 border-purple-700/50 text-purple-400',
  blue: 'bg-purple-900/20 border-purple-700/50 text-purple-400',
  green: 'bg-purple-900/20 border-purple-700/50 text-purple-400',
  purple: 'bg-purple-900/20 border-purple-700/50 text-purple-400',
  orange: 'bg-purple-900/20 border-purple-700/50 text-purple-400',
  red: 'bg-purple-900/20 border-purple-700/50 text-purple-400',
  teal: 'bg-purple-900/20 border-purple-700/50 text-purple-400',
  pink: 'bg-purple-900/20 border-purple-700/50 text-purple-400',
}

export default function WhyChooseUs() {
  const t = useTranslations('WhyChooseUs')
  
  const reasons = [
    {
      icon: Users,
      titleKey: 'founders.title',
      descKey: 'founders.desc',
      color: 'primary',
    },
    {
      icon: Target,
      titleKey: 'custom.title',
      descKey: 'custom.desc',
      color: 'blue',
    },
    {
      icon: MessageSquare,
      titleKey: 'ia.title',
      descKey: 'ia.desc',
      color: 'green',
    },
    {
      icon: DollarSign,
      titleKey: 'fintech.title',
      descKey: 'fintech.desc',
      color: 'purple',
    },
    {
      icon: Clock,
      titleKey: 'availability.title',
      descKey: 'availability.desc',
      color: 'orange',
    },
    {
      icon: Shield,
      titleKey: 'transparency.title',
      descKey: 'transparency.desc',
      color: 'red',
    },
    {
      icon: TrendingUp,
      titleKey: 'optimization.title',
      descKey: 'optimization.desc',
      color: 'teal',
    },
    {
      icon: Zap,
      titleKey: 'support.title',
      descKey: 'support.desc',
      color: 'pink',
    },
  ]

  const getColorClasses = (color: string) => {
    return colors[color as keyof typeof colors] || colors.primary
  }

  return (
    <section className="py-20 md:py-32 bg-black">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border-2 border-gray-800 hover:border-purple-600 hover:shadow-xl hover:shadow-purple-900/20 p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${getColorClasses(reason.color)} rounded-lg flex items-center justify-center mb-4 border-2 backdrop-blur-sm`}>
                <reason.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t(reason.titleKey as any)}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{t(reason.descKey as any)}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white shadow-xl shadow-purple-900/50">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {t('cta.title')}
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {t('cta.button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
