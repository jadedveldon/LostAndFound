import { defineField, defineType } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'travellerName', title: 'Traveller Name', type: 'string' }),
    defineField({ name: 'travellerPhoto', title: 'Traveller Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'tripReference', title: 'Trip Reference', type: 'string' }),
    defineField({ name: 'quote', title: 'Quote', type: 'text' }),
    defineField({ name: 'fullReview', title: 'Full Review', type: 'text' }),
    defineField({ 
      name: 'tripType', 
      title: 'Trip Type', 
      type: 'string', 
      options: { list: ['gathering', 'experience', 'detox'] } 
    }),
    defineField({ name: 'rating', title: 'Rating', type: 'number' }),
    defineField({ name: 'featured', title: 'Featured?', type: 'boolean', initialValue: false }),
  ]
});
