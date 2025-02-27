import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, integer, timestamp } from "@keystone-6/core/fields";

export const AgencyStatistics = list({
    access: allowAll,
    fields: {
        agencyName: text({ validation: { isRequired: true } }),
        viewCount: integer({ defaultValue: 0 }),
        lastSeen: timestamp({ defaultValue: { kind: 'now' } }),
    },
});
