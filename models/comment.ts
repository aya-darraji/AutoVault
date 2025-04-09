// fichier : models/commentaire.ts

import { list } from '@keystone-6/core';
import { text, timestamp, relationship } from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';

export const Comment = list({
  access: allowAll,
  fields: {
    content: text({ validation: { isRequired: true } }),

    creationDate: timestamp({
      defaultValue: { kind: 'now' },
      validation: { isRequired: true },
    }),

    user: relationship({
      ref: 'User', // fait référence à Users.ts
      ui: {
        displayMode: 'select',
        labelField: 'fullName',
      },
    }),

    car: relationship({
      ref: 'Car', // fait référence à Cars.ts
      ui: {
        displayMode: 'select',
        labelField: 'name',
      },
    }),
  },
});
