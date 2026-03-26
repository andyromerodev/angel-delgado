import groq from 'groq'
import {sanityClient} from './client'
import {blogDetailProjection, blogListProjection, landingPageQuery, siteSettingsQuery} from './queries'
import type {BlogListItem, BlogPost, LandingPage, SiteSettings} from './types'

const draftFilter = import.meta.env.PROD
  ? '&& !(_id in path("drafts.**")) && !coalesce(isDraft, false)'
  : ''

export async function getLandingPage() {
  return sanityClient.fetch<LandingPage | null>(landingPageQuery)
}

export async function getSiteSettings() {
  return sanityClient.fetch<SiteSettings | null>(siteSettingsQuery)
}

export async function getBlogPosts() {
  return sanityClient.fetch<BlogListItem[]>(
    groq`*[_type == "post" && defined(slug.current) ${draftFilter}] | order(publishedAt desc) ${blogListProjection}`,
  )
}

export async function getBlogSlugs() {
  return sanityClient.fetch<Array<{slug: string}>>(
    groq`*[_type == "post" && defined(slug.current) ${draftFilter}]{"slug": slug.current}`,
  )
}

export async function getBlogPostBySlug(slug: string) {
  return sanityClient.fetch<BlogPost | null>(
    groq`*[_type == "post" && slug.current == $slug ${draftFilter}][0] ${blogDetailProjection}`,
    {slug},
  )
}
