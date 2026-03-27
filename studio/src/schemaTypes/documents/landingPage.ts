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
      name: 'heroSection',
      title: 'Hero section (new)',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({name: 'badge', title: 'Badge', type: 'string'}),
        defineField({name: 'titlePrefix', title: 'Title prefix', type: 'string'}),
        defineField({name: 'titleHighlight', title: 'Title highlight', type: 'string'}),
        defineField({name: 'titleSuffix', title: 'Title suffix', type: 'string'}),
        defineField({name: 'subtitle', title: 'Subtitle', type: 'text', rows: 3}),
        defineField({
          name: 'primaryCtaText',
          title: 'Primary CTA text',
          type: 'string',
        }),
        defineField({
          name: 'primaryCtaLink',
          title: 'Primary CTA link',
          type: 'url',
        }),
        defineField({
          name: 'secondaryCtaText',
          title: 'Secondary CTA text',
          type: 'string',
        }),
        defineField({
          name: 'secondaryCtaLink',
          title: 'Secondary CTA link',
          type: 'url',
        }),
        defineField({
          name: 'image',
          title: 'Hero image',
          type: 'image',
          options: {hotspot: true},
          fields: [defineField({name: 'alt', title: 'Alternative text', type: 'string'})],
        }),
        defineField({
          name: 'trustCardTitle',
          title: 'Trust card title',
          type: 'string',
        }),
        defineField({
          name: 'trustCardSubtitle',
          title: 'Trust card subtitle',
          type: 'string',
        }),
      ],
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
      name: 'servicesShowcase',
      title: 'Services showcase (new)',
      type: 'object',
      group: 'sections',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({
          name: 'cards',
          title: 'Cards',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'variant',
                  title: 'Variant',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Feature', value: 'feature'},
                      {title: 'Standard', value: 'standard'},
                      {title: 'Accent', value: 'accent'},
                    ],
                  },
                }),
                defineField({name: 'label', title: 'Label', type: 'string'}),
                defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 3,
                  validation: (Rule) => Rule.required(),
                }),
                defineField({name: 'iconName', title: 'Icon name', type: 'string'}),
                defineField({
                  name: 'bullets',
                  title: 'Bullets',
                  type: 'array',
                  of: [defineArrayMember({type: 'string'})],
                }),
                defineField({name: 'ctaText', title: 'CTA text', type: 'string'}),
                defineField({name: 'ctaLink', title: 'CTA link', type: 'url'}),
                defineField({
                  name: 'image',
                  title: 'Card image',
                  type: 'image',
                  options: {hotspot: true},
                  fields: [defineField({name: 'alt', title: 'Alternative text', type: 'string'})],
                }),
              ],
            }),
          ],
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
      name: 'aboutDoctor',
      title: 'About doctor (new)',
      type: 'object',
      group: 'sections',
      fields: [
        defineField({name: 'eyebrow', title: 'Eyebrow', type: 'string'}),
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [defineArrayMember({type: 'text'})],
        }),
        defineField({
          name: 'stats',
          title: 'Stats',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'value', title: 'Value', type: 'string', validation: (Rule) => Rule.required()}),
                defineField({name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required()}),
              ],
            }),
          ],
        }),
        defineField({
          name: 'image',
          title: 'About image',
          type: 'image',
          options: {hotspot: true},
          fields: [defineField({name: 'alt', title: 'Alternative text', type: 'string'})],
        }),
      ],
    }),
    defineField({
      name: 'appointmentSection',
      title: 'Appointment section (new)',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({name: 'contactTitle', title: 'Contact panel title', type: 'string'}),
        defineField({name: 'contactDescription', title: 'Contact panel description', type: 'text', rows: 3}),
        defineField({
          name: 'contactItems',
          title: 'Contact items',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required()}),
                defineField({name: 'value', title: 'Value', type: 'string', validation: (Rule) => Rule.required()}),
                defineField({name: 'iconName', title: 'Icon name', type: 'string'}),
              ],
            }),
          ],
        }),
        defineField({name: 'scheduleTitle', title: 'Schedule title', type: 'string'}),
        defineField({
          name: 'scheduleItems',
          title: 'Schedule items',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
        }),
        defineField({name: 'formTitle', title: 'Form title', type: 'string'}),
        defineField({name: 'formSubtitle', title: 'Form subtitle', type: 'text', rows: 2}),
        defineField({name: 'fullNameLabel', title: 'Full name label', type: 'string'}),
        defineField({name: 'fullNamePlaceholder', title: 'Full name placeholder', type: 'string'}),
        defineField({name: 'emailLabel', title: 'Email label', type: 'string'}),
        defineField({name: 'emailPlaceholder', title: 'Email placeholder', type: 'string'}),
        defineField({name: 'phoneLabel', title: 'Phone label', type: 'string'}),
        defineField({name: 'phonePlaceholder', title: 'Phone placeholder', type: 'string'}),
        defineField({name: 'consultTypeLabel', title: 'Consult type label', type: 'string'}),
        defineField({name: 'consultTypePlaceholder', title: 'Consult type placeholder', type: 'string'}),
        defineField({
          name: 'consultTypeOptions',
          title: 'Consult type options',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
        }),
        defineField({name: 'messageLabel', title: 'Message label', type: 'string'}),
        defineField({name: 'messagePlaceholder', title: 'Message placeholder', type: 'string'}),
        defineField({name: 'submitText', title: 'Submit text', type: 'string'}),
      ],
    }),
    defineField({
      name: 'floatingCta',
      title: 'Floating CTA (new)',
      type: 'object',
      group: 'contact',
      fields: [
        defineField({name: 'label', title: 'Label', type: 'string'}),
        defineField({name: 'link', title: 'Link', type: 'url'}),
        defineField({name: 'iconName', title: 'Icon name', type: 'string'}),
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
