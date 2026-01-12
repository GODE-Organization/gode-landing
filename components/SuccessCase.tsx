'use client'

import { CheckCircle2, Target, Users, Zap, TrendingUp } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function SuccessCase() {
  const t = useTranslations('SuccessCase')
  
  return (
    <section id="caso-exito" className="py-20 md:py-32 bg-gray-900">
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
            <div className="inline-block px-4 py-2 bg-purple-900/40 border border-purple-700/50 text-purple-300 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              {t('badge')}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('heading')}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('description1')}
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {t.rich('description2', {
                approach: (chunks) => <strong className="text-purple-400">{chunks}</strong>,
                quality: (chunks) => <strong className="text-purple-400">{chunks}</strong>,
              })}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-1">{t('validated')}</h4>
                  <p className="text-gray-300 text-sm">{t('validatedDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-1">{t('qualityTitle')}</h4>
                  <p className="text-gray-300 text-sm">{t('qualityDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-white mb-1">{t('commitment')}</h4>
                  <p className="text-gray-300 text-sm">{t('commitmentDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white shadow-xl shadow-purple-900/50">
            <h4 className="text-2xl font-bold mb-8 text-center">{t('values')}</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-1">{t('results')}</h5>
                  <p className="text-purple-100 text-sm">{t('resultsDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-1">{t('innovation')}</h5>
                  <p className="text-purple-100 text-sm">{t('innovationDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-1">{t('teamwork')}</h5>
                  <p className="text-purple-100 text-sm">{t('teamworkDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-1">{t('growth')}</h5>
                  <p className="text-purple-100 text-sm">{t('growthDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Métricas Reales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm">
            <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">4</div>
            <div className="text-gray-300 font-medium">{t('metrics.engineers')}</div>
          </div>
          <div className="text-center p-6 bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm">
            <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-gray-300 font-medium">{t('metrics.custom')}</div>
          </div>
          <div className="text-center p-6 bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm">
            <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-300 font-medium">{t('metrics.availability')}</div>
          </div>
          <div className="text-center p-6 bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm">
            <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">1+</div>
            <div className="text-gray-300 font-medium">{t('metrics.experience')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
