import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, integer, select, relationship, image, float, timestamp } from "@keystone-6/core/fields";

export const CarSpecifications = list({
    access: allowAll,
    fields: {
        //car: relationship({ ref: "Cars", many: false, ui: { displayMode: "select", labelField: "name" } }),
        car: relationship({ ref: "Car", many: false, ui: { displayMode: "select", labelField: "name" } }),

        //agency: relationship({ ref: "Agencies", many: false, ui: { displayMode: "select", labelField: "agencyFullName" } }),
        agency: relationship({ ref: "Agency", many: false, ui: { displayMode: "select", labelField: "agencyFullName" } }),

        engineType: select({
            options: [
                { label: "Gasoline", value: "gasoline" },
                { label: "Diesel", value: "diesel" },
                { label: "Electric", value: "electric" },
                { label: "Hybrid", value: "hybrid" },
                { label: "Hydrogen", value: "hydrogen" },
            ],
        }),
        horsepower: integer(),
        torque: integer(),
        topSpeed: integer(),
        acceleration: text(),
        transmission: select({
            options: [
                { label: "Manual", value: "manual" },
                { label: "Automatic", value: "automatic" },
                { label: "CVT", value: "cvt" },
                { label: "Dual-Clutch", value: "dual_clutch" },
            ],
        }),
        drivetrain: select({
            options: [
                { label: "FWD", value: "fwd" },
                { label: "RWD", value: "rwd" },
                { label: "AWD", value: "awd" },
                { label: "4WD", value: "4wd" },
            ],
        }),
        fuelCapacity: float(),
        fuelEconomyCity: float(),
        fuelEconomyHighway: float(),
        emissionsRating: text(),
        airbags: integer(),
        warrantyYears: integer(),
        images: image({ storage: "localStorage" }),
        listedDate: timestamp({ defaultValue: { kind: "now" } }),
    },
});
