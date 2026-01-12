'use client'

import { Code, Palette, Database, TestTube } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function OurTeam() {
  const t = useTranslations('OurTeam')
  
  const teamMembers = [
    {
      nameKey: 'backend.name',
      roleKey: 'backend.role',
      specializationKey: 'backend.specialization',
      icon: Database,
    },
    {
      nameKey: 'frontend.name',
      roleKey: 'frontend.role',
      specializationKey: 'frontend.specialization',
      icon: Palette,
    },
    {
      nameKey: 'fullstack.name',
      roleKey: 'fullstack.role',
      specializationKey: 'fullstack.specialization',
      icon: Code,
    },
    {
      nameKey: 'qa.name',
      roleKey: 'qa.role',
      specializationKey: 'qa.specialization',
      icon: TestTube,
    },
  ]

  const getColorClasses = () => {
    return {
      bg: 'bg-purple-900/40',
      text: 'text-purple-400',
      border: 'border-purple-700/50',
    }
  }

  return (
    <section id="equipo" className="py-20 md:py-32 bg-gray-900">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => {
            const colors = getColorClasses()
            return (
              <div
                key={index}
                className="bg-gray-800/50 border-2 border-gray-700 hover:border-purple-600 hover:shadow-xl hover:shadow-purple-900/20 p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 text-center backdrop-blur-sm"
              >
                <div className={`w-20 h-20 ${colors.bg} ${colors.border} rounded-full flex items-center justify-center mx-auto mb-4 border-2 backdrop-blur-sm`}>
                  <member.icon className={`w-10 h-10 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t(member.nameKey as any)}</h3>
                <p className="text-purple-400 font-semibold mb-3">{t(member.roleKey as any)}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{t(member.specializationKey as any)}</p>
              </div>
            )
          })}
        </div>

        {/* Team Values */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white shadow-xl shadow-purple-900/50">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            {t('commitment')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{t('year')}</div>
              <p className="text-purple-100">{t('yearDesc')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{t('dedication')}</div>
              <p className="text-purple-100">{t('dedicationDesc')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{t('specialties')}</div>
              <p className="text-purple-100">{t('specialtiesDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
