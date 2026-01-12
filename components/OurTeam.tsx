import { Code, Palette, Database, TestTube } from 'lucide-react'

export default function OurTeam() {
  const teamMembers = [
    {
      name: 'Especialista Backend',
      role: 'Ingeniero Backend',
      specialization: 'Arquitecturas robustas y APIs escalables',
      icon: Database,
      color: 'primary',
    },
    {
      name: 'Especialista Frontend',
      role: 'Ingeniero Frontend',
      specialization: 'Interfaces modernas y experiencias de usuario excepcionales',
      icon: Palette,
      color: 'blue',
    },
    {
      name: 'Especialista FullStack',
      role: 'Ingeniero FullStack',
      specialization: 'Soluciones end-to-end integradas',
      icon: Code,
      color: 'green',
    },
    {
      name: 'Especialista QA',
      role: 'Aseguramiento de Calidad',
      specialization: 'Testing y garantía de calidad en cada entrega',
      icon: TestTube,
      color: 'purple',
    },
  ]

  const getColorClasses = () => {
    return {
      bg: 'bg-purple-900/40',
      text: 'text-purple-400',
      border: 'border-purple-700/50',
    }
  }

  return (
    <section id="equipo" className="py-20 md:py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestro Equipo Fundador
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cuatro ingenieros especializados trabajando juntos para entregar soluciones tecnológicas de excelencia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => {
            const colors = getColorClasses()
            return (
              <div
                key={index}
                className="bg-gray-800/50 border-2 border-gray-700 hover:border-purple-600 hover:shadow-xl hover:shadow-purple-900/20 p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 text-center backdrop-blur-sm"
              >
                <div className={`w-20 h-20 ${colors.bg} ${colors.border} rounded-full flex items-center justify-center mx-auto mb-4 border-2 backdrop-blur-sm`}>
                  <member.icon className={`w-10 h-10 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.specialization}</p>
              </div>
            )
          })}
        </div>

        {/* Team Values */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white shadow-xl shadow-purple-900/50">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Nuestro Compromiso como Equipo
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1 Año</div>
              <p className="text-purple-100">
                Trabajando juntos como equipo fundador
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-purple-100">
                Dedicación a cada proyecto que emprendemos
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4</div>
              <p className="text-purple-100">
                Especialidades técnicas que se complementan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}