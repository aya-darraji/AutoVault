import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, integer, select, relationship, float, timestamp } from "@keystone-6/core/fields";

export const SearchFiltering = list({
    access: allowAll,
    fields: {
        make: text({ validation: { isRequired: true } }), // Marque du véhicule
        model: text({ validation: { isRequired: true } }), // Modèle
        year: integer({ validation: { isRequired: true } }), // Année
        price: float({ validation: { isRequired: true } }), // Prix
        bodywork: select({
            options: [
                { label: "Berline", value: "berline" },
                { label: "SUV", value: "suv" },
                { label: "Coupé", value: "coupe" },
                { label: "Cabriolet", value: "cabriolet" },
                { label: "Break", value: "break" },
            ],
        }),
        gearbox: select({
            options: [
                { label: "Manuelle", value: "manual" },
                { label: "Automatique", value: "automatic" },
            ],
        }),
        fuelType: select({
            options: [
                { label: "Essence", value: "petrol" },
                { label: "Diesel", value: "diesel" },
                { label: "Électrique", value: "electric" },
                { label: "Hybride", value: "hybrid" },
            ],
        }),
        mileage: integer(), // Kilométrage
        color: text(), // Couleur
        doors: integer(), // Nombre de portes
        seats: integer(), // Nombre de sièges
        createdAt: timestamp({ defaultValue: { kind: "now" } }),
        updatedAt: timestamp({ defaultValue: { kind: "now" } }),
    },
});
