'use client'

import { MapPin, Award, Users } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function AboutUs() {
  const t = useTranslations('AboutUs')
  
  return (
    <section id="quienes-somos" className="py-20 md:py-32 bg-gray-900">
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

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {t('heading')}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t.rich('description1', {
                location: () => <strong className="text-purple-400">{t('location')}</strong>,
                engineers: () => <strong className="text-purple-400">{t('engineers')}</strong>,
              })}
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t.rich('description2', {
                partner: () => <strong className="text-purple-400">{t('partner')}</strong>,
              })}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t('description3')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-purple-900/20 border border-purple-700/50 p-6 rounded-xl backdrop-blur-sm">
              <Users className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">{t('engineersCount')}</h4>
              <p className="text-gray-300 text-sm">
                {t('engineersDesc')}
              </p>
            </div>

            <div className="bg-purple-900/20 border border-purple-700/50 p-6 rounded-xl backdrop-blur-sm">
              <Award className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">{t('year')}</h4>
              <p className="text-gray-300 text-sm">
                {t('yearDesc')}
              </p>
            </div>

            <div className="bg-purple-900/20 border border-purple-700/50 p-6 rounded-xl backdrop-blur-sm">
              <MapPin className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">{t('locationLabel')}</h4>
              <p className="text-gray-300 text-sm">
                {t('locationDesc')}
              </p>
            </div>

            <div className="bg-purple-900/20 border border-purple-700/50 p-6 rounded-xl backdrop-blur-sm">
              <Award className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">{t('experience')}</h4>
              <p className="text-gray-300 text-sm">
                {t('experienceDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Credenciales */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white shadow-xl shadow-purple-900/50">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            {t('credentials')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-3">{t('academic')}</h4>
              <p className="text-purple-100 leading-relaxed">
                {t.rich('academicDesc', {
                  unimar: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">{t('fintech')}</h4>
              <p className="text-purple-100 leading-relaxed">
                {t.rich('fintechDesc', {
                  fintechSolutions: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
