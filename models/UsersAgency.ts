import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, password, timestamp } from "@keystone-6/core/fields";

export const UsersAgency = list({
    access: allowAll,

    fields: {

        AgencyName: text({ validation: { isRequired: true } }),

        AgencyPhoneNumber: text({ 
            validation: { 
                isRequired: true, 
                match: { regex: /^\d{8}$/ } 
            } 
        }),
        ThePlace:text({ validation: { isRequired: true } }),

        fullName: text({ validation: { isRequired: true } }),

        email: text({
            validation: { isRequired: true },
            isIndexed: 'unique',
        }),
       
    
        phone: text({ 
            validation: { 
                isRequired: true, 
                match: { regex: /^\d{8}$/ } 
            } 
        }),

        password: password({ validation: { isRequired: true } }),

        createdAt: timestamp({
            defaultValue: { kind: 'now' },
        }),

        updatedAt: timestamp({
            defaultValue: { kind: 'now' },
        }),
    },
})