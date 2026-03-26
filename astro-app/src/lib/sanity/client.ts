import {createClient} from '@sanity/client'

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production'

if (!projectId) {
  throw new Error('PUBLIC_SANITY_PROJECT_ID no está definido. Configura astro-app/.env.')
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2025-02-19',
  useCdn: true,
})
