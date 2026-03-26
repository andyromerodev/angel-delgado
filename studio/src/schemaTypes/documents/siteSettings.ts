import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'defaultSeoTitle',
      title: 'Default SEO title',
      type: 'string',
      description: 'Fallback SEO title para páginas sin SEO específico.',
    }),
    defineField({
      name: 'defaultSeoDescription',
      title: 'Default SEO description',
      type: 'text',
      rows: 3,
      description: 'Fallback SEO description para páginas sin SEO específico.',
    }),
    defineField({
      name: 'socialImage',
      title: 'Default social image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', title: 'Alternative text', type: 'string'}),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
      subtitle: 'defaultSeoTitle',
    },
  },
})
