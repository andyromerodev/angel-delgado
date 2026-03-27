import {getCliClient} from 'sanity/cli'

const client = getCliClient({
  apiVersion: '2025-02-19',
})

const docs = [
  {
    _id: 'landingPage',
    _type: 'landingPage',
    siteTitle: 'Dra. Erislaine Tamayo',
    siteDescription:
      'Especialista en otorrinolaringología en Tarapoto, Perú. Atención integral de oído, nariz y garganta para niños y adultos.',
    heroTitle: 'Atención otorrinolaringológica profesional y humana en Tarapoto',
    heroSubtitle:
      'La Dra. Erislaine Tamayo brinda evaluación clínica, diagnóstico y tratamiento de enfermedades de oído, nariz y garganta con enfoque personalizado.',
    heroCtaText: 'Agendar por WhatsApp',
    heroCtaLink: 'https://wa.me/51999999999',
    heroSecondaryCtaText: 'Ver blog de salud ORL',
    heroSecondaryCtaLink: '/blog',
    services: [
      {
        _key: 'service-1',
        title: 'Consulta otorrinolaringológica',
        description:
          'Evaluación integral para síntomas como dolor de garganta, congestión nasal, ronquera, zumbidos o disminución auditiva.',
        iconName: 'consulta',
      },
      {
        _key: 'service-2',
        title: 'Lavado de oído y control auditivo',
        description:
          'Manejo de tapones de cerumen, molestias óticas y seguimiento de la salud auditiva con recomendaciones claras.',
        iconName: 'oido',
      },
      {
        _key: 'service-3',
        title: 'Rinitis, sinusitis y alergias',
        description:
          'Tratamiento de obstrucción nasal, estornudos frecuentes y sinusitis para mejorar respiración y calidad de vida.',
        iconName: 'nariz',
      },
    ],
    benefits: [
      {
        _key: 'benefit-1',
        title: 'Diagnóstico preciso',
        description:
          'Se prioriza una evaluación clínica completa para indicar el tratamiento más adecuado desde la primera consulta.',
      },
      {
        _key: 'benefit-2',
        title: 'Explicación clara al paciente',
        description:
          'Cada diagnóstico y tratamiento se explica en lenguaje simple para que el paciente entienda cada paso.',
      },
      {
        _key: 'benefit-3',
        title: 'Atención cercana en Tarapoto',
        description:
          'Seguimiento responsable y trato humano para pacientes pediátricos y adultos de Tarapoto y alrededores.',
      },
    ],
    testimonials: [
      {
        _key: 'testimonial-1',
        name: 'Rosa M.',
        role: 'Paciente',
        quote:
          'Me explicó con mucha paciencia mi problema de sinusitis y mejoré rápidamente con su tratamiento.',
      },
      {
        _key: 'testimonial-2',
        name: 'Carlos V.',
        role: 'Paciente',
        quote: 'Excelente atención. El procedimiento de limpieza de oído fue rápido y sin dolor.',
      },
    ],
    faq: [
      {
        _key: 'faq-1',
        question: '¿Atienden niños y adultos?',
        answer: 'Sí, la consulta está orientada a pacientes pediátricos y adultos con enfermedades ORL.',
      },
      {
        _key: 'faq-2',
        question: '¿Cómo agendo una cita?',
        answer: 'Puedes agendar directamente por WhatsApp usando el botón principal de la página.',
      },
      {
        _key: 'faq-3',
        question: '¿Qué síntomas requieren consulta ORL?',
        answer:
          'Dolor de oído, pérdida auditiva, congestión nasal persistente, sinusitis, ronquera o dolor de garganta recurrente.',
      },
    ],
    contactWhatsApp: 'https://wa.me/51999999999',
    contactEmail: 'contacto@draerislaine.com',
    footerText: 'Dra. Erislaine Tamayo · Otorrinolaringología en Tarapoto, Perú',
    seoTitle: 'Dra. Erislaine Tamayo | Otorrinolaringología en Tarapoto',
    seoDescription:
      'Consulta de otorrinolaringología en Tarapoto, Perú. Atención profesional para oído, nariz y garganta con enfoque personalizado.',
  },
  {
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: 'Dra. Erislaine Tamayo',
    defaultSeoTitle: 'Dra. Erislaine Tamayo | Otorrinolaringología',
    defaultSeoDescription:
      'Consulta de otorrinolaringología en Tarapoto, Perú. Atención de oído, nariz y garganta para niños y adultos.',
  },
  {
    _id: 'author-ana-campos',
    _type: 'author',
    name: 'Dra. Erislaine Tamayo',
    slug: {current: 'dra-erislaine-tamayo', _type: 'slug'},
    role: 'Médico Otorrinolaringóloga',
    bio: 'Especialista en diagnóstico y tratamiento de enfermedades de oído, nariz y garganta en Tarapoto, Perú.',
  },
  {
    _id: 'author-daniel-lopez',
    _type: 'author',
    name: 'Equipo ORL Tarapoto',
    slug: {current: 'equipo-orl-tarapoto', _type: 'slug'},
    role: 'Contenido de salud ORL',
    bio: 'Contenido educativo validado para orientar a pacientes sobre prevención y cuidado otorrinolaringológico.',
  },
  {
    _id: 'category-estrategia-digital',
    _type: 'category',
    title: 'Salud de oído',
    slug: {current: 'salud-de-oido', _type: 'slug'},
    description: 'Información sobre audición, cerumen, zumbidos y cuidado del oído.',
  },
  {
    _id: 'category-contenido-seo',
    _type: 'category',
    title: 'Nariz y garganta',
    slug: {current: 'nariz-y-garganta', _type: 'slug'},
    description: 'Guías sobre rinitis, sinusitis, faringitis, ronquera y salud respiratoria alta.',
  },
  {
    _id: 'post-landing-conversion',
    _type: 'post',
    title: 'Otitis en niños: señales de alerta y cuándo acudir al otorrino',
    slug: {current: 'otitis-en-ninos-senales-de-alerta', _type: 'slug'},
    excerpt:
      'Reconoce los síntomas más frecuentes de otitis infantil y evita complicaciones con una consulta oportuna.',
    publishedAt: '2026-02-10T10:00:00.000Z',
    author: {_type: 'reference', _ref: 'author-ana-campos'},
    category: {_type: 'reference', _ref: 'category-estrategia-digital'},
    tags: ['otitis', 'niños', 'dolor de oído'],
    isDraft: false,
    seoTitle: 'Otitis en niños: señales de alerta | Dra. Erislaine Tamayo',
    seoDescription:
      'Guía breve para padres sobre síntomas de otitis en niños y cuándo buscar evaluación otorrinolaringológica.',
    body: [
      {
        _key: 'p1',
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _key: 'p1c1',
            _type: 'span',
            text: 'La otitis es una causa frecuente de dolor de oído en la infancia. Detectarla temprano permite aliviar síntomas y prevenir recurrencias.',
            marks: [],
          },
        ],
      },
      {
        _key: 'p2',
        _type: 'block',
        style: 'h2',
        markDefs: [],
        children: [{_key: 'p2c1', _type: 'span', text: 'Señales que requieren evaluación médica', marks: []}],
      },
      {
        _key: 'p3',
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _key: 'p3c1',
            _type: 'span',
            text: 'Dolor persistente, fiebre, irritabilidad, dificultad para dormir o salida de secreción por el oído son signos para consultar.',
            marks: [],
          },
        ],
      },
    ],
  },
  {
    _id: 'post-plan-editorial',
    _type: 'post',
    title: 'Rinitis o sinusitis: cómo diferenciarlas y cuándo consultar',
    slug: {current: 'rinitis-o-sinusitis-como-diferenciarlas', _type: 'slug'},
    excerpt:
      'Aprende a identificar síntomas de rinitis y sinusitis para iniciar tratamiento oportuno y evitar molestias prolongadas.',
    publishedAt: '2026-01-24T10:00:00.000Z',
    author: {_type: 'reference', _ref: 'author-daniel-lopez'},
    category: {_type: 'reference', _ref: 'category-contenido-seo'},
    tags: ['rinitis', 'sinusitis', 'congestión nasal'],
    isDraft: false,
    seoTitle: 'Rinitis vs sinusitis: diferencias clave',
    seoDescription:
      'Diferencias entre rinitis y sinusitis, síntomas frecuentes y recomendaciones para consulta con otorrino.',
    body: [
      {
        _key: 'q1',
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _key: 'q1c1',
            _type: 'span',
            text: 'Ambas condiciones afectan la respiración nasal, pero no son iguales. Una evaluación clínica adecuada permite tratarlas de forma específica.',
            marks: [],
          },
        ],
      },
      {
        _key: 'q2',
        _type: 'block',
        style: 'blockquote',
        markDefs: [],
        children: [
          {
            _key: 'q2c1',
            _type: 'span',
            text: 'Si la congestión dura más de 10 días o aparece dolor facial, conviene descartar sinusitis.',
            marks: [],
          },
        ],
      },
      {
        _key: 'q3',
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _key: 'q3c1',
            _type: 'span',
            text: 'La automedicación puede enmascarar síntomas. Lo ideal es recibir diagnóstico y plan terapéutico personalizado.',
            marks: [],
          },
        ],
      },
    ],
  },
  {
    _id: 'post-seo-tecnico-astro',
    _type: 'post',
    title: 'Tapón de cerumen: cuándo hacer lavado de oído de forma segura',
    slug: {current: 'tapon-de-cerumen-cuando-hacer-lavado', _type: 'slug'},
    excerpt:
      'El exceso de cerumen puede causar molestia y disminución auditiva. Conoce cuándo es recomendable acudir a consulta.',
    publishedAt: '2025-12-18T10:00:00.000Z',
    author: {_type: 'reference', _ref: 'author-ana-campos'},
    category: {_type: 'reference', _ref: 'category-estrategia-digital'},
    tags: ['cerumen', 'lavado de oído', 'audición'],
    isDraft: false,
    seoTitle: 'Lavado de oído por cerumen: recomendaciones',
    seoDescription:
      'Cuándo sospechar tapón de cerumen y por qué el lavado de oído debe realizarse por personal capacitado.',
    body: [
      {
        _key: 'r1',
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _key: 'r1c1',
            _type: 'span',
            text: 'El cerumen cumple una función protectora, pero cuando se acumula en exceso puede generar sensación de oído tapado y disminución de la audición.',
            marks: [],
          },
        ],
      },
      {
        _key: 'r2',
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _key: 'r2c1',
            _type: 'span',
            text: 'Evita introducir hisopos u objetos. El procedimiento seguro se realiza en consulta, con valoración previa del conducto auditivo y del tímpano.',
            marks: [],
          },
        ],
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
