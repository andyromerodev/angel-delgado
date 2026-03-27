import groq from 'groq'

export const landingPageQuery = groq`
  *[_type == "landingPage"][0]{
    siteTitle,
    siteDescription,
    heroTitle,
    heroSubtitle,
    heroCtaText,
    heroCtaLink,
    heroSecondaryCtaText,
    heroSecondaryCtaLink,
    "heroImage": heroImage{alt, asset},
    services[]{title, description, iconName},
    benefits[]{title, description},
    testimonials[]{name, role, quote},
    faq[]{question, answer},
    contactWhatsApp,
    contactEmail,
    footerText,
    seoTitle,
    seoDescription
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    siteName,
    defaultSeoTitle,
    defaultSeoDescription,
    socialImage{alt, asset}
  }
`

export const blogListProjection = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  tags,
  "coverImage": coverImage{alt, asset},
  "category": category->{_id, title, "slug": slug.current}
}`

export const blogDetailProjection = `{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  tags,
  seoTitle,
  seoDescription,
  body,
  "coverImage": coverImage{alt, asset},
  "category": category->{_id, title, "slug": slug.current},
  "author": author->{_id, name, role, bio, "image": image{alt, asset}},
  "previousPost": *[
    _type == "post" &&
    defined(slug.current) &&
    publishedAt < ^.publishedAt &&
    !(_id in path("drafts.**")) &&
    !coalesce(isDraft, false)
  ] | order(publishedAt desc)[0]{title, "slug": slug.current},
  "nextPost": *[
    _type == "post" &&
    defined(slug.current) &&
    publishedAt > ^.publishedAt &&
    !(_id in path("drafts.**")) &&
    !coalesce(isDraft, false)
  ] | order(publishedAt asc)[0]{title, "slug": slug.current}
}`
