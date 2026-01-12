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
    const colors: Record<string, string> = {
      primary: 'bg-primary-100 text-primary-600 border-primary-200',
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      teal: 'bg-teal-100 text-teal-600 border-teal-200',
      pink: 'bg-pink-100 text-pink-600 border-pink-200',
    }
    return colors[color] || colors.primary
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Por Qué Elegir GODE Devs
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos más que desarrolladores. Somos tu socio tecnológico para la transformación digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-14 h-14 ${getColorClasses(reason.color)} rounded-lg flex items-center justify-center mb-4 border-2`}>
                <reason.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para Transformar tu Negocio?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Agenda una consulta estratégica gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Agendar Consulta Estratégica
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}