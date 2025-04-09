// models/reviewUsers.ts
import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, integer, timestamp, relationship } from "@keystone-6/core/fields";
/*
export const ReviewUsers = list({
  access: allowAll,
  fields: {
    // Référence à l'utilisateur qui a fait la revue
    userId: relationship({
      ref: 'User',
      many: false,
      ui: {
        displayMode: 'select',
        labelField: 'fullName',
      }
    }),
    
    // Référence à l'agence qui est évaluée
    agencyId: relationship({
      ref: 'Agency',
      many: false,
      ui: {
        displayMode: 'select',
        labelField: 'agencyFullName',
      }
    }),
    
    // Note donnée par l'utilisateur (entre 1 et 5)
    rating: integer({
      validation: {
        isRequired: true,
        min: 1,
        max: 5
      },
      ui: {
        description: 'Note entre 1 et 5 étoiles'
      }
    }),
    
    // Titre de l'avis
    title: text({
      validation: { isRequired: true },
      ui: {
        description: 'Titre de l\'avis'
      }
    }),
    
    // Contenu de l'avis
    content: text({
      validation: { isRequired: true },
      ui: {
        displayMode: 'textarea',
        description: 'Contenu détaillé de l\'avis'
      }
    }),
    
    // Date de la revue
    reviewDate: timestamp({
      defaultValue: { kind: 'now' },
      ui: {
        description: 'Date de publication de l\'avis'
      }
    }),
    
    createdAt: timestamp({
      defaultValue: { kind: 'now' },
    }),
    
    updatedAt: timestamp({
      defaultValue: { kind: 'now' },
    }),
  },
  
  // Hooks pour mettre à jour automatiquement le champ updatedAt
  hooks: {
    resolveInput: async ({ resolvedData, operation }) => {
      if (operation === "update") {
        resolvedData.updatedAt = new Date();
      }
      return resolvedData;
    },
  },
});*/
// models/reviewUsers.ts
import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { 
  text, 
  timestamp, 
  relationship,
  integer 
} from "@keystone-6/core/fields";

export const ReviewUsers = list({
  access: allowAll,
  fields: {
    // Relations
    user: relationship({ 
      ref: 'User', 
      many: false 
    }),
    agency: relationship({ 
      ref: 'Agency', 
      many: false 
    }),
    
    // Champs de l'avis
    rating: integer({
      validation: { 
        isRequired: true,
        min: 1,
        max: 5
      }
    }),
    
    title: text({
      validation: { isRequired: true }
    }),
    
    content: text({
      validation: { isRequired: true },
      ui: {
        displayMode: 'textarea'
      }
    }),
    
    reviewDate: timestamp({
      validation: { isRequired: true },
      defaultValue: { kind: 'now' }
    }),
    
    // Champs système
    createdAt: timestamp({
      defaultValue: { kind: 'now' },
    }),
    
    updatedAt: timestamp({
      defaultValue: { kind: 'now' },
    }),
  },
  
  hooks: {
    resolveInput: async ({ resolvedData, operation }) => {
      if (operation === "update") {
        resolvedData.updatedAt = new Date();
      }
      return resolvedData;
    },
  },
});