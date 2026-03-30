import {createClient} from '@sanity/client'

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production'

export const isSanityConfigured = Boolean(projectId && projectId !== 'your-project-id')

export const sanityClient = createClient({
  projectId: projectId || 'placeholder-project-id',
  dataset,
  apiVersion: '2025-02-19',
  useCdn: true,
})
