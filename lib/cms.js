// Simulación de Base de Datos / Headless CMS (Strapi, Contentful, Prisma, MongoDB)
export const postsDatabase = [
  {
    id: "1",
    slug: "seo-tecnico-nextjs",
    title: "Guía Avanzada de SEO Técnico en Next.js",
    description: "Aprende a configurar meta tags dinámicos, sitemaps XML y Open Graph para maximizar tu ranking en Google.",
    content: "El SEO técnico en Next.js aprovecha el SSR y SSG para renderizar el HTML completo con meta tags antes de entregarlo a los robots de búsqueda...",
    category: "SEO & Rendimiento",
    lastmod: "2026-11-18",
    author: "Renato Usnayo",
  },
  {
    id: "2",
    slug: "optimizacion-core-web-vitals",
    title: "Optimización de Core Web Vitals con next/image y Fuentes",
    description: "Reduce el Cumulative Layout Shift (CLS) a 0 y mejora el LCP usando componentes optimizados en Next.js.",
    content: "Las métricas Core Web Vitals son esenciales para el algoritmo de Google. El componente next/image convierte formatos pesados a WebP...",
    category: "Performance Web",
    lastmod: "2026-11-17",
    author: "Equipo de Desarrollo",
  },
  {
    id: "3",
    slug: "lazy-loading-code-splitting",
    title: "Estrategias de Lazy Loading y Code Splitting Dinámico",
    description: "Descubre cómo acelerar la carga inicial difiriendo componentes pesados con next/dynamic y ssr: false.",
    content: "Diferir la carga de componentes pesados como librerías de gráficos o editores enriquece la velocidad de interacción del usuario (INP)...",
    category: "Arquitectura Frontend",
    lastmod: "2026-11-16",
    author: "Ingeniería de Software",
  },
];

export async function getCMSPosts() {
  // Simula consulta asíncrona a la base de datos o CMS
  return postsDatabase;
}

export async function getCMSPostById(id) {
  return postsDatabase.find((p) => p.id === id) || null;
}
