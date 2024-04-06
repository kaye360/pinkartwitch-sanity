import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { artwork } from './schemaTypes/artwork'
import { home } from './schemaTypes/home'
import { socialMediaPost } from './schemaTypes/socialMediaPost'

export default defineConfig({
  name: 'default',
  title: 'PinkArtWitch',

  projectId: process.env.SANITY_PROJECT_ID as string,
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [artwork, home, socialMediaPost],
  },
})
