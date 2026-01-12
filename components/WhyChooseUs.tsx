import { 
  Users, 
  Target, 
  MessageSquare, 
  Clock, 
  Shield, 
  TrendingUp,
  Code,
  Zap,
  DollarSign
} from 'lucide-react'

const colors = {
  primary: 'bg-purple-900/20 border-purple-700/50 text-purple-400',
  blue: 'bg-purple-900/20 border-purple-700/50 text-purple-400',
  green: 'bg-purple-900/20 border-purple-700/50 text-purple-400',
  purple: 'bg-purple-900/20 border-purple-700/50 text-purple-400',
  orange: 'bg-purple-900/20 border-purple-700/50 text-purple-400',
  red: 'bg-purple-900/20 border-purple-700/50 text-purple-400',
  teal: 'bg-purple-900/20 border-purple-700/50 text-purple-400',
  pink: 'bg-purple-900/20 border-purple-700/50 text-purple-400',
}

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: 'Equipo Fundador Especializado',
      description: 'Cuatro ingenieros de sistemas con especializaciones técnicas profundas: Backend, Frontend, FullStack y Aseguramiento de Calidad (QA). Cada miembro aporta experiencia única al proyecto.',
      color: 'primary',
    },
    {
      icon: Target,
      title: 'Soluciones a Medida',
      description: 'No vendemos productos genéricos. Cada solución está diseñada específicamente para las necesidades de tu organización, traduciendo la complejidad técnica en ventaja competitiva.',
      color: 'blue',
    },
    {
      icon: MessageSquare,
      title: 'Experiencia en IA Conversacional',
      description: 'Especialización probada en desarrollo de asistentes virtuales y chatbots avanzados con Inteligencia Artificial, integrando Procesamiento de Lenguaje Natural (PLN).',
      color: 'green',
    },
    {
      icon: DollarSign,
      title: 'Conocimiento Fintech',
      description: 'Experiencia en desarrollo de soluciones financieras internacionales, billeteras virtuales, trazabilidad de activos y manejo de datos financieros en Colombia y otros países.',
      color: 'purple',
    },
    {
      icon: Clock,
      title: 'Disponibilidad 24/7',
      description: 'Garantía de disponibilidad operativa continua para tus sistemas automatizados, mejorando la experiencia del cliente y maximizando oportunidades de venta.',
      color: 'orange',
    },
    {
      icon: Shield,
      title: 'Transparencia y Comunicación',
      description: 'Comunicación transparente y continua en cada etapa del proyecto. Sabrás exactamente qué está pasando y cuándo, sin sorpresas ni costos ocultos.',
      color: 'red',
    },
    {
      icon: TrendingUp,
      title: 'Optimización de Procesos',
      description: 'Reducción potencial del tiempo de dedicación del personal a tareas operativas rutinarias mediante automatización inteligente, permitiéndote enfocarte en lo que realmente importa.',
      color: 'teal',
    },
    {
      icon: Zap,
      title: 'Soporte Post-Lanzamiento',
      description: 'No nos despedimos después de la entrega. Ofrecemos soporte técnico continuo y mejoras iterativas para asegurar que tu solución siga evolucionando.',
      color: 'pink',
    },
  ]

  const getColorClasses = (color: string) => {
    return colors[color as keyof typeof colors] || colors.primary
  }

  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Por Qué Elegir GODE Devs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Somos más que desarrolladores. Somos tu socio tecnológico para la transformación digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border-2 border-gray-800 hover:border-purple-600 hover:shadow-xl hover:shadow-purple-900/20 p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${getColorClasses(reason.color)} rounded-lg flex items-center justify-center mb-4 border-2 backdrop-blur-sm`}>
                <reason.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white shadow-xl shadow-purple-900/50">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para Transformar tu Negocio?
            </h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Agenda una consulta estratégica gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Agendar Consulta Estratégica
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}