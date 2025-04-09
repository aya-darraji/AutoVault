// models/transaction.ts
import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, timestamp, relationship, select, float } from "@keystone-6/core/fields";

export const Transaction = list({
  access: allowAll,
  fields: {
    // Champs principaux
    user: relationship({
      ref: 'User',
      many: false
    }),
    car: relationship({
      ref: 'Car',
      many: false
    }),
    agency: relationship({
      ref: 'Agency',
      many: false
    }),
    
    // Détails de la transaction
    dateTransaction: timestamp({
      validation: { isRequired: true },
      defaultValue: { kind: 'now' }
    }),
    
    montant: float({
      validation: { isRequired: true }
      // Removed precision and scale as they're not supported in this context
    }),
    
    statut: select({
      // Removed type: 'enum' as it's not needed - select field already defines an enum
      options: [
        { label: 'En attente', value: 'PENDING' },
        { label: 'Confirmée', value: 'CONFIRMED' },
        { label: 'Annulée', value: 'CANCELLED' },
        { label: 'Remboursée', value: 'REFUNDED' },
        { label: 'Complétée', value: 'COMPLETED' }
      ],
      defaultValue: 'PENDING',
      validation: { isRequired: true }
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
    
    // Vous pourriez ajouter d'autres hooks pour gérer les actions post-transaction
    // Par exemple, mettre à jour le statut de la voiture quand une transaction est confirmée
    afterOperation: async ({ operation, item, context }) => {
      if (operation === 'create' || (operation === 'update' && item.statut === 'COMPLETED')) {
        // Mettre à jour le statut de la voiture si nécessaire
        const carId = item.carId;
        if (carId) {
          await context.query.Car.updateOne({
            where: { id: carId },
            data: { status: 'sold' },
          });
        }
      }
    },
  },
});