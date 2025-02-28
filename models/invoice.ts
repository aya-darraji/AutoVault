import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, integer, float, timestamp, json, relationship, checkbox } from "@keystone-6/core/fields";

export const Invoices = list({
    access: allowAll,
    fields: {
        orderId: text(),
        taxOnValue: text(),
        BaseTaxValue: text(),
        NetValue: text(),
        status: checkbox({}),
        agency: relationship({
            ref: 'Agency', many: true, ui: {
                displayMode: 'select',
            }
        }),
        user: relationship({
            ref: 'User', many: true, ui: {
                displayMode: 'select',
            }
        }),
        car: relationship({
            ref: 'Car', many: true, ui: {
                displayMode: 'select',

            }
        }),

    },
});
