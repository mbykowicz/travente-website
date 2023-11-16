/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schemaTypes } from './sanity/schemas'

const singletonActions = new Set(['publish', 'discardChanges', 'restore'])
const singletonTypes = new Set(['hero', 'steps', 'offer', 'about', 'contact'])

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonActions.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  // Add and edit the content schema in the './sanity/schema' folder
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Hero')
              .id('hero')
              .child(S.editor().schemaType('hero').documentId('hero'))
              .title('Hero'),
            S.listItem()
              .title('About me')
              .id('about')
              .child(S.document().schemaType('about').documentId('about'))
              .title('About me'),
            S.listItem()
              .title('How it works')
              .id('steps')
              .child(S.document().schemaType('steps').documentId('steps'))
              .title('How it works'),
            S.listItem()
              .title('Offer')
              .id('offer')
              .child(S.document().schemaType('offer').documentId('offer'))
              .title('Offer'),
            S.documentTypeListItem('express').title('Express Travel'),
            S.listItem()
              .title('Contact')
              .id('contact')
              .child(S.document().schemaType('contact').documentId('contact'))
              .title('Contact'),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
