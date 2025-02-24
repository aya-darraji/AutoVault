/*import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, password, timestamp } from "@keystone-6/core/fields";


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
})*/
import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, password, timestamp } from "@keystone-6/core/fields";
import { graphql } from "@keystone-6/core";

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
    hooks: {
        resolveInput: async ({ resolvedData, operation }) => {
            if (operation === "update" && resolvedData.password) {
                resolvedData.updatedAt = new Date().toISOString();
            }
            return resolvedData;
        }
    },
    graphql: {
        mutations: {
            changePassword: graphql.field({
                type: graphql.Boolean,
                args: {
                    userId: graphql.arg({ type: graphql.ID }),
                    oldPassword: graphql.arg({ type: graphql.String }),
                    newPassword: graphql.arg({ type: graphql.String }),
                    repeatPassword: graphql.arg({ type: graphql.String }),
                },
                async resolve(source, { userId, oldPassword, newPassword, repeatPassword }, context) {
                    if (!userId || !oldPassword || !newPassword || !repeatPassword) {
                        throw new Error("Tous les champs sont obligatoires");
                    }

                    if (newPassword !== repeatPassword) {
                        throw new Error("Les nouveaux mots de passe ne correspondent pas");
                    }

                    const user = await context.sudo().db.User.findOne({ where: { id: userId } });
                    if (!user) {
                        throw new Error("Utilisateur non trouvé");
                    }

                    const isMatch = await context.sudo().db.User.checkPassword(user.id, oldPassword);
                    if (!isMatch) {
                        throw new Error("Ancien mot de passe incorrect");
                    }

                    await context.db.User.updateOne({
                        where: { id: userId },
                        data: { password: newPassword },
                    });

                    return true;
                },
            }),
        },
    },
});
