import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, integer, relationship, timestamp } from "@keystone-6/core/fields";

export const CarPurchases = list({
    access: allowAll,
    fields: {
        agency: relationship({ ref: 'Agency', many: false }),
        carName: text({ validation: { isRequired: true } }),
        purchaseCount: integer({ defaultValue: 0 }),
        lastPurchase: timestamp({ defaultValue: { kind: 'now' } }),
    },
});
