import { defineField, defineType } from 'sanity';

export const gathering = defineType({
  name: 'gathering',
  title: 'Gathering',
  type: 'document',
  fields: [
    defineField({ name: 'number', title: 'Number (e.g. "07")', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'destination', title: 'Destination', type: 'reference', to: [{ type: 'destination' }] }),
    defineField({ name: 'startDate', title: 'Start Date', type: 'date' }),
    defineField({ name: 'endDate', title: 'End Date', type: 'date' }),
    defineField({ name: 'days', title: 'Days', type: 'number' }),
    defineField({ name: 'nights', title: 'Nights', type: 'number' }),
    defineField({ name: 'capacityMax', title: 'Max Capacity', type: 'number' }),
    defineField({ name: 'capacityRemaining', title: 'Remaining Capacity', type: 'number' }),
    defineField({ name: 'priceFrom', title: 'Price From (INR)', type: 'number' }),
    defineField({ name: 'priceFull', title: 'Price Full (INR)', type: 'number' }),
    defineField({ name: 'depositAmount', title: 'Deposit Amount (INR)', type: 'number', initialValue: 15000 }),
    defineField({ name: 'host', title: 'Host', type: 'reference', to: [{ type: 'teamMember' }] }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'shortDescription', title: 'Short Description', type: 'text' }),
    defineField({ name: 'isThemedDecisionDetox', title: 'Is Themed Decision Detox?', type: 'boolean', initialValue: false }),
    defineField({ name: 'archetypes', title: 'Archetypes', type: 'array', of: [{ type: 'reference', to: [{ type: 'archetype' }] }] }),
    defineField({ name: 'hero', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image' }] }),
    defineField({ name: 'storyBlocks', title: 'Story Blocks', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
    defineField({ 
      name: 'itineraryDays', 
      title: 'Itinerary Days', 
      type: 'array', 
      of: [{
        type: 'object',
        name: 'itineraryDay',
        fields: [
          { name: 'dayNumber', type: 'number', title: 'Day Number' },
          { name: 'title', type: 'string', title: 'Title' },
          { name: 'description', type: 'text', title: 'Description' }
        ]
      }] 
    }),
    defineField({ name: 'whatsIncluded', title: 'What is Included', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'whatsNotIncluded', title: 'What is NOT Included', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'whoShouldComeNot', title: 'Who should/should not come', type: 'text' }),
    defineField({ name: 'testimonials', title: 'Testimonials', type: 'array', of: [{ type: 'reference', to: [{ type: 'testimonial' }] }] }),
    defineField({ 
      name: 'status', 
      title: 'Status', 
      type: 'string', 
      options: { 
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Enrolling', value: 'enrolling' },
          { title: 'Sold Out', value: 'sold_out' },
          { title: 'Completed', value: 'completed' }
        ] 
      },
      initialValue: 'draft'
    }),
  ]
});
