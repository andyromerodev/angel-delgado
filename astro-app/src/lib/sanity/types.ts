import type {PortableTextBlock} from '@portabletext/types'

export interface SanityImage {
  asset?: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface Author {
  _id: string
  name: string
  role?: string
  bio?: string
  image?: SanityImage
}

export interface Category {
  _id: string
  title: string
  slug?: string
}

export interface BlogListItem {
  _id: string
  title: string
  slug: string
  excerpt?: string
  publishedAt: string
  tags?: string[]
  coverImage?: SanityImage
  category?: Category
}

export interface BlogPost extends BlogListItem {
  body: PortableTextBlock[]
  seoTitle?: string
  seoDescription?: string
  author?: Author
  previousPost?: {
    title: string
    slug: string
  }
  nextPost?: {
    title: string
    slug: string
  }
}

export interface LandingPage {
  siteTitle: string
  siteDescription: string
  heroTitle: string
  heroSubtitle?: string
  heroCtaText?: string
  heroCtaLink?: string
  heroSecondaryCtaText?: string
  heroSecondaryCtaLink?: string
  heroImage?: SanityImage
  heroSection?: {
    badge?: string
    titlePrefix?: string
    titleHighlight?: string
    titleSuffix?: string
    subtitle?: string
    primaryCtaText?: string
    primaryCtaLink?: string
    secondaryCtaText?: string
    secondaryCtaLink?: string
    image?: SanityImage
    trustCardTitle?: string
    trustCardSubtitle?: string
  }
  services: Array<{
    title: string
    description: string
    iconName?: string
  }>
  servicesShowcase?: {
    eyebrow?: string
    title?: string
    cards?: Array<{
      variant?: 'feature' | 'standard' | 'accent'
      label?: string
      title: string
      description: string
      iconName?: string
      bullets?: string[]
      ctaText?: string
      ctaLink?: string
      image?: SanityImage
    }>
  }
  benefits: Array<{
    title: string
    description: string
  }>
  aboutDoctor?: {
    eyebrow?: string
    title?: string
    paragraphs?: string[]
    stats?: Array<{
      value: string
      label: string
    }>
    image?: SanityImage
  }
  testimonials: Array<{
    name: string
    role?: string
    quote: string
  }>
  faq: Array<{
    question: string
    answer: string
  }>
  contactWhatsApp?: string
  contactEmail?: string
  appointmentSection?: {
    contactTitle?: string
    contactDescription?: string
    contactItems?: Array<{
      label: string
      value: string
      iconName?: string
    }>
    scheduleTitle?: string
    scheduleItems?: string[]
    formTitle?: string
    formSubtitle?: string
    fullNameLabel?: string
    fullNamePlaceholder?: string
    emailLabel?: string
    emailPlaceholder?: string
    phoneLabel?: string
    phonePlaceholder?: string
    consultTypeLabel?: string
    consultTypePlaceholder?: string
    consultTypeOptions?: string[]
    messageLabel?: string
    messagePlaceholder?: string
    submitText?: string
  }
  floatingCta?: {
    label?: string
    link?: string
    iconName?: string
  }
  footerText?: string
  seoTitle?: string
  seoDescription?: string
}

export interface SiteSettings {
  siteName?: string
  defaultSeoTitle?: string
  defaultSeoDescription?: string
  socialImage?: SanityImage
}
