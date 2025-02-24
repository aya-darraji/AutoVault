import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, password, timestamp, json } from "@keystone-6/core/fields";


export const Users = list({
    access: allowAll,
    fields: {
        fullName: text({ validation: { isRequired: true } }),
        email: text({
            validation: { isRequired: true },
            isIndexed: 'unique',
        }),
        password: password({ validation: { isRequired: true } }),
        phone: text({ validation: { isRequired: true } }),
        address: text({ validation: { isRequired: true } }),
        createdAt: timestamp({
            defaultValue: { kind: 'now' },
        }),
        updatedAt: timestamp({
            defaultValue: { kind: 'now' },
        }),
    },
})