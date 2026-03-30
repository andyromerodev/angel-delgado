import type {LandingPage} from '../sanity/types'
import type {LandingViewModel} from './view-model'

const DEFAULT_CONSULT_OPTIONS = [
  'Consulta ginecológica general',
  'Control prenatal',
  'Planificación familiar',
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
      title: primary?.title || 'Consulta ginecológica integral',
      description:
        primary?.description ||
        'Atención clínica personalizada para prevención, diagnóstico y seguimiento de salud femenina.',
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
      title: accent?.title || 'Planificación familiar y salud hormonal',
      description:
        accent?.description ||
        'Acompañamiento profesional para tomar decisiones informadas en cada etapa de la vida.',
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
    footerText: page.footerText || 'Dr. Angel Delgado Arevalo - Ginecologia y Salud Femenina.',
    contactEmail: page.contactEmail,
    contactWhatsApp: page.contactWhatsApp,
    hero: {
      badge: heroSection?.badge || 'Salud femenina integral',
      titlePrefix: heroSection?.titlePrefix || 'Escucha.',
      titleHighlight: heroSection?.titleHighlight || 'Prevencion.',
      titleSuffix: heroSection?.titleSuffix || 'Bienestar.',
      subtitle:
        heroSection?.subtitle ||
        page.heroSubtitle ||
        page.siteDescription ||
        'Atencion ginecologica con enfoque humano y acompanamiento clinico personalizado.',
      primaryText: heroSection?.primaryCtaText || page.heroCtaText || 'Agendar Consulta',
      primaryLink: heroSection?.primaryCtaLink || page.heroCtaLink || '#agendar',
      secondaryText: heroSection?.secondaryCtaText || page.heroSecondaryCtaText || 'Ver servicios',
      secondaryLink: heroSection?.secondaryCtaLink || page.heroSecondaryCtaLink || '#servicios',
      image: heroSection?.image || page.heroImage,
      trustCardTitle: heroSection?.trustCardTitle || 'Especialista certificada',
      trustCardSubtitle: heroSection?.trustCardSubtitle || 'Consulta, control y prevencion ginecologica',
    },
    services: {
      eyebrow: page.servicesShowcase?.eyebrow || 'Nuestros servicios',
      title: page.servicesShowcase?.title || 'Atencion profesional en cada etapa',
      cards: getSafeCards(page),
    },
    about: {
      eyebrow: about?.eyebrow || 'Doctora y equipo',
      title: about?.title || 'Compromiso con tu salud ginecologica',
      paragraphs: aboutParagraphs.length ? aboutParagraphs : fallbackParagraphs.length ? fallbackParagraphs : [page.siteDescription],
      stats: about?.stats?.length
        ? about.stats
        : [
            {value: '+2,500', label: 'Pacientes atendidas'},
            {value: '10+', label: 'Anos de experiencia'},
          ],
      image: about?.image || page.heroImage,
    },
    appointment: {
      contactTitle: appointment?.contactTitle || 'Informacion de contacto',
      contactDescription:
        appointment?.contactDescription || 'Agenda tu cita y recibe atencion personalizada.',
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
      scheduleTitle: appointment?.scheduleTitle || 'Horario de atencion',
      scheduleItems: appointment?.scheduleItems?.length
        ? appointment.scheduleItems
        : ['Lunes a Viernes: 9:00 AM - 7:00 PM', 'Sábados: 9:00 AM - 1:00 PM'],
      formTitle: appointment?.formTitle || 'Agenda tu Consulta',
      formSubtitle: appointment?.formSubtitle || 'Completa el formulario y te contactaremos para confirmar.',
      fullNameLabel: appointment?.fullNameLabel || 'Nombre completo',
      fullNamePlaceholder: appointment?.fullNamePlaceholder || 'Ej. Ana Perez',
      emailLabel: appointment?.emailLabel || 'Correo electronico',
      emailPlaceholder: appointment?.emailPlaceholder || 'ejemplo@correo.com',
      phoneLabel: appointment?.phoneLabel || 'Numero de telefono',
      phonePlaceholder: appointment?.phonePlaceholder || '+51 --- --- ---',
      consultTypeLabel: appointment?.consultTypeLabel || 'Tipo de consulta',
      consultTypePlaceholder: appointment?.consultTypePlaceholder || 'Selecciona una opcion',
      consultTypeOptions: appointment?.consultTypeOptions?.length
        ? appointment.consultTypeOptions
        : DEFAULT_CONSULT_OPTIONS,
      messageLabel: appointment?.messageLabel || 'Mensaje (opcional)',
      messagePlaceholder: appointment?.messagePlaceholder || 'Describe tu consulta o sintomas principales.',
      submitText: appointment?.submitText || 'Solicitar cita',
    },
    floatingCta:
      page.floatingCta?.link || page.contactWhatsApp
        ? {
            label: page.floatingCta?.label || 'Escribir por WhatsApp',
            link: page.floatingCta?.link || page.contactWhatsApp || '#agendar',
            iconName: page.floatingCta?.iconName || 'chat',
          }
        : undefined,
  }
}
