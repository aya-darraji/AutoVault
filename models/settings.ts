import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, select, checkbox, integer, float } from "@keystone-6/core/fields";

export const Settings = list({
  access: allowAll,
  fields: {
    brand: select({
      options: [
        { label: "Toyota", value: "toyota" },
        { label: "Honda", value: "honda" },
        { label: "Ford", value: "ford" },
        { label: "Chevrolet", value: "chevrolet" },
        { label: "Nissan", value: "nissan" },
        { label: "BMW", value: "bmw" },
        { label: "Mercedes-Benz", value: "mercedes" },
        { label: "Audi", value: "audi" },
        { label: "Volkswagen", value: "volkswagen" },
        { label: "Hyundai", value: "hyundai" },
        { label: "Kia", value: "kia" },
        { label: "Tesla", value: "tesla" },
      ],
      validation: { isRequired: true },
      ui: { displayMode: "select" },
    }),
    bodyType: select({
      options: [
        { label: "Sedan", value: "sedan" },
        { label: "SUV", value: "suv" },
        { label: "Truck", value: "truck" },
        { label: "Coupe", value: "coupe" },
        { label: "Convertible", value: "convertible" },
        { label: "Hatchback", value: "hatchback" },
        { label: "Wagon", value: "wagon" },
        { label: "Van", value: "van" },
        { label: "Electric", value: "electric" },
      ],
    }),
    engineType: select({
      options: [
        { label: "Gasoline", value: "gasoline" },
        { label: "Diesel", value: "diesel" },
        { label: "Electric", value: "electric" },
        { label: "Hybrid", value: "hybrid" },
        { label: "Hydrogen", value: "hydrogen" },
      ],
    }),
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
    climateControl: select({
      options: [
        { label: "Manual AC", value: "manual" },
        { label: "Automatic Climate Control", value: "automatic" },
        { label: "Multi-Zone Climate Control", value: "multi_zone" },
      ],
    }),
    wheels: select({
      options: [
        { label: "Steel", value: "steel" },
        { label: "Alloy", value: "alloy" },
        { label: "Carbon Fiber", value: "carbon_fiber" },
      ],
    }),
    heatedSeats: checkbox(),
    ventilatedSeats: checkbox(),
    sunroof: checkbox(),
    bluetooth: checkbox(),
    wifiHotspot: checkbox(),
    appleCarPlay: checkbox(),
    androidAuto: checkbox(),
    airbags: integer(),
    warrantyYears: integer(),
    fuelCapacity: float(),
  },
});
