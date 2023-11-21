import { SchemaTypeDefinition, defineArrayMember } from 'sanity'

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
    {
      name: 'signature',
      title: 'Signature',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
        },
      ],
    },
  ],
}
