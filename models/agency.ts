import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, timestamp, select, image, relationship } from "@keystone-6/core/fields";

export const Agencies = list({
    access: allowAll,
    fields: {
        agencyFullName: text({ validation: { isRequired: true } }),
        agencyAvatar: image({ storage: 'localStorage' }),
        agencyPhoneNumber: text({
            validation: {
                isRequired: true,
                match: { regex: /^\d{8}$/ }
            }
        }),
        agencyAddress: text({ validation: { isRequired: true } }),
        agencyTaxNumber: text({ validation: { isRequired: true } }),
        agencyCompanyType: select({
            type: 'enum',
            options: [
                { label: 'SARL', value: 'SARL' },
                { label: 'SUARL', value: 'SUARL' },
                { label: 'SA', value: 'SA' },
                { label: 'Other', value: 'Other' },
            ],
        }),
        cars: relationship({ ref: 'Car' ,many:true}),
        
        createdAt: timestamp({
            defaultValue: { kind: 'now' },
        }),
        updatedAt: timestamp({
            defaultValue: { kind: 'now' },
        }),
    },
})