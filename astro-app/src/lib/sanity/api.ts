import groq from 'groq'
import {isSanityConfigured, sanityClient} from './client'
import {blogDetailProjection, blogListProjection, landingPageQuery, siteSettingsQuery} from './queries'
import type {BlogListItem, BlogPost, LandingPage, SiteSettings} from './types'

const draftFilter = import.meta.env.PROD
  ? '&& !(_id in path("drafts.**")) && !coalesce(isDraft, false)'
  : ''

const FALLBACK_LANDING_PAGE: LandingPage = {
  siteTitle: 'Dr. Angel Delgado Arevalo | Ginecologia',
  siteDescription: 'Landing en modo placeholder. Configura el project ID y ejecuta seed para cargar el contenido real.',
  heroTitle: 'Consulta ginecologica integral',
  heroSubtitle: 'Configura Sanity y publica contenido para reemplazar este texto.',
  heroCtaText: 'Agendar cita',
  heroCtaLink: '#agendar',
  heroSecondaryCtaText: 'Ver blog',
  heroSecondaryCtaLink: '/blog',
  services: [
    {
      title: 'Consulta ginecologica',
      description: 'Chequeo preventivo, diagnostico oportuno y acompanamiento clinico.',
      iconName: 'health_and_safety',
    },
  ],
  benefits: [{title: 'Configuracion pendiente', description: 'Carga tu contenido desde Sanity Studio.'}],
  testimonials: [],
  faq: [],
  footerText: 'Dr. Angel Delgado Arevalo · Clinica de San Martin, Tarapoto, Peru',
}

async function safeFetch<T>(fetcher: () => Promise<T>, fallback: T): Promise<T> {
  if (!isSanityConfigured) {
    return fallback
  }

  try {
    return await fetcher()
  } catch (error) {
    console.warn('[sanity] Fallo de consulta, usando fallback local:', error)
    return fallback
  }
}

export async function getLandingPage() {
  return safeFetch(() => sanityClient.fetch<LandingPage | null>(landingPageQuery), FALLBACK_LANDING_PAGE)
}

export async function getSiteSettings() {
  return safeFetch(() => sanityClient.fetch<SiteSettings | null>(siteSettingsQuery), null)
}

export async function getBlogPosts() {
  return safeFetch(
    () =>
      sanityClient.fetch<BlogListItem[]>(
        groq`*[_type == "post" && defined(slug.current) ${draftFilter}] | order(publishedAt desc) ${blogListProjection}`,
      ),
    [],
  )
}

export async function getBlogSlugs() {
  return safeFetch(
    () =>
      sanityClient.fetch<Array<{slug: string}>>(
        groq`*[_type == "post" && defined(slug.current) ${draftFilter}]{"slug": slug.current}`,
      ),
    [],
  )
}

export async function getBlogPostBySlug(slug: string) {
  return safeFetch(
    () =>
      sanityClient.fetch<BlogPost | null>(
        groq`*[_type == "post" && slug.current == $slug ${draftFilter}][0] ${blogDetailProjection}`,
        {slug},
      ),
    null,
  )
}
