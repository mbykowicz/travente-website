import { SchemaTypeDefinition } from 'sanity'
import { hero } from './hero'
import { steps } from './steps'
import { offer } from './offer'
import { express } from './express'
import { contact } from './contact'
import { about } from './about'

export const schemaTypes: { types: SchemaTypeDefinition[] } = {
  types: [hero, steps, offer, express, contact, about],
}
