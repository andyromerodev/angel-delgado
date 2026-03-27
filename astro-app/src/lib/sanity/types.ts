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
  services: Array<{
    title: string
    description: string
    iconName?: string
  }>
  benefits: Array<{
    title: string
    description: string
  }>
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
