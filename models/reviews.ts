import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, integer, relationship, timestamp } from "@keystone-6/core/fields";

export const Reviews = list({
    access: allowAll,
    fields: {
        rating: integer({ 
            validation: { isRequired: true, min: 1, max: 5 } 
        }),
        reviewText: text({
            ui: {
                displayMode: 'textarea'
            }
        }),
        user: relationship({ ref: 'User', many: false }),
        car: relationship({ ref: 'carListingManagement', many: false }),
        createdAt: timestamp({
            defaultValue: { kind: 'now' },
        }),
        updatedAt: timestamp({
            defaultValue: { kind: 'now' },
        }),
    },
}); 
