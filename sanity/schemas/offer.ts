import { SchemaTypeDefinition } from 'sanity'

export const offer: SchemaTypeDefinition = {
  name: 'offer',
  title: 'Offer',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    },
  ],
}
