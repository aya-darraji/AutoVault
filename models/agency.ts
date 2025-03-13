import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, timestamp, select, image, relationship } from "@keystone-6/core/fields";
import { Cars } from './cars';
/*export const Agencies = list({
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
    
*/


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
            options: [
                { label: 'SARL', value: 'SARL' },
                { label: 'SUARL', value: 'SUARL' },
                { label: 'SA', value: 'SA' },
                { label: 'Other', value: 'Other' },
            ],
        }),

        //cars: relationship({ ref: 'Car', many: true }),
        cars: relationship({ ref: 'Car', many: true }),// f page contactInquiry te5dem heka bil cars ?? 

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
    },
});
