/*import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, timestamp, relationship, image } from "@keystone-6/core/fields";

export const storage = {
    local_images: {
        kind: "local",
        type: "image",
        generateUrl: (path) => `/images/${path}`,
        serverRoute: { path: "/images" },
        storagePath: "public/images",
    },
};

export const CarBrand = list({
    access: allowAll,
    fields: {
        name: text({ validation: { isRequired: true } }),
        logo: image({ storage: "local_images" }),
        createdAt: timestamp({ defaultValue: { kind: "now" } }),
    },
});

export const HomePage = list({
    access: allowAll,
    fields: {
        title: text({ validation: { isRequired: true } }),
        description: text(),
        images: relationship({ ref: "CarImage", many: true }),
        featuredBrands: relationship({ ref: "CarBrand", many: true }),
        createdAt: timestamp({ defaultValue: { kind: "now" } }),
    },
});

export const CarImage = list({
    access: allowAll,
    fields: {
        title: text(),
        image: image({ storage: "local_images" }),
        uploadedAt: timestamp({ defaultValue: { kind: "now" } }),
    },
});

*/