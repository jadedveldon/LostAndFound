import { defineField, defineType } from 'sanity';

export const archetype = defineType({
  name: 'archetype',
  title: 'Archetype',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'shortDescription', title: 'Short Description', type: 'string' }),
    defineField({ name: 'longDescription', title: 'Long Description', type: 'text' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
  ]
});
