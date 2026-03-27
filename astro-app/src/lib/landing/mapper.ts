import type {LandingPage} from '../sanity/types'
import type {LandingViewModel} from './view-model'

const DEFAULT_CONSULT_OPTIONS = [
  'Rinoplastia (Estética/Funcional)',
  'Otorrinolaringología General',
  'Cirugía de Cabeza y Cuello',
  'Otros',
]

function getSafeCards(page: LandingPage): LandingViewModel['services']['cards'] {
  if (page.servicesShowcase?.cards?.length) {
    return page.servicesShowcase.cards.map((card) => ({
      variant: card.variant || 'standard',
      label: card.label,
      title: card.title,
      description: card.description,
      iconName: card.iconName,
      bullets: card.bullets || [],
      ctaText: card.ctaText,
      ctaLink: card.ctaLink,
      image: card.image,
    }))
  }

  const primary = page.services[0]
  const secondary = page.services[1]
  const tertiary = page.services[2]
  const accent = page.benefits[0]

  return [
    {
      variant: 'feature',
      label: 'Destacado',
      title: primary?.title || 'Rinoplastia Integral',
      description:
        primary?.description ||
        'Fusión entre estética facial y funcionalidad respiratoria para resultados naturales.',
      bullets: [secondary?.title, tertiary?.title].filter(Boolean) as string[],
      ctaText: 'Saber más',
      ctaLink: '#agendar',
    },
    ...(secondary
      ? [
          {
            variant: 'standard' as const,
            title: secondary.title,
            description: secondary.description,
            iconName: secondary.iconName || 'medical_services',
            bullets: [],
          },
        ]
      : []),
    ...(tertiary
      ? [
          {
            variant: 'standard' as const,
            title: tertiary.title,
            description: tertiary.description,
            iconName: tertiary.iconName || 'health_metrics',
            bullets: [],
          },
        ]
      : []),
    {
      variant: 'accent',
      title: accent?.title || 'Armonización Nasal Sin Cirugía',
      description:
        accent?.description ||
        'Opciones no invasivas para perfilar el rostro con enfoque clínico y natural.',
      bullets: [],
      ctaText: 'Ver procedimientos',
      ctaLink: '#agendar',
    },
  ]
}

export function mapLandingToViewModel(page: LandingPage): LandingViewModel {
  const heroSection = page.heroSection
  const appointment = page.appointmentSection
  const about = page.aboutDoctor
  const aboutParagraphs = about?.paragraphs?.filter(Boolean) || []
  const fallbackParagraphs = page.benefits.map((benefit) => benefit.description).filter(Boolean).slice(0, 2)

  return {
    siteTitle: page.siteTitle,
    footerText: page.footerText || 'Dra. Erislaine Tamayo - Otorrinolaringología y Rinoplastia.',
    contactEmail: page.contactEmail,
    contactWhatsApp: page.contactWhatsApp,
    hero: {
      badge: heroSection?.badge || 'Excelencia Quirúrgica',
      titlePrefix: heroSection?.titlePrefix || 'Respire.',
      titleHighlight: heroSection?.titleHighlight || 'Transforme.',
      titleSuffix: heroSection?.titleSuffix || 'Sienta la Vida.',
      subtitle:
        heroSection?.subtitle ||
        page.heroSubtitle ||
        page.siteDescription ||
        'Otorrinolaringología y rinoplastia en Tarapoto con enfoque humano y precisión clínica.',
      primaryText: heroSection?.primaryCtaText || page.heroCtaText || 'Agendar Consulta',
      primaryLink: heroSection?.primaryCtaLink || page.heroCtaLink || '#agendar',
      secondaryText: heroSection?.secondaryCtaText || page.heroSecondaryCtaText || 'Ver Procedimientos',
      secondaryLink: heroSection?.secondaryCtaLink || page.heroSecondaryCtaLink || '#servicios',
      image: heroSection?.image || page.heroImage,
      trustCardTitle: heroSection?.trustCardTitle || 'Especialista Certificada',
      trustCardSubtitle: heroSection?.trustCardSubtitle || 'Rinoplastia Estética y Funcional',
    },
    services: {
      eyebrow: page.servicesShowcase?.eyebrow || 'Nuestra Especialidad',
      title: page.servicesShowcase?.title || 'Precisión Médica & Arte Facial',
      cards: getSafeCards(page),
    },
    about: {
      eyebrow: about?.eyebrow || 'Trayectoria & Filosofía',
      title: about?.title || 'El Santuario de la Salud en Tarapoto',
      paragraphs: aboutParagraphs.length ? aboutParagraphs : fallbackParagraphs.length ? fallbackParagraphs : [page.siteDescription],
      stats: about?.stats?.length
        ? about.stats
        : [
            {value: '+1000', label: 'Casos Exitosos'},
            {value: '10+', label: 'Años de Experiencia'},
          ],
      image: about?.image || page.heroImage,
    },
    appointment: {
      contactTitle: appointment?.contactTitle || 'Información de Contacto',
      contactDescription:
        appointment?.contactDescription ||
        'Estamos listos para atenderte. Agenda una consulta y recibe atención personalizada.',
      contactItems: appointment?.contactItems?.length
        ? appointment.contactItems.map((item) => ({
            label: item.label,
            value: item.value,
            iconName: item.iconName || 'info',
          }))
        : [
            {label: 'WhatsApp', value: page.contactWhatsApp || 'No configurado', iconName: 'call'},
            {label: 'Email', value: page.contactEmail || 'No configurado', iconName: 'mail'},
          ],
      scheduleTitle: appointment?.scheduleTitle || 'Horario de Atención',
      scheduleItems: appointment?.scheduleItems?.length
        ? appointment.scheduleItems
        : ['Lunes a Viernes: 9:00 AM - 7:00 PM', 'Sábados: 9:00 AM - 1:00 PM'],
      formTitle: appointment?.formTitle || 'Agenda tu Consulta',
      formSubtitle:
        appointment?.formSubtitle ||
        'Completa el formulario y nuestro equipo te contactará para confirmar tu cita.',
      fullNameLabel: appointment?.fullNameLabel || 'Nombre Completo',
      fullNamePlaceholder: appointment?.fullNamePlaceholder || 'Ej. Juan Pérez',
      emailLabel: appointment?.emailLabel || 'Correo Electrónico',
      emailPlaceholder: appointment?.emailPlaceholder || 'ejemplo@correo.com',
      phoneLabel: appointment?.phoneLabel || 'Número de Teléfono',
      phonePlaceholder: appointment?.phonePlaceholder || '+51 --- --- ---',
      consultTypeLabel: appointment?.consultTypeLabel || 'Tipo de Consulta',
      consultTypePlaceholder: appointment?.consultTypePlaceholder || 'Seleccione una opción',
      consultTypeOptions: appointment?.consultTypeOptions?.length
        ? appointment.consultTypeOptions
        : DEFAULT_CONSULT_OPTIONS,
      messageLabel: appointment?.messageLabel || 'Mensaje (Opcional)',
      messagePlaceholder:
        appointment?.messagePlaceholder || '¿Tienes alguna duda o requerimiento especial?',
      submitText: appointment?.submitText || 'Enviar Solicitud de Cita',
    },
    floatingCta:
      page.floatingCta?.link || page.contactWhatsApp
        ? {
            label: page.floatingCta?.label || 'Chatea por WhatsApp',
            link: page.floatingCta?.link || page.contactWhatsApp || '#agendar',
            iconName: page.floatingCta?.iconName || 'chat',
          }
        : undefined,
  }
}
