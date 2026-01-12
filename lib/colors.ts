/**
 * GODE Devs - Paleta de Colores
 * Este archivo centraliza todos los colores utilizados en la aplicación
 */

export const colors = {
  // Colores principales de la marca
  brand: {
    primary: "#74279e", // Morado principal
    secondary: "#8e40d8", // Morado secundario/claro
    accent: "#a855f7", // Morado acento
    dark: "#4c1d95", // Morado oscuro
    darkest: "#1e1b1b", // Casi negro con tinte morado
  },

  // Colores base
  base: {
    black: "#000000",
    white: "#FFFFFF",
    gray: "#1a1a1a", // Fondo oscuro principal
  },

  // Estados y mensajes
  status: {
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
    info: "#3b82f6",
    default: "#6b7280",
  },

  // Escala de grises para texto e interfaces
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
};

// Configuración para tailwind
export const tailwindColors = {
  // Colores de la marca
  "brand-primary": colors.brand.primary,
  "brand-secondary": colors.brand.secondary,
  "brand-accent": colors.brand.accent,
  "brand-dark": colors.brand.dark,
  "brand-darkest": colors.brand.darkest,

  // Colores base
  "base-black": colors.base.black,
  "base-white": colors.base.white,
  "base-gray": colors.base.gray,

  // Colores de estado
  "status-success": colors.status.success,
  "status-error": colors.status.error,
  "status-warning": colors.status.warning,
  "status-info": colors.status.info,
  "status-default": colors.status.default,

  // Grises
  "gray-50": colors.gray[50],
  "gray-100": colors.gray[100],
  "gray-200": colors.gray[200],
  "gray-300": colors.gray[300],
  "gray-400": colors.gray[400],
  "gray-500": colors.gray[500],
  "gray-600": colors.gray[600],
  "gray-700": colors.gray[700],
  "gray-800": colors.gray[800],
  "gray-900": colors.gray[900],
};

export default colors;