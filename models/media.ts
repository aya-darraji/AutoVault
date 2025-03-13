import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, image,select, timestamp } from '@keystone-6/core/fields';

export const Media = list({
  fields: {
    title: text({
      validation: { isRequired: true },
    }),
    description: text({
      validation: { isRequired: false },
      ui: {
        displayMode: 'textarea',
      },
    }),
    mediaType: select({
      options: [
        { label: 'Image', value: 'image' },
        { label: 'Video', value: 'video' },
        { label: 'Audio', value: 'audio' },
      ],
      validation: { isRequired: true },
    }),
    mediaFile: image({
      storage: 'localStorage', // Spécifie où stocker les fichiers d'image (vous pouvez également utiliser un service de stockage cloud si vous préférez)
      isRequired: false,
      ui: {
        displayMode: 'image',
      },
    }),
    videoURL: text({
      validation: { isRequired: false }, // Cette URL sera utilisée pour les vidéos
      ui: {
        displayMode: 'input',
      },
    }),
    createdAt: timestamp({
      defaultValue: { kind: 'now' },
    }),
    updatedAt: timestamp({
      defaultValue: { kind: 'now' },
    }),
  },
  access: allowAll, // Cette ligne accorde l'accès à tous, mais vous pouvez ajouter des règles d'accès spécifiques
  hooks: {
    async resolveInput({ resolvedData }) {
      // Mise à jour automatique de la date `updatedAt` lors de l'ajout ou de la modification d'un média
      if (resolvedData.updatedAt === undefined) {
        resolvedData.updatedAt = new Date();
      }
      return resolvedData;
    },
  },
});
