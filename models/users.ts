import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, password, timestamp, json,select,relationship } from "@keystone-6/core/fields";

/*
export const Users = list({
    access: allowAll,
    fields: {
        fullName: text({ validation: { isRequired: true } }),
        email: text({
            validation: { isRequired: true },
            isIndexed: 'unique',
        }),
        password: password({ validation: { isRequired: true } }),
        phone: text({ validation: { isRequired: true } }),
        address: text({ validation: { isRequired: true } }),
        createdAt: timestamp({
            defaultValue: { kind: 'now' },
        }),
        updatedAt: timestamp({
            defaultValue: { kind: 'now' },
        }),
    },
})*/


/*

export const Users = list({
  access: allowAll,
  fields: {
    fullName: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    password: password({ validation: { isRequired: true } }),
    phone: text({ validation: { isRequired: true } }),
    address: text({ validation: { isRequired: true } }),
    role: select({
      options: [
        { label: 'User', value: 'user' },
        { label: 'Agency', value: 'agency' },
      ],
      defaultValue: 'user',
      ui: { displayMode: 'segmented-control' },
    }),
    createdAt: timestamp({ defaultValue: { kind: 'now' } }),
    updatedAt: timestamp({ defaultValue: { kind: 'now' } }),
    
   

    rating: relationship({ ref: "rating", many: false, ui: { displayMode: "select"} }),
    favoris: relationship({ ref: "favoris", many: true, ui: { displayMode: "select"}}),

    comment: relationship({
      ref: "comment",
      many: true, // Un utilisateur peut avoir plusieurs commentaires
    }),

    reviews: relationship({
      ref: 'reviewUsers',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['title', 'rating', 'reviewDate'],
        linkToItem: true,
        inlineCreate: { fields: ['title', 'content', 'rating', 'agencyId'] },
        inlineEdit: { fields: ['title', 'content', 'rating'] },
      }
  },
});*/

/*
export const Users = list({
  access: allowAll,
  fields: {
    fullName: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    password: password({ validation: { isRequired: true } }),
    phone: text({ validation: { isRequired: true } }),
    address: text({ validation: { isRequired: true } }),
    role: select({
      options: [
        { label: 'User', value: 'user' },
        { label: 'Agency', value: 'agency' },
      ],
      defaultValue: 'user',
      ui: {
        displayMode: 'segmented-control'
      },
    }),
    createdAt: timestamp({
      defaultValue: { kind: 'now' }
    }),
    updatedAt: timestamp({
      defaultValue: { kind: 'now' }
    }),
    rating: relationship({
      ref: "rating",
      many: false,
      ui: { displayMode: "select" }
    }),
    favoris: relationship({
      ref: "favoris",
      many: true,
      ui: { displayMode: "select" }
    }),
    comment: relationship({
      ref: "comment",
      many: true,
    }),

    transaction: relationship({
      ref: 'transaction',
      many: true
    }),

    // Ajout de la relation avec ReviewUsers
    reviews: relationship({
      ref: 'reviewUsers',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['title', 'rating', 'reviewDate'],
        linkToItem: true,
        inlineCreate: { fields: ['title', 'content', 'rating', 'agencyId'] },
        inlineEdit: { fields: ['title', 'content', 'rating'] },
      }
    }),
  },
});*/
// users.ts
import { list } from '@keystone-6/core';
import { 
  text, 
  password, 
  select, 
  timestamp, 
  relationship 
} from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';

export const Users = list({
  access: allowAll,
  fields: {
    fullName: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: 'unique',
    }),
    password: password({ validation: { isRequired: true } }),
    phone: text({ validation: { isRequired: true } }),
    address: text({ validation: { isRequired: true } }),
    role: select({
      options: [
        { label: 'User', value: 'user' },
        { label: 'Agency', value: 'agency' },
      ],
      defaultValue: 'user',
      ui: {
        displayMode: 'segmented-control'
      },
    }),
    createdAt: timestamp({
      defaultValue: { kind: 'now' }
    }),
    updatedAt: timestamp({
      defaultValue: { kind: 'now' }
    }),
    rating: relationship({
      ref: "rating",
      many: false,
      ui: { displayMode: "select" }
    }),
    favoris: relationship({
      ref: "favoris",
      many: true,
      ui: { displayMode: "select" }
    }),
    comment: relationship({
      ref: "comment",
      many: true,
    }),
    // Fix for the ReviewUsers relationship - remove agencyId from inlineCreate fields
    reviews: relationship({
      ref: 'reviewUsers',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['title', 'rating', 'reviewDate'],
        linkToItem: true,
        inlineCreate: { fields: ['title', 'content', 'rating'] }, // Removed 'agencyId'
        inlineEdit: { fields: ['title', 'content', 'rating'] },
      }
    }),
    // Add relationship to Transaction
    transactions: relationship({
      ref: 'transaction',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['dateTransaction', 'montant', 'statut'],
        linkToItem: true,
      }
    }),
  },
});