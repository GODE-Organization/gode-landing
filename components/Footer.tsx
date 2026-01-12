'use client'

import { Mail, Phone, Clock, Instagram } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">GODE Devs</h3>
            <p className="mb-4 leading-relaxed">
              {t('description')}
            </p>
            <p className="text-sm text-gray-400">
              {t('tagline')}
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('specialties')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#nuestro-foco" className="hover:text-purple-400 transition-colors">
                  {t('conversational')}
                </a>
              </li>
              <li>
                <a href="#nuestro-foco" className="hover:text-purple-400 transition-colors">
                  {t('fintech')}
                </a>
              </li>
              <li>
                <a href="#quienes-somos" className="hover:text-purple-400 transition-colors">
                  {t('custom')}
                </a>
              </li>
              <li>
                <a href="#equipo" className="hover:text-purple-400 transition-colors">
                  {t('consulting')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:gode.devs@gmail.com" className="hover:text-purple-400 transition-colors">
                  gode.devs@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+584264888167" className="hover:text-purple-400 transition-colors">
                  +58 (426) 488 8167
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>Lun - Vie: 9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-start gap-2">
                <Instagram className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <a
                  href="https://instagram.com/gode.devs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  @gode.devs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} GODE Devs. {t('rights')}
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#inicio" className="hover:text-purple-400 transition-colors">
              {t('home')}
            </a>
            <a href="#quienes-somos" className="hover:text-purple-400 transition-colors">
              {t('about')}
            </a>
            <a href="#contacto" className="hover:text-purple-400 transition-colors">
              {t('contact')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
