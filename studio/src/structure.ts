import type {StructureResolver} from 'sanity/structure'

export const singletonTypes = new Set(['landingPage', 'siteSettings'])

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('Landing Page')
        .id('landingPage')
        .child(S.document().schemaType('landingPage').documentId('landingPage')),
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('category').title('Categorías'),
      S.documentTypeListItem('author').title('Autores'),
    ])
