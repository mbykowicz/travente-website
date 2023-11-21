import { groq } from 'next-sanity'
import { client } from './lib/client'

export async function getHeroData() {
  return await client.fetch(groq`
  *[_type=='hero'][0]{
    headline,
    description,
    button
  }`)
}

export async function getStepsData() {
  return await client.fetch(groq`
  *[_type=='steps'][0]
    .stepList[]{
      title,
      description,
      _key
    }`)
}

export async function getAboutMeData() {
  return await client.fetch(groq`
  *[_type=='about'][0]{
    content,
    signature
  }`)
}
