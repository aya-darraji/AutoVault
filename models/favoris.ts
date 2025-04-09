import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, timestamp } from '@keystone-6/core/fields';

export const Favoris = list({
  access: allowAll,
  fields: {
    user: relationship({
      ref: 'User',
      ui: {
        displayMode: 'cards',
        cardFields: ['fullName', 'email'],
        inlineEdit: { fields: ['fullName', 'email'] },
        linkToItem: true,
        inlineCreate: { fields: ['fullName', 'email', 'password'] },
      },
    }),
    car: relationship({
      ref: 'Car',
      ui: {
        displayMode: 'cards',
        cardFields: ['name', 'model', 'year'],
        inlineEdit: { fields: ['name', 'model', 'year'] },
        linkToItem: true,
        inlineCreate: { fields: ['name', 'model', 'year', 'price'] },
      },
    }),
    addedDate: timestamp({
      defaultValue: { kind: 'now' },
      validation: { isRequired: true },
    }),
  },
  ui: {
    listView: {
      initialColumns: ['user', 'car', 'addedDate'],
    },
  },
});
