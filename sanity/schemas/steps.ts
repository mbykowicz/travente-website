import { rule } from 'postcss'
import { SchemaTypeDefinition } from 'sanity'

export const steps: SchemaTypeDefinition = {
  name: 'steps',
  title: 'How it works',
  type: 'document',
  fields: [
    {
      name: 'stepList',
      title: 'List of steps',
      type: 'array',
      of: [
        {
          name: 'step',
          title: 'step',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
              validation: (rule) => rule.required(),
            },
          ],
        },
      ],
    },
  ],
}
