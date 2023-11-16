import { SchemaTypeDefinition } from 'sanity'

export const express: SchemaTypeDefinition = {
  name: 'express',
  title: 'Express Travel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (rule) => rule.required().min(Date.now()),
      options: {
        dateFormat: 'DD.MM.YYYY',
      },
    },
    {
      name: 'flights',
      title: 'Flights',
      type: 'object',
      fields: [
        {
          name: 'from',
          title: 'From',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'to',
          title: 'To',
          type: 'string',
          validation: (rule) => rule.required(),
        },
      ],
    },
    {
      name: 'accomodation',
      title: 'Accomodation',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.required(),
    },
  ],
}
