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

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      primary: {
        bg: 'bg-primary-100',
        text: 'text-primary-600',
        border: 'border-primary-200',
      },
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        border: 'border-blue-200',
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        border: 'border-green-200',
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        border: 'border-purple-200',
      },
    }
    return colors[color] || colors.primary
  }

  return (
    <section id="equipo" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestro Equipo Fundador
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cuatro ingenieros especializados trabajando juntos para entregar soluciones tecnológicas de excelencia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => {
            const colors = getColorClasses(member.color)
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className={`w-20 h-20 ${colors.bg} ${colors.border} rounded-full flex items-center justify-center mx-auto mb-4 border-2`}>
                  <member.icon className={`w-10 h-10 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.specialization}</p>
              </div>
            )
          })}
        </div>

        {/* Team Values */}
        <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Nuestro Compromiso como Equipo
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1 Año</div>
              <p className="text-primary-100">
                Trabajando juntos como equipo fundador
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-primary-100">
                Dedicación a cada proyecto que emprendemos
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4</div>
              <p className="text-primary-100">
                Especialidades técnicas que se complementan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}