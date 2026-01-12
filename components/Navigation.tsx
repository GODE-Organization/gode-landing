'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Quiénes Somos', href: '#quienes-somos' },
    { name: 'Nuestro Foco', href: '#nuestro-foco' },
    { name: 'Caso de Éxito', href: '#caso-exito' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Contacto', href: '#contacto' },
  ]

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
          <div className="hidden md:flex md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-purple-400 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          <a
            href="#contacto"
            className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-md shadow-purple-900/50 hover:shadow-lg"
          >
            Agendar Consulta
          </a>

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
            <a
              href="#contacto"
              className="block px-3 py-2 mt-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-md text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}