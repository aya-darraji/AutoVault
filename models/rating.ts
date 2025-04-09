import { list } from '@keystone-6/core';
import { relationship, text, integer, timestamp } from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';

export const Rating = list({
  access: allowAll,
  fields: {
    reviewText: text({
      validation: { isRequired: true },
      ui: { displayMode: 'textarea' },
    }),

    rating: integer({
      validation: { isRequired: true, min: 1, max: 5 },
      ui: {
        displayMode: 'segmented-control',
      },
    }),

    user: relationship({
      ref: 'User',
      ui: {
        displayMode: 'cards',
        cardFields: ['fullName', 'email'],
        inlineConnect: true,
        linkToItem: true,
      },
    }),

    /*car: relationship({
      ref: 'Car',
      ui: {
        displayMode: 'cards',
        cardFields: ['name', 'model', 'year'],
        inlineConnect: true,
        linkToItem: true,
      },
    }),
*/
    car: relationship({
        ref: 'Car',
        // <-- attention ici, pas 'Car' ni 'cars'
        ui: {
        displayMode: 'cards',
        cardFields: ['name', 'model', 'year'],
        inlineConnect: true,
        linkToItem: true,
        },
    }),
  
    createdAt: timestamp({ defaultValue: { kind: 'now' } }),
  },
});
