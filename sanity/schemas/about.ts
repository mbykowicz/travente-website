import { SchemaTypeDefinition } from 'sanity'

export const about: SchemaTypeDefinition = {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description:
            'Alternative text is used for accessible purpose and for screen readers.',
        },
      ],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
