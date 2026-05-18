import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'usdToInrRate', title: 'USD to INR Rate', type: 'number' }),
    defineField({ name: 'marqueeItems', title: 'Marquee Items', type: 'array', of: [{ type: 'string' }] }),
    defineField({ 
      name: 'pressLogos', 
      title: 'Press Logos', 
      type: 'array', 
      of: [{
        type: 'object',
        name: 'pressItem',
        fields: [
          { name: 'logo', type: 'image', title: 'Logo' },
          { name: 'url', type: 'url', title: 'URL' },
          { name: 'quote', type: 'text', title: 'Quote' }
        ]
      }] 
    }),
    defineField({ name: 'foundersOfficeEmail', title: 'Founders Office Email', type: 'string' }),
    defineField({ name: 'generalEmail', title: 'General Email', type: 'string' }),
  ]
});
