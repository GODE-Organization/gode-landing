import { MapPin, Award, Users } from 'lucide-react'

export default function AboutUs() {
  return (
    <section id="quienes-somos" className="py-20 md:py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quiénes Somos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un equipo fundador de ingenieros especializados que transforma ideas en soluciones tecnológicas de alto impacto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              GODE Devs: Ingeniería de Software y Soluciones a Medida
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Somos un servicio de desarrollo tecnológico a medida con sede en <strong className="text-purple-400">Nueva Esparta, Venezuela</strong>. 
              Nuestro valor reside en un equipo fundador compuesto por <strong className="text-purple-400">cuatro ingenieros de sistemas</strong> con 
              especializaciones técnicas profundas.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Nos definimos como un <strong className="text-purple-400">socio tecnológico</strong> enfocado en soluciones a medida, dedicados a 
              traducir la complejidad técnica en una ventaja competitiva cuantificable para nuestros clientes.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Contamos con experiencia en el desarrollo de soluciones de automatización inteligente y activos de 
              propiedad intelectual, incluyendo trabajos para el sector académico (Universidad de Margarita - UNIMAR) 
              y la industria fintech a nivel internacional.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-purple-900/20 border border-purple-700/50 p-6 rounded-xl backdrop-blur-sm">
              <Users className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">4 Ingenieros</h4>
              <p className="text-gray-300 text-sm">
                Equipo fundador especializado: Backend, Frontend, FullStack y QA
              </p>
            </div>

            <div className="bg-purple-900/20 border border-purple-700/50 p-6 rounded-xl backdrop-blur-sm">
              <Award className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">1 Año</h4>
              <p className="text-gray-300 text-sm">
                Trabajando juntos como equipo especializado
              </p>
            </div>

            <div className="bg-purple-900/20 border border-purple-700/50 p-6 rounded-xl backdrop-blur-sm">
              <MapPin className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Nueva Esparta</h4>
              <p className="text-gray-300 text-sm">
                Venezuela - Trabajando para clientes internacionales
              </p>
            </div>

            <div className="bg-purple-900/20 border border-purple-700/50 p-6 rounded-xl backdrop-blur-sm">
              <Award className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Experiencia Real</h4>
              <p className="text-gray-300 text-sm">
                UNIMAR y Fintech en Colombia
              </p>
            </div>
          </div>
        </div>

        {/* Credenciales */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white shadow-xl shadow-purple-900/50">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Nuestras Credenciales
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-3">Sector Académico</h4>
              <p className="text-purple-100 leading-relaxed">
                Hemos desarrollado soluciones para la <strong>Universidad de Margarita (UNIMAR)</strong>, 
                contribuyendo a la transformación digital del sector educativo.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Industria Fintech</h4>
              <p className="text-purple-100 leading-relaxed">
                Experiencia en desarrollo de <strong>billeteras virtuales, trazabilidad de activos y manejo de datos financieros</strong> 
                principalmente en Colombia y otros mercados internacionales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}