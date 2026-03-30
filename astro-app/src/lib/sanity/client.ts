import {createClient} from '@sanity/client'

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'auo8a6wh'
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production'

export const isSanityConfigured = Boolean(projectId)

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2025-02-19',
  useCdn: true,
})
