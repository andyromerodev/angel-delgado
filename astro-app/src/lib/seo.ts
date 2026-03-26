interface SeoInput {
  title?: string
  description?: string
  fallbackTitle: string
  fallbackDescription: string
}

export function createSeo(input: SeoInput) {
  return {
    title: input.title?.trim() || input.fallbackTitle,
    description: input.description?.trim() || input.fallbackDescription,
  }
}
