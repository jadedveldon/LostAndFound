import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy_project_id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: 'Lost & Found Studio',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
