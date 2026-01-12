'use client'

import { Mail, Phone, Clock, Instagram, CheckCircle2 } from 'lucide-react'
import CalEmbed from './CalEmbed'

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Agenda tu Consulta Estratégica
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Tienes una idea brillante? Selecciona un horario y conversemos sobre cómo podemos convertirla en realidad
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Información de Contacto
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Estamos aquí para ayudarte a materializar tus ideas. Contáctanos a través de cualquiera 
              de estos canales y te responderemos lo antes posible.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-900/40 border border-purple-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <a href="mailto:gode.devs@gmail.com" className="text-purple-400 hover:text-purple-300 hover:underline transition-colors">
                    gode.devs@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-900/40 border border-purple-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Teléfono</h4>
                  <a href="tel:+584264888167" className="text-purple-400 hover:text-purple-300 hover:underline transition-colors">
                    +58 (426) 488 8167
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-900/40 border border-purple-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Horario de Atención</h4>
                  <p className="text-gray-300">Lun - Vie: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-900/40 border border-purple-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Síguenos</h4>
                  <a
                    href="https://instagram.com/gode.devs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 hover:underline transition-colors"
                  >
                    @gode.devs
                  </a>
                </div>
              </div>
            </div>

            {/* Qué incluye la consulta */}
            <div className="mt-8 bg-gray-800/50 border border-purple-900/50 p-6 rounded-xl backdrop-blur-sm">
              <h4 className="font-semibold text-white mb-4">¿Qué incluye la consulta?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Análisis detallado de tu proyecto</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Propuesta técnica personalizada</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Estimación de tiempos y costos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Roadmap de desarrollo</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cal.com Embed */}
          <div className="bg-gray-800/30 border border-gray-700/50 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">
              Selecciona tu Horario
            </h3>
            <p className="text-gray-300 mb-6 text-sm">
              Elige la fecha y hora que mejor se ajuste a tu disponibilidad. Recibirás una confirmación por email.
            </p>
            
            <div className="bg-white rounded-lg min-h-[600px]">
              <CalEmbed />
            </div>

            <p className="text-gray-400 text-xs mt-4 text-center">
              Powered by{' '}
              <a
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                Cal.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}