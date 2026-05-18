import { defineField, defineType } from 'sanity';

export const journalArticle = defineType({
  name: 'journalArticle',
  title: 'Journal Article',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ 
      name: 'category', 
      title: 'Category', 
      type: 'string', 
      options: { list: ['founders-take', 'slow-read', 'from-the-road', 'decision-detox', 'curator-pick'] } 
    }),
    defineField({ name: 'author', title: 'Author', type: 'reference', to: [{ type: 'teamMember' }] }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
    defineField({ name: 'readTime', title: 'Read Time (minutes)', type: 'number' }),
    defineField({ name: 'hero', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text' }),
    defineField({ 
      name: 'body', 
      title: 'Body', 
      type: 'array', 
      of: [{ type: 'block' }, { type: 'image' }] 
    }),
    defineField({ name: 'relatedArticles', title: 'Related Articles', type: 'array', of: [{ type: 'reference', to: [{ type: 'journalArticle' }] }] }),
    defineField({ name: 'featured', title: 'Featured?', type: 'boolean', initialValue: false }),
  ]
});
