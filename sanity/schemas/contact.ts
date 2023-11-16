import { SchemaTypeDefinition } from 'sanity'

export const contact: SchemaTypeDefinition = {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required().email(),
    },
    {
      name: 'phone',
      title: 'Phone number',
      type: 'number',
      validation: (rule) => rule.required(),
    },
  ],
}
