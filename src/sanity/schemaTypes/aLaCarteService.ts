import { defineField, defineType } from 'sanity';

export const aLaCarteService = defineType({
  name: 'aLaCarteService',
  title: 'A La Carte Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'priceFrom', title: 'Price From (INR)', type: 'number' }),
    defineField({ name: 'whatsIncluded', title: 'What is Included', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'sampleDeliverable', title: 'Sample Deliverable', type: 'image' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ]
});
