import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './src/schemaTypes'
import {deskStructure, singletonTypes} from './src/structure'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'auo8a6wh'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'angel-ginecologia-studio',
  title: 'Angel Ginecologia Content Studio',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: (prev) => prev.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (prev, context) => {
      if (singletonTypes.has(context.schemaType)) {
        return prev.filter(({action}) => action !== 'duplicate' && action !== 'delete')
      }
      return prev
    },
  },
})
