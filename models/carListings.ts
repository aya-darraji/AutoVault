import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, integer, relationship, select, image, float, timestamp, checkbox } from "@keystone-6/core/fields";

export const CarListings = list({
    access: allowAll,
    fields: {
        title: text({ validation: { isRequired: true } }),
        description: text(),
        price: integer({ validation: { isRequired: true } }),
        status: select({
            options: [
                { label: "Available", value: "available" },
                { label: "Sold", value: "sold" },
                { label: "Reserved", value: "reserved" },
            ],
            defaultValue: "available",
        }),
        //car: relationship({ ref: "Cars", many: false, ui: { displayMode: "select", labelField: "name" } }),
        car: relationship({ ref: "Cars", many: false, ui: { displayMode: "select", labelField: "name" } }),


        car: relationship({ ref: "Car", many: false, ui: { displayMode: "select", labelField: "name" } }),



        //agency: relationship({ ref: "Agencies", many: false, ui: { displayMode: "select", labelField: "agencyFullName" } }),
        agency: relationship({ ref: "Agency", many: false, ui: { displayMode: "select", labelField: "agencyFullName" } }),
        images: image({ storage: "localStorage" }),
        videoURL: text(),
        listedDate: timestamp({ defaultValue: { kind: "now" } }),
        featured: checkbox({ defaultValue: false }),
    },
});
