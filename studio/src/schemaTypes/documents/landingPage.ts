import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  groups: [
    {name: 'general', title: 'General', default: true},
    {name: 'hero', title: 'Hero'},
    {name: 'sections', title: 'Secciones'},
    {name: 'contact', title: 'Contacto y footer'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site title',
      type: 'string',
      group: 'general',
      validation: (Rule) => Rule.required(),
      description: 'Nombre principal del sitio que se muestra en header y metadata por defecto.',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site description',
      type: 'text',
      rows: 3,
      group: 'general',
      description: 'Resumen corto del consultorio para la home.',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero title',
      type: 'string',
      group: 'hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero subtitle',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      group: 'hero',
      options: {hotspot: true},
      description: 'Foto principal de la doctora. Idealmente en retrato y con fondo neutro.',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Hero CTA text',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaLink',
      title: 'Hero CTA link',
      type: 'url',
      group: 'hero',
    }),
    defineField({
      name: 'heroSecondaryCtaText',
      title: 'Hero secondary CTA text',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSecondaryCtaLink',
      title: 'Hero secondary CTA link',
      type: 'url',
      group: 'hero',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      group: 'sections',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({name: 'iconName', title: 'Optional icon name', type: 'string'}),
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        }),
      ],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      group: 'sections',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'title', subtitle: 'description'},
          },
        }),
      ],
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      group: 'sections',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required()}),
            defineField({name: 'role', title: 'Role', type: 'string'}),
            defineField({
              name: 'quote',
              title: 'Quote',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'name', subtitle: 'quote'},
          },
        }),
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      group: 'sections',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'question', subtitle: 'answer'},
          },
        }),
      ],
    }),
    defineField({
      name: 'contactWhatsApp',
      title: 'Contact WhatsApp link',
      type: 'url',
      group: 'contact',
      description: 'Ejemplo: https://wa.me/51999999999',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact email',
      type: 'string',
      group: 'contact',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'footerText',
      title: 'Footer text',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      group: 'seo',
      description: 'Si se deja vacío, se usa Site title.',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO description',
      type: 'text',
      rows: 3,
      group: 'seo',
      description: 'Si se deja vacío, se usa Site description.',
    }),
  ],
  preview: {
    select: {
      title: 'siteTitle',
      subtitle: 'heroTitle',
      media: 'heroImage',
    },
  },
})
