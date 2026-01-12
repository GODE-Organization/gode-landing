# GODE Devs - Landing Page

Landing page profesional para GODE Devs, especialistas en automatización inteligente y soluciones fintech.

## 🚀 Características

- **Diseño Moderno y Responsive**: Optimizado para todos los dispositivos
- **Next.js 14**: Framework React de última generación
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Estilos modernos y personalizables
- **SEO Optimizado**: Meta tags y estructura semántica
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos

## 📋 Estructura del Proyecto

```
├── app/
│   ├── globals.css       # Estilos globales
│   ├── layout.tsx        # Layout principal con metadata
│   └── page.tsx          # Página principal
├── components/
│   ├── Navigation.tsx    # Navegación principal
│   ├── Hero.tsx          # Sección hero
│   ├── AboutUs.tsx       # Quiénes somos
│   ├── OurFocus.tsx      # Nuestro foco de especialización
│   ├── SuccessCase.tsx   # Caso de éxito
│   ├── WhyChooseUs.tsx   # Por qué elegirnos
│   ├── OurTeam.tsx       # Equipo fundador
│   ├── ContactSection.tsx # Formulario de contacto
│   └── Footer.tsx        # Footer
└── public/               # Archivos estáticos
```

## 🛠️ Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📝 Configuración

### Variables de Entorno

Crea un archivo `.env.local` si necesitas configurar variables de entorno:

```env
# Ejemplo de variables de entorno
NEXT_PUBLIC_SITE_URL=https://gode-landing.vercel.app
```

### Personalización

- **Colores**: Edita `tailwind.config.js` para cambiar la paleta de colores
- **Contenido**: Actualiza los textos en cada componente según tus necesidades
- **Formulario**: Configura el endpoint del formulario en `ContactSection.tsx`

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. Despliega con un clic

### Otros Proveedores

El proyecto puede ser desplegado en cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📧 Información de Contacto

- **Email**: gode.devs@gmail.com
- **Teléfono**: +58 (426) 488 8167
- **Instagram**: @gode.devs

## 📄 Licencia

Este proyecto es propiedad de GODE Devs.

## 👥 Equipo

- Especialista Backend
- Especialista Frontend
- Especialista FullStack
- Especialista QA

---

Desarrollado con ❤️ por GODE Devs