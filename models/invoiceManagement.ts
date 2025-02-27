import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { text, integer, float, timestamp, json } from "@keystone-6/core/fields";

export const carInvoiceManagement = list({
    access: allowAll,
    fields: {
        // Characteristics
        availability: text({ validation: { isRequired: true } }),
        bodywork: text({ validation: { isRequired: true } }),
        warranty: text({ validation: { isRequired: true } }),
        numberOfSeats: integer({ validation: { isRequired: true } }),
        numberOfDoors: integer({ validation: { isRequired: true } }),

        // Transmission
        gearbox: text({ validation: { isRequired: true } }),
        numberOfGears: integer({ validation: { isRequired: true } }),
        transmission: text({ validation: { isRequired: true } }),

        // Performance
        acceleration: float({ label: "0-100 Km/h (seconds)" }),
        maxSpeed: integer({ label: "Maximum Speed (km/h)" }),
        electricRange: integer({ label: "Electric Range (WLTP) (km)" }),

        // Safety Equipment
        safetyEquipment: json(),

        // Exterior Equipment
        exteriorEquipment: json(),

        // Interior Equipment
        interiorEquipment: json(),

        // Powertrain
        numberOfElectricMotors: integer(),
        energy: text(),
        taxHorsepower: integer(),
        powerDIN: integer(),
        battery: text(),
        torque: integer(),

        // Dimensions
        length: float(),
        width: float(),
        height: float(),
        trunkVolume: float(),

        // Consumption
        electricConsumption: float({ label: "Consumption (WLTP)" }),
        normalChargeTime: float({ label: "Normal Charging Time (hours)" }),
        fastChargeTime: float({ label: "Fast Charging Time (hours)" }),

        // Driving Assistance
        drivingAssistance: json(),

        // Audio & Communication
        audioCommunication: json(),

        // Functional Equipment
        functionalEquipment: json(),

        // Metadata
        createdAt: timestamp({ defaultValue: { kind: "now" } }),
        updatedAt: timestamp({ defaultValue: { kind: "now" } }),
    },
});
