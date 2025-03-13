/*import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, json, timestamp, select, checkbox } from '@keystone-6/core/fields';

export const ResponsiveConfig = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),  // Nom de la configuration
    isMobileOptimized: checkbox({ defaultValue: true }),  // Utilisation de checkbox à la place de boolean
    breakpoints: json(),  // Les points de rupture pour le responsive design (par exemple, tailles d'écran)
    designFeatures: json(),  // Configuration des caractéristiques du design (par exemple, menus, disposition, etc.)
    theme: select({
      options: [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
      ],
      defaultValue: 'light',
    }),  // Thème choisi pour la version mobile
    createdAt: timestamp({
      defaultValue: { kind: 'now' },
    }),
    updatedAt: timestamp({
      defaultValue: { kind: 'now' },
    }),
  },
});

*/





import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, json, timestamp, select, checkbox, relationship } from '@keystone-6/core/fields';

export const ResponsiveConfig = list({
  access: allowAll,
  fields: {
    name: text({ 
      validation: { 
        isRequired: true 
      },
      isIndexed: 'unique', // Ensures each config name is unique
      description: 'The name of the responsive configuration.' 
    }),

    isMobileOptimized: checkbox({ 
      defaultValue: true, 
      description: 'Indicates if the configuration is optimized for mobile devices.' 
    }),

    breakpoints: json({
      description: 'An array of breakpoints defining screen sizes for responsive design.',
      isRequired: true,
      // A sample structure for breakpoints: 
      // [{ size: 'sm', width: 576 }, { size: 'md', width: 768 }]
    }),

    designFeatures: json({
      description: 'An object containing configuration details for design features like menus, layout, etc.',
      isRequired: false,
      // A sample structure for design features:
      // { "menu": "hamburger", "layout": "grid", "footer": "sticky" }
    }),

    theme: select({
      options: [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
      ],
      defaultValue: 'light',
      description: 'The theme selected for the responsive configuration.'
    }),

    createdAt: timestamp({
      defaultValue: { kind: 'now' },
      isReadOnly: true, // Prevent modification after creation
      description: 'The timestamp when this configuration was created.'
    }),

    updatedAt: timestamp({
      defaultValue: { kind: 'now' },
      isReadOnly: true, // Prevent modification after creation
      description: 'The timestamp when this configuration was last updated.'
    }),

    updatedBy: relationship({
      ref: 'User',
      description: 'The user who last updated this configuration.',
      isRequired: false, // Optional to link to a user
      many: false,
    }),
  },

  hooks: {
    async resolveInput({ resolvedData }) {
      // Automatically set the updatedAt timestamp whenever an update is made
      if (resolvedData.updatedAt == undefined) {
        resolvedData.updatedAt = new Date();
      }
      return resolvedData;
    },
  },
});
