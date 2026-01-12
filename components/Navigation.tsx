'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'
import { routing } from '@/i18n/routing'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const t = useTranslations('Navigation')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('[data-language-menu]')) {
        setIsLanguageMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const navItems = [
    { name: t('home'), href: '#inicio' },
    { name: t('about'), href: '#quienes-somos' },
    { name: t('focus'), href: '#nuestro-foco' },
    { name: t('success'), href: '#caso-exito' },
    { name: t('team'), href: '#equipo' },
    { name: t('contact'), href: '#contacto' },
  ]

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
    setIsLanguageMenuOpen(false)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-purple-900/20'
          : 'bg-gray-900/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="#inicio" className="flex items-center gap-2">
              <Image
                src="/images/logos/gode.svg"
                alt="GODE Devs"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <span className="text-xl md:text-2xl font-bold text-white hidden sm:inline">
                GODE Devs
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-purple-400 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}

            {/* Language Selector Desktop */}
            <div className="relative" data-language-menu>
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 font-medium transition-colors duration-200"
              >
                <Globe className="w-5 h-5" />
                <span className="uppercase">{locale}</span>
              </button>
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
                  {routing.locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => handleLanguageChange(loc)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors ${
                        locale === loc
                          ? 'bg-purple-900/50 text-purple-400'
                          : 'text-gray-300'
                      }`}
                    >
                      {loc === 'es' ? 'Español' : 'English'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-md shadow-purple-900/50 hover:shadow-lg"
            >
              {t('schedule')}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-300 hover:bg-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-purple-400 rounded-md font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Language Selector Mobile */}
            <div className="px-3 py-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 font-medium">Idioma / Language</span>
              </div>
              <div className="flex gap-2">
                {routing.locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => handleLanguageChange(loc)}
                    className={`flex-1 px-3 py-2 text-sm rounded-md font-medium transition-colors ${
                      locale === loc
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {loc === 'es' ? 'ES' : 'EN'}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="#contacto"
              className="block px-3 py-2 mt-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-md text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('schedule')}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
