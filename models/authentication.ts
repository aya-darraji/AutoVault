/*import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, password, timestamp } from "@keystone-6/core/fields";

export const UserAuthentication = list({
    access: allowAll,
    fields: {
        email: text({
            validation: { isRequired: true },
            isIndexed: 'unique',
        }),
        password: password({ validation: { isRequired: true } }),
        createdAt: timestamp({
            defaultValue: { kind: 'now' },
        }),
        updatedAt: timestamp({
            defaultValue: { kind: 'now' },
        }),
    },
});
*/
import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, password, timestamp, select } from "@keystone-6/core/fields";

export const UserAuthentication = list({
    access: allowAll,
    fields: {
        fullName: text({ validation: { isRequired: true } }),
        email: text({
            validation: { isRequired: true },
            isIndexed: 'unique',
        }),
        password: password({ validation: { isRequired: true } }),
        role: select({
            options: [
                { label: "Admin", value: "admin" },
                { label: "User", value: "user" },
            ],
            defaultValue: "user",
            validation: { isRequired: true },
        }),
        phone: text({ validation: { isRequired: true } }),
        address: text({ validation: { isRequired: true } }),
        createdAt: timestamp({
            defaultValue: { kind: 'now' },
        }),
        updatedAt: timestamp({
            defaultValue: { kind: 'now' },
        }),
    },
});
