import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, password, timestamp } from "@keystone-6/core/fields";

export const Agencies = list({
    access: allowAll,
    fields: {
        agencyName: text({ validation: { isRequired: true } }),
        agencyPhoneNumber: text({
            validation: {
                isRequired: true,
                match: { regex: /^\d{8}$/ }
            }
        }),
        address: text({ validation: { isRequired: true } }),
        fullName: text({ validation: { isRequired: true } }),
        createdAt: timestamp({
            defaultValue: { kind: 'now' },
        }),
        updatedAt: timestamp({
            defaultValue: { kind: 'now' },
        }),
    },
})