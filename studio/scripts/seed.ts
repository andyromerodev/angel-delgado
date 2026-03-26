import {getCliClient} from 'sanity/cli'

const client = getCliClient({
  apiVersion: '2025-02-19',
})

const docs = [
  {
    _id: 'landingPage',
    _type: 'landingPage',
    siteTitle: 'Erislaine Studio',
    siteDescription: 'Consultoría y ejecución digital para marcas de servicios.',
    heroTitle: 'Convierte tu sitio en una máquina de oportunidades comerciales.',
    heroSubtitle:
      'Diseñamos funnels, contenido y sistemas editoriales para que tu negocio escale con claridad.',
    heroCtaText: 'Solicitar diagnóstico',
    heroCtaLink: 'https://wa.me/5351234567',
    heroSecondaryCtaText: 'Ver artículos',
    heroSecondaryCtaLink: '/blog',
    services: [
      {
        _key: 'service-1',
        title: 'Estrategia de adquisición',
        description: 'Plan de canales y mensajes para atraer leads cualificados con menor costo por adquisición.',
        iconName: 'target',
      },
      {
        _key: 'service-2',
        title: 'Diseño de landing pages',
        description: 'Páginas rápidas, persuasivas y optimizadas para convertir tráfico en contactos reales.',
        iconName: 'layout',
      },
      {
        _key: 'service-3',
        title: 'Automatización de contenidos',
        description: 'Sistema editorial en Sanity para publicar y actualizar contenido sin depender de desarrollo.',
        iconName: 'sparkles',
      },
    ],
    benefits: [
      {
        _key: 'benefit-1',
        title: 'Velocidad real',
        description: 'Arquitectura Astro + Sanity para tiempos de carga mínimos y mejor percepción de marca.',
      },
      {
        _key: 'benefit-2',
        title: 'Autonomía del cliente',
        description: 'Tu equipo puede crear y editar páginas y posts desde Studio sin tocar código.',
      },
      {
        _key: 'benefit-3',
        title: 'Escalable',
        description: 'Base técnica sólida para crecer a nuevas secciones, idiomas o campañas.',
      },
    ],
    testimonials: [
      {
        _key: 'testimonial-1',
        name: 'María Gálvez',
        role: 'CEO, Nova Legal',
        quote: 'Duplicamos solicitudes de contacto en 8 semanas con una landing clara y contenido útil.',
      },
      {
        _key: 'testimonial-2',
        name: 'Raúl Díaz',
        role: 'Director Comercial, FinFlow',
        quote: 'El panel es simple. Nuestro equipo de marketing publica sin depender de GitHub.',
      },
    ],
    faq: [
      {
        _key: 'faq-1',
        question: '¿Puedo editar la landing sin programar?',
        answer: 'Sí. Todos los bloques principales se editan desde Sanity Studio.',
      },
      {
        _key: 'faq-2',
        question: '¿Cómo se publica un nuevo post?',
        answer: 'Creas el post en Studio, completas los campos obligatorios y pulsas Publish.',
      },
      {
        _key: 'faq-3',
        question: '¿Está optimizado para SEO?',
        answer: 'Sí. Incluye title, description, canonical, Open Graph y Twitter cards.',
      },
    ],
    contactWhatsApp: 'https://wa.me/5351234567',
    contactEmail: 'hola@erislaine.com',
    footerText: 'Erislaine Studio · Estrategia, diseño y contenido para negocios de servicios.',
    seoTitle: 'Erislaine Studio | Landing pages y contenido que convierten',
    seoDescription:
      'Consultoría digital y ejecución en Astro + Sanity para convertir visitas en oportunidades reales.',
  },
  {
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: 'Erislaine Studio',
    defaultSeoTitle: 'Erislaine Studio',
    defaultSeoDescription:
      'Landing page y blog administrable en Sanity para marcas que quieren crecer con estructura.',
  },
  {
    _id: 'author-ana-campos',
    _type: 'author',
    name: 'Ana Campos',
    slug: {current: 'ana-campos', _type: 'slug'},
    role: 'Content Strategist',
    bio: 'Especialista en estrategia editorial y funnels de contenido para servicios B2B.',
  },
  {
    _id: 'author-daniel-lopez',
    _type: 'author',
    name: 'Daniel López',
    slug: {current: 'daniel-lopez', _type: 'slug'},
    role: 'Growth Consultant',
    bio: 'Consultor de crecimiento enfocado en CRO, SEO técnico y automatización de marketing.',
  },
  {
    _id: 'category-estrategia-digital',
    _type: 'category',
    title: 'Estrategia digital',
    slug: {current: 'estrategia-digital', _type: 'slug'},
    description: 'Planificación de adquisición, posicionamiento y comunicación digital.',
  },
  {
    _id: 'category-contenido-seo',
    _type: 'category',
    title: 'Contenido y SEO',
    slug: {current: 'contenido-seo', _type: 'slug'},
    description: 'Buenas prácticas para crear contenido que atrae tráfico cualificado.',
  },
  {
    _id: 'post-landing-conversion',
    _type: 'post',
    title: 'Checklist de una landing page que sí convierte',
    slug: {current: 'checklist-landing-page-convierte', _type: 'slug'},
    excerpt: 'Una guía práctica para revisar mensaje, estructura y confianza antes de publicar.',
    publishedAt: '2026-02-10T10:00:00.000Z',
    author: {_type: 'reference', _ref: 'author-ana-campos'},
    category: {_type: 'reference', _ref: 'category-estrategia-digital'},
    tags: ['landing page', 'conversión', 'ux'],
    isDraft: false,
    seoTitle: 'Checklist de Landing Pages que Convierten',
    seoDescription: 'Revisa estos puntos clave para mejorar conversiones sin rediseñar todo tu sitio.',
    body: [
      {
        _key: 'p1',
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [{_key: 'p1c1', _type: 'span', text: 'Una landing efectiva reduce fricción y orienta al usuario a una sola acción.', marks: []}],
      },
      {
        _key: 'p2',
        _type: 'block',
        style: 'h2',
        markDefs: [],
        children: [{_key: 'p2c1', _type: 'span', text: 'Elementos mínimos recomendados', marks: []}],
      },
      {
        _key: 'p3',
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [{_key: 'p3c1', _type: 'span', text: 'Titular claro, propuesta de valor, prueba social y CTA visible.', marks: []}],
      },
    ],
  },
  {
    _id: 'post-plan-editorial',
    _type: 'post',
    title: 'Cómo crear un plan editorial en Sanity para un equipo pequeño',
    slug: {current: 'plan-editorial-sanity-equipo-pequeno', _type: 'slug'},
    excerpt: 'Modelo simple para planificar publicaciones semanales sin perder consistencia.',
    publishedAt: '2026-01-24T10:00:00.000Z',
    author: {_type: 'reference', _ref: 'author-daniel-lopez'},
    category: {_type: 'reference', _ref: 'category-contenido-seo'},
    tags: ['sanity', 'editorial', 'contenido'],
    isDraft: false,
    body: [
      {
        _key: 'q1',
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [{_key: 'q1c1', _type: 'span', text: 'Cuando el proceso editorial es claro, publicar deja de ser una tarea reactiva.', marks: []}],
      },
      {
        _key: 'q2',
        _type: 'block',
        style: 'blockquote',
        markDefs: [],
        children: [{_key: 'q2c1', _type: 'span', text: 'Define temas, responsable y fecha de publicación en un solo flujo.', marks: []}],
      },
    ],
  },
  {
    _id: 'post-seo-tecnico-astro',
    _type: 'post',
    title: 'SEO técnico en Astro: fundamentos para sitios de servicios',
    slug: {current: 'seo-tecnico-astro-fundamentos', _type: 'slug'},
    excerpt: 'Qué revisar en metadata, estructura y rendimiento para posicionar mejor.',
    publishedAt: '2025-12-18T10:00:00.000Z',
    author: {_type: 'reference', _ref: 'author-ana-campos'},
    category: {_type: 'reference', _ref: 'category-contenido-seo'},
    tags: ['seo', 'astro', 'performance'],
    isDraft: false,
    body: [
      {
        _key: 'r1',
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [{_key: 'r1c1', _type: 'span', text: 'Astro ofrece una base excelente de performance; la clave está en cuidar metadata y contenido.', marks: []}],
      },
      {
        _key: 'r2',
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [{_key: 'r2c1', _type: 'span', text: 'Asegura títulos únicos, descripciones útiles y enlazado interno entre servicios y artículos.', marks: []}],
      },
    ],
  },
]

async function seed() {
  for (const doc of docs) {
    await client.createOrReplace(doc)
  }

  console.log(`Seed finalizado: ${docs.length} documentos listos.`)
}

seed().catch((error) => {
  console.error('Error ejecutando seed:', error)
  process.exit(1)
})
