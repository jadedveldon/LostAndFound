import { defineField, defineType } from 'sanity';

export const destination = defineType({
  name: 'destination',
  title: 'Destination',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'country', title: 'Country', type: 'string' }),
    defineField({ name: 'region', title: 'Region', type: 'string' }),
    defineField({ name: 'introParagraph', title: 'Intro Paragraph', type: 'text' }),
    defineField({ name: 'whyWeKeepComingBack', title: 'Why We Keep Coming Back', type: 'text' }),
    defineField({ name: 'hero', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image' }] }),
    defineField({ name: 'currencyLocal', title: 'Local Currency', type: 'string' }),
  ]
});
