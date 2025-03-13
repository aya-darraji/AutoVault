import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, timestamp, select, relationship, integer } from "@keystone-6/core/fields";

export const ReviewsAndRatings = list({
  access: allowAll,
  fields: {
    reviewTitle: text({
      validation: { isRequired: true },
    }),
    reviewText: text({
      validation: { isRequired: true },
      ui: {
        displayMode: "textarea",
      },
    }),
    rating: integer({
      validation: { isRequired: true, min: 1, max: 5 },  // L'évaluation est entre 1 et 5
    }),
    car: relationship({
      ref: "Car", // Assurez-vous que vous avez une liste `Car` définie ailleurs dans votre schéma Keystone
      many: false, // Une évaluation est liée à une seule voiture
    }),
    reviewerName: text({
      validation: { isRequired: true },
    }),
    reviewerEmail: text({
      validation: { isRequired: false },
    }),
    createdAt: timestamp({
      defaultValue: { kind: "now" },
    }),
    updatedAt: timestamp({
      defaultValue: { kind: "now" },
    }),
  },
  hooks: {
    async resolveInput({ resolvedData }) {
      // Met à jour automatiquement le champ `updatedAt` lorsqu'un avis est modifié
      if (resolvedData.updatedAt === undefined) {
        resolvedData.updatedAt = new Date();
      }
      return resolvedData;
    },
  },
});
