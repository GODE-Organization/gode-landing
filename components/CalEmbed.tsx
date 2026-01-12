'use client'

export default function CalEmbed() {
  return (
    <div className="w-full">
      <iframe
        src="https://cal.com/gode.devs/consulta-negocios"
        style={{
          width: '100%',
          height: '700px',
          border: '0',
          borderRadius: '8px',
        }}
        title="Cal.com - Agendar Consulta"
      ></iframe>
    </div>
  )
}