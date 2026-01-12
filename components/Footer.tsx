import { Mail, Phone, Clock, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">GODE Devs</h3>
            <p className="mb-4 leading-relaxed">
              Transformamos ideas en software excepcional. Somos tu socio tecnológico para el éxito digital.
            </p>
            <p className="text-sm text-gray-400">
              Especialistas en automatización inteligente y soluciones fintech a la medida.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Especialidades</h4>
            <ul className="space-y-2">
              <li>
                <a href="#nuestro-foco" className="hover:text-white transition-colors">
                  Inteligencia Conversacional
                </a>
              </li>
              <li>
                <a href="#nuestro-foco" className="hover:text-white transition-colors">
                  Soluciones Fintech
                </a>
              </li>
              <li>
                <a href="#quienes-somos" className="hover:text-white transition-colors">
                  Desarrollo a Medida
                </a>
              </li>
              <li>
                <a href="#equipo" className="hover:text-white transition-colors">
                  Consultoría Tech
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:gode.devs@gmail.com" className="hover:text-white transition-colors">
                  gode.devs@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+584264888167" className="hover:text-white transition-colors">
                  +58 (426) 488 8167
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>Lun - Vie: 9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-start gap-2">
                <Instagram className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <a
                  href="https://instagram.com/gode.devs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
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
            © {new Date().getFullYear()} GODE Devs. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#inicio" className="hover:text-white transition-colors">
              Inicio
            </a>
            <a href="#quienes-somos" className="hover:text-white transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="hover:text-white transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}