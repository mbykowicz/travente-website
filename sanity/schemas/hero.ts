import { SchemaTypeDefinition } from 'sanity'

export const hero: SchemaTypeDefinition = {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'text',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    },
    {
      name: 'button',
      title: 'Button Label',
      type: 'string',
      validation: (rule) => rule.required(),
    },
  ],
}
