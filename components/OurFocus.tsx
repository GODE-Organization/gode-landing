import { 
  MessageSquare, 
  Clock, 
  TrendingUp, 
  DollarSign, 
  Shield, 
  Zap,
  Globe,
  Code
} from 'lucide-react'

export default function OurFocus() {
  const iaFeatures = [
    {
      icon: MessageSquare,
      title: 'Chatbots Avanzados con IA',
      description: 'Asistentes virtuales con Procesamiento de Lenguaje Natural (PLN) para comprensión avanzada de la intención del usuario.',
    },
    {
      icon: Clock,
      title: 'Disponibilidad 24/7',
      description: 'Garantía de disponibilidad operativa continua, mejorando la experiencia del cliente y maximizando oportunidades de venta.',
    },
    {
      icon: TrendingUp,
      title: 'Optimización de Procesos',
      description: 'Reducción del tiempo de dedicación del personal a tareas operativas rutinarias mediante automatización inteligente.',
    },
    {
      icon: Zap,
      title: 'Escalabilidad Automática',
      description: 'Soluciones que escalan tus operaciones sin incrementar costos operativos proporcionalmente.',
    },
  ]

  const fintechFeatures = [
    {
      icon: DollarSign,
      title: 'Movimientos Transaccionales',
      description: 'Diseño y modelado de soluciones financieras internacionales principalmente en Colombia y otros países.',
    },
    {
      icon: Globe,
      title: 'Fondos Digitales y Criptos',
      description: 'Permitiendo el acceso a fondos digitales y criptos de maneras simplificadas y seguras.',
    },
    {
      icon: Shield,
      title: 'Trazabilidad de Activos',
      description: 'Sistemas robustos para el seguimiento y control de activos financieros en tiempo real.',
    },
    {
      icon: Code,
      title: 'APIs y Backend Robusto',
      description: 'Arquitecturas escalables y APIs seguras para aplicaciones financieras de alto rendimiento.',
    },
  ]

  return (
    <section id="nuestro-foco" className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestro Foco de Especialización
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nos especializamos en dos áreas clave que transforman la manera en que las empresas operan y crecen
          </p>
        </div>

        {/* Inteligencia Conversacional */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-900/40 border border-purple-700/50 text-purple-300 rounded-full mb-6 backdrop-blur-sm">
              <MessageSquare className="w-6 h-6" />
              <h3 className="text-2xl md:text-3xl font-bold">Inteligencia Conversacional a la Medida</h3>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Desarrollamos asistentes virtuales y chatbots avanzados con Inteligencia Artificial (IA), 
              diseñados para solucionar eficientemente la necesidad de atención al cliente automatizada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {iaFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-900/20 p-6 rounded-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-900/40 border border-purple-700/50 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soluciones Fintech */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-900/40 border border-purple-700/50 text-purple-300 rounded-full mb-6 backdrop-blur-sm">
              <DollarSign className="w-6 h-6" />
              <h3 className="text-2xl md:text-3xl font-bold">Soluciones Fintech Internacionales</h3>
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Diseñamos y modelamos soluciones financieras internacionales con movimientos transaccionales 
              principalmente en Colombia y otros países. Permitiendo el acceso a fondos digitales y criptos de manera simplificada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fintechFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 hover:border-purple-600 hover:shadow-lg hover:shadow-purple-900/20 p-6 rounded-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-900/40 border border-purple-700/50 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}