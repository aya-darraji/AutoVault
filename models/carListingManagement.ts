import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, integer, select, timestamp, relationship, image } from "@keystone-6/core/fields";

export const CarListing = list({
  access: allowAll,
  fields: {
    modelName: text({ validation: { isRequired: true } }),
    carBrand: text({ validation: { isRequired: true } }),
    mileage: integer({ validation: { isRequired: true } }),
    year: integer({ validation: { isRequired: true } }),
    series: text(),
    color: text({ validation: { isRequired: true } }), // Nouveau champ ajouté
    category: select({
      options: [
        { label: "Sedan", value: "sedan" },
        { label: "SUV", value: "suv" },
        { label: "Truck", value: "truck" },
        { label: "Coupe", value: "coupe" },
      ],
      validation: { isRequired: true },
    }),
    price: integer({ validation: { isRequired: true } }),
    /*avatar: image({ storage: "my_image_storage" }), // Assurez-vous que le nom correspond*/
    createdAt: timestamp({ defaultValue: { kind: "now" } }),
    updatedAt: timestamp({ defaultValue: { kind: "now" } }),
    owner: relationship({ ref: "User", many: false }),
  },
});
