import {getCliClient} from 'sanity/cli'

const client = getCliClient({
  apiVersion: '2025-02-19',
})

const BRAND = {
  doctorName: 'Dr. Angel Delgado Arevalo',
  city: 'Tarapoto',
  country: 'Peru',
  clinic: 'Clinica de San Martin',
  whatsapp: 'https://wa.me/51999999999',
  email: 'contacto@angeldelgado.com',
}

const docs = [
  {
    _id: 'landingPage',
    _type: 'landingPage',
    siteTitle: BRAND.doctorName + ' | Ginecologia',
    siteDescription:
      'Consulta ginecologica integral para adolescentes y adultas: control preventivo, salud hormonal, embarazo y menopausia.',
    heroTitle: 'Cuidado ginecologico cercano, claro y basado en evidencia',
    heroSubtitle:
      'Acompanamos tu salud femenina en ' + BRAND.city + ', ' + BRAND.country + ', con atencion humana y seguimiento personalizado.',
    heroCtaText: 'Agendar cita por WhatsApp',
    heroCtaLink: BRAND.whatsapp,
    heroSecondaryCtaText: 'Leer articulos de salud femenina',
    heroSecondaryCtaLink: '/blog',
    heroSection: {
      badge: 'Consulta ginecologica integral',
      titlePrefix: 'Prevencion.',
      titleHighlight: 'Confianza.',
      titleSuffix: 'Bienestar.',
      subtitle:
        'Atencion profesional en cada etapa: chequeo anual, control prenatal, infecciones vaginales, salud hormonal y menopausia.',
      primaryCtaText: 'Reservar consulta',
      primaryCtaLink: BRAND.whatsapp,
      secondaryCtaText: 'Conocer servicios',
      secondaryCtaLink: '#servicios',
      trustCardTitle: 'Especialista certificada',
      trustCardSubtitle: 'Ginecologia y obstetricia con enfoque humano',
    },
    services: [
      {
        _key: 'service-1',
        title: 'Consulta ginecologica y chequeo preventivo',
        description:
          'Evaluacion clinica, orientacion personalizada y examen preventivo para detectar a tiempo alteraciones ginecologicas.',
        iconName: 'health_and_safety',
      },
      {
        _key: 'service-2',
        title: 'Control prenatal y acompanamiento del embarazo',
        description:
          'Seguimiento de cada trimestre, solicitud de estudios y educacion para un embarazo saludable y seguro.',
        iconName: 'pregnant_woman',
      },
      {
        _key: 'service-3',
        title: 'Planificacion familiar y salud hormonal',
        description:
          'Asesoria en metodos anticonceptivos, irregularidades menstruales y sintomas de perimenopausia o menopausia.',
        iconName: 'event_repeat',
      },
    ],
    servicesShowcase: {
      eyebrow: 'Servicios clave',
      title: 'Atencion ginecologica para cada etapa de la vida',
      cards: [
        {
          _key: 'showcase-1',
          variant: 'feature',
          label: 'Mas solicitado',
          title: 'Chequeo ginecologico anual',
          description:
            'Consulta integral para prevencion, tamizaje y plan de cuidado individual segun edad y antecedentes.',
          bullets: ['Papanicolaou y colposcopia segun criterio medico', 'Educacion para autocuidado y signos de alarma'],
          ctaText: 'Agendar evaluacion',
          ctaLink: BRAND.whatsapp,
        },
        {
          _key: 'showcase-2',
          variant: 'standard',
          title: 'Control prenatal',
          description: 'Seguimiento medico continuo del embarazo con enfoque preventivo y acompanamiento cercano.',
          iconName: 'monitor_heart',
        },
        {
          _key: 'showcase-3',
          variant: 'standard',
          title: 'Salud hormonal',
          description: 'Diagnostico y manejo de alteraciones del ciclo menstrual, SOP y etapa de menopausia.',
          iconName: 'favorite',
        },
      ],
    },
    benefits: [
      {
        _key: 'benefit-1',
        title: 'Atencion basada en evidencia',
        description: 'Cada plan se define con criterio clinico actualizado y comunicacion clara para toma de decisiones.',
      },
      {
        _key: 'benefit-2',
        title: 'Consulta humana y confidencial',
        description: 'Espacio seguro para resolver dudas con respeto, empatia y enfoque integral de salud femenina.',
      },
      {
        _key: 'benefit-3',
        title: 'Seguimiento continuo',
        description: 'Acompanamiento para control, tratamiento y prevencion con objetivos claros en cada visita.',
      },
    ],
    aboutDoctor: {
      eyebrow: 'Sobre la doctora',
      title: BRAND.doctorName + ': acompanamiento profesional en salud femenina',
      paragraphs: [
        'Especialista en ginecologia y obstetricia enfocada en prevencion, diagnostico temprano y educacion en salud femenina.',
        'La consulta prioriza escucha activa, claridad en las indicaciones y un plan de accion realista para cada paciente.',
      ],
      stats: [
        {_key: 'about-stat-1', value: '10+', label: 'Anos de experiencia'},
        {_key: 'about-stat-2', value: '+2,500', label: 'Pacientes atendidas'},
      ],
    },
    testimonials: [
      {
        _key: 'testimonial-1',
        name: 'Laura M.',
        role: 'Paciente',
        quote:
          'La consulta fue muy clara y respetuosa. Me ayudo a entender mis resultados y sali con un plan concreto.',
      },
      {
        _key: 'testimonial-2',
        name: 'Daniela R.',
        role: 'Paciente prenatal',
        quote: 'Me senti acompanada durante todo el embarazo. Excelente trato y seguimiento.',
      },
    ],
    faq: [
      {
        _key: 'faq-1',
        question: 'Cada cuanto debo hacerme un chequeo ginecologico?',
        answer:
          'En general, se recomienda control anual. La frecuencia puede variar segun antecedentes, edad y sintomas.',
      },
      {
        _key: 'faq-2',
        question: 'Atienden primera consulta en adolescencia?',
        answer:
          'Si. La consulta se adapta a cada etapa y se enfoca en orientacion, prevencion y resolucion de dudas.',
      },
      {
        _key: 'faq-3',
        question: 'Puedo agendar por WhatsApp?',
        answer: 'Si, puedes reservar tu cita directamente por WhatsApp desde el boton principal de la landing.',
      },
    ],
    appointmentSection: {
      contactTitle: 'Agenda tu cita',
      contactDescription: 'Estamos para ayudarte. Escribenos y coordinamos la mejor fecha para tu consulta.',
      contactItems: [
        {_key: 'contact-1', label: 'WhatsApp', value: BRAND.whatsapp, iconName: 'call'},
        {_key: 'contact-2', label: 'Correo', value: BRAND.email, iconName: 'mail'},
        {_key: 'contact-3', label: 'Ubicacion', value: BRAND.clinic + ', ' + BRAND.city + ', ' + BRAND.country, iconName: 'place'},
      ],
      scheduleTitle: 'Horario de atencion',
      scheduleItems: ['Lunes a Viernes: 9:00 AM - 6:00 PM', 'Sabados: 9:00 AM - 1:00 PM'],
      formTitle: 'Solicita tu cita',
      formSubtitle: 'Completa tus datos y te contactamos para confirmar disponibilidad.',
      fullNameLabel: 'Nombre completo',
      fullNamePlaceholder: 'Ej. Maria Perez',
      emailLabel: 'Correo electronico',
      emailPlaceholder: 'maria@email.com',
      phoneLabel: 'Telefono',
      phonePlaceholder: '+53 --- ----',
      consultTypeLabel: 'Tipo de consulta',
      consultTypePlaceholder: 'Selecciona una opcion',
      consultTypeOptions: [
        'Chequeo ginecologico',
        'Control prenatal',
        'Planificacion familiar',
        'Salud hormonal y menopausia',
      ],
      messageLabel: 'Motivo de consulta',
      messagePlaceholder: 'Describe brevemente tus sintomas o consulta.',
      submitText: 'Enviar solicitud',
    },
    floatingCta: {
      label: 'Escribir por WhatsApp',
      link: BRAND.whatsapp,
      iconName: 'chat',
    },
    contactWhatsApp: BRAND.whatsapp,
    contactEmail: BRAND.email,
    footerText: BRAND.doctorName + ' · ' + BRAND.clinic + ', ' + BRAND.city + ', ' + BRAND.country,
    seoTitle: BRAND.doctorName + ' | Ginecologia en ' + BRAND.city,
    seoDescription:
      'Landing y blog de salud femenina con informacion confiable sobre chequeo ginecologico, embarazo, anticoncepcion y menopausia.',
  },
  {
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: BRAND.doctorName,
    defaultSeoTitle: BRAND.doctorName + ' | Ginecologia',
    defaultSeoDescription:
      'Consulta ginecologica integral con enfoque preventivo, diagnostico oportuno y acompanamiento cercano.',
  },
  {
    _id: 'author-dra-principal',
    _type: 'author',
    name: BRAND.doctorName,
    slug: {current: 'dra-ginecologia-principal', _type: 'slug'},
    role: 'Especialista en Ginecologia y Obstetricia',
    bio: 'Atencion ginecologica en ' + BRAND.city + ', ' + BRAND.country + ', con enfoque en prevencion y salud femenina integral.',
  },
  {
    _id: 'author-equipo-clinico',
    _type: 'author',
    name: 'Equipo clinico de salud femenina',
    slug: {current: 'equipo-clinico-salud-femenina', _type: 'slug'},
    role: 'Contenido medico editorial',
    bio: 'Equipo de apoyo responsable de articulos educativos revisados por profesionales de ginecologia.',
  },
  {
    _id: 'category-salud-menstrual',
    _type: 'category',
    title: 'Salud menstrual',
    slug: {current: 'salud-menstrual', _type: 'slug'},
    description: 'Guias sobre ciclo menstrual, dolor pelvico y senales de alerta para consulta.',
  },
  {
    _id: 'category-embarazo-prevencion',
    _type: 'category',
    title: 'Embarazo y prevencion',
    slug: {current: 'embarazo-y-prevencion', _type: 'slug'},
    description: 'Contenido de control prenatal, anticoncepcion y bienestar durante el embarazo.',
  },
  {
    _id: 'post-chequeo-ginecologico',
    _type: 'post',
    title: 'Chequeo ginecologico anual: que incluye y por que no postergarlo',
    slug: {current: 'chequeo-ginecologico-anual-que-incluye', _type: 'slug'},
    excerpt: 'Conoce los componentes principales del control anual y como ayuda a prevenir complicaciones.',
    publishedAt: '2026-02-10T10:00:00.000Z',
    author: {_type: 'reference', _ref: 'author-dra-principal'},
    category: {_type: 'reference', _ref: 'category-salud-menstrual'},
    tags: ['chequeo ginecologico', 'prevencion', 'salud femenina'],
    isDraft: false,
    seoTitle: 'Chequeo ginecologico anual: guia rapida',
    seoDescription:
      'Que esperar de una consulta ginecologica de rutina y cuales son los estudios que suelen recomendarse.',
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
            text: 'El chequeo anual permite detectar de forma temprana condiciones ginecologicas y ajustar habitos preventivos segun tu etapa de vida.',
            marks: [],
          },
        ],
      },
      {
        _key: 'p2',
        _type: 'block',
        style: 'h2',
        markDefs: [],
        children: [{_key: 'p2c1', _type: 'span', text: 'Que se evalua en consulta?', marks: []}],
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
            text: 'Historia clinica, sintomas actuales, examen fisico y solicitud de pruebas cuando corresponde, como citologia y ultrasonido.',
            marks: [],
          },
        ],
      },
    ],
  },
  {
    _id: 'post-control-prenatal',
    _type: 'post',
    title: 'Primer control prenatal: recomendaciones para llegar preparada',
    slug: {current: 'primer-control-prenatal-recomendaciones', _type: 'slug'},
    excerpt:
      'Estos son los datos y estudios utiles para aprovechar mejor la primera consulta de embarazo.',
    publishedAt: '2026-01-24T10:00:00.000Z',
    author: {_type: 'reference', _ref: 'author-equipo-clinico'},
    category: {_type: 'reference', _ref: 'category-embarazo-prevencion'},
    tags: ['embarazo', 'control prenatal', 'salud materna'],
    isDraft: false,
    seoTitle: 'Primer control prenatal: guia inicial',
    seoDescription: 'Consejos practicos para organizar tu primera cita prenatal y resolver dudas frecuentes.',
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
            text: 'La primera consulta prenatal define un plan de controles, estudios y cuidados que acompanaran todo el embarazo.',
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
            text: 'Llevar fecha de ultima menstruacion y antecedentes medicos acelera la evaluacion inicial.',
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
            text: 'Si presentas dolor intenso, sangrado o fiebre, no esperes al proximo control: busca evaluacion inmediata.',
            marks: [],
          },
        ],
      },
    ],
  },
  {
    _id: 'post-menopausia',
    _type: 'post',
    title: 'Menopausia: sintomas comunes y opciones de manejo seguro',
    slug: {current: 'menopausia-sintomas-y-opciones-de-manejo', _type: 'slug'},
    excerpt:
      'Bochornos, cambios del sueno y sequedad vaginal pueden tratarse con un plan individualizado y supervision medica.',
    publishedAt: '2025-12-18T10:00:00.000Z',
    author: {_type: 'reference', _ref: 'author-dra-principal'},
    category: {_type: 'reference', _ref: 'category-salud-menstrual'},
    tags: ['menopausia', 'salud hormonal', 'bienestar femenino'],
    isDraft: false,
    seoTitle: 'Menopausia: sintomas y tratamiento',
    seoDescription:
      'Recomendaciones para identificar sintomas de menopausia y conversar opciones terapeuticas con tu ginecologa.',
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
            text: 'La menopausia es una etapa natural. El objetivo de la consulta es disminuir sintomas y mantener calidad de vida.',
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
            text: 'Dependiendo de cada caso se pueden indicar cambios de estilo de vida, apoyo nutricional o terapias farmacologicas.',
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

  console.log('Seed finalizado: ' + docs.length + ' documentos listos.')
}

seed().catch((error) => {
  console.error('Error ejecutando seed:', error)
  process.exit(1)
})
