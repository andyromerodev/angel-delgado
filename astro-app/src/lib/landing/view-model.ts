import type {SanityImage} from '../sanity/types'

export interface LandingViewModel {
  siteTitle: string
  footerText: string
  contactEmail?: string
  contactWhatsApp?: string
  hero: {
    badge: string
    titlePrefix: string
    titleHighlight: string
    titleSuffix: string
    subtitle: string
    primaryText: string
    primaryLink: string
    secondaryText: string
    secondaryLink: string
    image?: SanityImage
    trustCardTitle: string
    trustCardSubtitle: string
  }
  services: {
    eyebrow: string
    title: string
    cards: Array<{
      variant: 'feature' | 'standard' | 'accent'
      label?: string
      title: string
      description: string
      iconName?: string
      bullets: string[]
      ctaText?: string
      ctaLink?: string
      image?: SanityImage
    }>
  }
  about: {
    eyebrow: string
    title: string
    paragraphs: string[]
    stats: Array<{
      value: string
      label: string
    }>
    image?: SanityImage
  }
  appointment: {
    contactTitle: string
    contactDescription: string
    contactItems: Array<{
      label: string
      value: string
      iconName: string
    }>
    scheduleTitle: string
    scheduleItems: string[]
    formTitle: string
    formSubtitle: string
    fullNameLabel: string
    fullNamePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    consultTypeLabel: string
    consultTypePlaceholder: string
    consultTypeOptions: string[]
    messageLabel: string
    messagePlaceholder: string
    submitText: string
  }
  floatingCta?: {
    label: string
    link: string
    iconName: string
  }
}
