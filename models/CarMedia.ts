/*import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, file, relationship, timestamp } from "@keystone-6/core/fields";

export const CarMedia = list({
    access: allowAll,
    fields: {
        mediaName: text({ validation: { isRequired: true } }), // Nom du fichier
        mediaFile: file({ 
            storage: "car_media_storage"  // Nom du stockage défini dans keystone.ts
        }),
        car: relationship({ ref: "CarListing.media", many: false }), // Relation avec une voiture
        createdAt: timestamp({
            defaultValue: { kind: "now" },
        }),
        updatedAt: timestamp({
            defaultValue: { kind: "now" },
        }),
    },
});
*/