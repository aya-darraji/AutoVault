"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core12 = require("@keystone-6/core");

// models/users.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var Users = (0, import_core.list)({
  access: import_access.allowAll,
  fields: {
    fullName: (0, import_fields.text)({ validation: { isRequired: true } }),
    email: (0, import_fields.text)({
      validation: { isRequired: true },
      isIndexed: "unique"
    }),
    password: (0, import_fields.password)({ validation: { isRequired: true } }),
    phone: (0, import_fields.text)({ validation: { isRequired: true } }),
    address: (0, import_fields.text)({ validation: { isRequired: true } }),
    createdAt: (0, import_fields.timestamp)({
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields.timestamp)({
      defaultValue: { kind: "now" }
    })
  }
});

// models/agency.ts
var import_core2 = require("@keystone-6/core");
var import_access2 = require("@keystone-6/core/access");
var import_fields2 = require("@keystone-6/core/fields");
var Agencies = (0, import_core2.list)({
  access: import_access2.allowAll,
  fields: {
    agencyName: (0, import_fields2.text)({ validation: { isRequired: true } }),
    agencyPhoneNumber: (0, import_fields2.text)({
      validation: {
        isRequired: true,
        match: { regex: /^\d{8}$/ }
      }
    }),
    address: (0, import_fields2.text)({ validation: { isRequired: true } }),
    fullName: (0, import_fields2.text)({ validation: { isRequired: true } }),
    createdAt: (0, import_fields2.timestamp)({
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields2.timestamp)({
      defaultValue: { kind: "now" }
    })
  }
});

// models/carListingManagement.ts
var import_core3 = require("@keystone-6/core");
var import_access3 = require("@keystone-6/core/access");
var import_fields3 = require("@keystone-6/core/fields");
var CarListing = (0, import_core3.list)({
  access: import_access3.allowAll,
  fields: {
    modelName: (0, import_fields3.text)({ validation: { isRequired: true } }),
    carBrand: (0, import_fields3.text)({ validation: { isRequired: true } }),
    mileage: (0, import_fields3.integer)({ validation: { isRequired: true } }),
    year: (0, import_fields3.integer)({ validation: { isRequired: true } }),
    series: (0, import_fields3.text)(),
    color: (0, import_fields3.text)({ validation: { isRequired: true } }),
    // Nouveau champ ajouté
    category: (0, import_fields3.select)({
      options: [
        { label: "Sedan", value: "sedan" },
        { label: "SUV", value: "suv" },
        { label: "Truck", value: "truck" },
        { label: "Coupe", value: "coupe" }
      ],
      validation: { isRequired: true }
    }),
    price: (0, import_fields3.integer)({ validation: { isRequired: true } }),
    /*avatar: image({ storage: "my_image_storage" }), // Assurez-vous que le nom correspond*/
    createdAt: (0, import_fields3.timestamp)({ defaultValue: { kind: "now" } }),
    updatedAt: (0, import_fields3.timestamp)({ defaultValue: { kind: "now" } }),
    owner: (0, import_fields3.relationship)({ ref: "User", many: false })
  }
});

// models/invoiceManagement.ts
var import_core4 = require("@keystone-6/core");
var import_access4 = require("@keystone-6/core/access");
var import_fields4 = require("@keystone-6/core/fields");
var carInvoiceManagement = (0, import_core4.list)({
  access: import_access4.allowAll,
  fields: {
    // Characteristics
    availability: (0, import_fields4.text)({ validation: { isRequired: true } }),
    bodywork: (0, import_fields4.text)({ validation: { isRequired: true } }),
    warranty: (0, import_fields4.text)({ validation: { isRequired: true } }),
    numberOfSeats: (0, import_fields4.integer)({ validation: { isRequired: true } }),
    numberOfDoors: (0, import_fields4.integer)({ validation: { isRequired: true } }),
    // Transmission
    gearbox: (0, import_fields4.text)({ validation: { isRequired: true } }),
    numberOfGears: (0, import_fields4.integer)({ validation: { isRequired: true } }),
    transmission: (0, import_fields4.text)({ validation: { isRequired: true } }),
    // Performance
    acceleration: (0, import_fields4.float)({ label: "0-100 Km/h (seconds)" }),
    maxSpeed: (0, import_fields4.integer)({ label: "Maximum Speed (km/h)" }),
    electricRange: (0, import_fields4.integer)({ label: "Electric Range (WLTP) (km)" }),
    // Safety Equipment
    safetyEquipment: (0, import_fields4.json)(),
    // Exterior Equipment
    exteriorEquipment: (0, import_fields4.json)(),
    // Interior Equipment
    interiorEquipment: (0, import_fields4.json)(),
    // Powertrain
    numberOfElectricMotors: (0, import_fields4.integer)(),
    energy: (0, import_fields4.text)(),
    taxHorsepower: (0, import_fields4.integer)(),
    powerDIN: (0, import_fields4.integer)(),
    battery: (0, import_fields4.text)(),
    torque: (0, import_fields4.integer)(),
    // Dimensions
    length: (0, import_fields4.float)(),
    width: (0, import_fields4.float)(),
    height: (0, import_fields4.float)(),
    trunkVolume: (0, import_fields4.float)(),
    // Consumption
    electricConsumption: (0, import_fields4.float)({ label: "Consumption (WLTP)" }),
    normalChargeTime: (0, import_fields4.float)({ label: "Normal Charging Time (hours)" }),
    fastChargeTime: (0, import_fields4.float)({ label: "Fast Charging Time (hours)" }),
    // Driving Assistance
    drivingAssistance: (0, import_fields4.json)(),
    // Audio & Communication
    audioCommunication: (0, import_fields4.json)(),
    // Functional Equipment
    functionalEquipment: (0, import_fields4.json)(),
    // Metadata
    createdAt: (0, import_fields4.timestamp)({ defaultValue: { kind: "now" } }),
    updatedAt: (0, import_fields4.timestamp)({ defaultValue: { kind: "now" } })
  }
});

// models/searchFiltering.ts
var import_core5 = require("@keystone-6/core");
var import_access5 = require("@keystone-6/core/access");
var import_fields5 = require("@keystone-6/core/fields");
var SearchFiltering = (0, import_core5.list)({
  access: import_access5.allowAll,
  fields: {
    make: (0, import_fields5.text)({ validation: { isRequired: true } }),
    // Marque du véhicule
    model: (0, import_fields5.text)({ validation: { isRequired: true } }),
    // Modèle
    year: (0, import_fields5.integer)({ validation: { isRequired: true } }),
    // Année
    price: (0, import_fields5.float)({ validation: { isRequired: true } }),
    // Prix
    bodywork: (0, import_fields5.select)({
      options: [
        { label: "Berline", value: "berline" },
        { label: "SUV", value: "suv" },
        { label: "Coup\xE9", value: "coupe" },
        { label: "Cabriolet", value: "cabriolet" },
        { label: "Break", value: "break" }
      ]
    }),
    gearbox: (0, import_fields5.select)({
      options: [
        { label: "Manuelle", value: "manual" },
        { label: "Automatique", value: "automatic" }
      ]
    }),
    fuelType: (0, import_fields5.select)({
      options: [
        { label: "Essence", value: "petrol" },
        { label: "Diesel", value: "diesel" },
        { label: "\xC9lectrique", value: "electric" },
        { label: "Hybride", value: "hybrid" }
      ]
    }),
    mileage: (0, import_fields5.integer)(),
    // Kilométrage
    color: (0, import_fields5.text)(),
    // Couleur
    doors: (0, import_fields5.integer)(),
    // Nombre de portes
    seats: (0, import_fields5.integer)(),
    // Nombre de sièges
    createdAt: (0, import_fields5.timestamp)({ defaultValue: { kind: "now" } }),
    updatedAt: (0, import_fields5.timestamp)({ defaultValue: { kind: "now" } })
  }
});

// models/authentication.ts
var import_core6 = require("@keystone-6/core");
var import_access6 = require("@keystone-6/core/access");
var import_fields6 = require("@keystone-6/core/fields");
var UserAuthentication = (0, import_core6.list)({
  access: import_access6.allowAll,
  fields: {
    fullName: (0, import_fields6.text)({ validation: { isRequired: true } }),
    email: (0, import_fields6.text)({
      validation: { isRequired: true },
      isIndexed: "unique"
    }),
    password: (0, import_fields6.password)({ validation: { isRequired: true } }),
    role: (0, import_fields6.select)({
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" }
      ],
      defaultValue: "user",
      validation: { isRequired: true }
    }),
    phone: (0, import_fields6.text)({ validation: { isRequired: true } }),
    address: (0, import_fields6.text)({ validation: { isRequired: true } }),
    createdAt: (0, import_fields6.timestamp)({
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields6.timestamp)({
      defaultValue: { kind: "now" }
    })
  }
});

// models/homePage.ts
var import_core7 = require("@keystone-6/core");
var import_access7 = require("@keystone-6/core/access");
var import_fields7 = require("@keystone-6/core/fields");
var CarBrand = (0, import_core7.list)({
  access: import_access7.allowAll,
  fields: {
    name: (0, import_fields7.text)({ validation: { isRequired: true } }),
    logo: (0, import_fields7.image)({ storage: "local_images" }),
    createdAt: (0, import_fields7.timestamp)({ defaultValue: { kind: "now" } })
  }
});
var HomePage = (0, import_core7.list)({
  access: import_access7.allowAll,
  fields: {
    title: (0, import_fields7.text)({ validation: { isRequired: true } }),
    description: (0, import_fields7.text)(),
    images: (0, import_fields7.relationship)({ ref: "CarImage", many: true }),
    featuredBrands: (0, import_fields7.relationship)({ ref: "CarBrand", many: true }),
    createdAt: (0, import_fields7.timestamp)({ defaultValue: { kind: "now" } })
  }
});
var CarImage = (0, import_core7.list)({
  access: import_access7.allowAll,
  fields: {
    title: (0, import_fields7.text)(),
    image: (0, import_fields7.image)({ storage: "local_images" }),
    uploadedAt: (0, import_fields7.timestamp)({ defaultValue: { kind: "now" } })
  }
});

// models/reviews.ts
var import_core8 = require("@keystone-6/core");
var import_access8 = require("@keystone-6/core/access");
var import_fields8 = require("@keystone-6/core/fields");
var Reviews = (0, import_core8.list)({
  access: import_access8.allowAll,
  fields: {
    rating: (0, import_fields8.integer)({
      validation: { isRequired: true, min: 1, max: 5 }
    }),
    reviewText: (0, import_fields8.text)({
      ui: {
        displayMode: "textarea"
      }
    }),
    user: (0, import_fields8.relationship)({ ref: "User", many: false }),
    car: (0, import_fields8.relationship)({ ref: "carListingManagement", many: false }),
    createdAt: (0, import_fields8.timestamp)({
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields8.timestamp)({
      defaultValue: { kind: "now" }
    })
  }
});

// models/agencyStatistics.ts
var import_core9 = require("@keystone-6/core");
var import_access9 = require("@keystone-6/core/access");
var import_fields9 = require("@keystone-6/core/fields");
var AgencyStatistics = (0, import_core9.list)({
  access: import_access9.allowAll,
  fields: {
    agencyName: (0, import_fields9.text)({ validation: { isRequired: true } }),
    viewCount: (0, import_fields9.integer)({ defaultValue: 0 }),
    lastSeen: (0, import_fields9.timestamp)({ defaultValue: { kind: "now" } })
  }
});

// models/carScanStatistics.ts
var import_core10 = require("@keystone-6/core");
var import_access10 = require("@keystone-6/core/access");
var import_fields10 = require("@keystone-6/core/fields");
var CarScanStatistics = (0, import_core10.list)({
  access: import_access10.allowAll,
  fields: {
    agency: (0, import_fields10.relationship)({ ref: "Agency", many: false }),
    carName: (0, import_fields10.text)({ validation: { isRequired: true } }),
    scanCount: (0, import_fields10.integer)({ defaultValue: 0 }),
    lastScanned: (0, import_fields10.timestamp)({ defaultValue: { kind: "now" } })
  }
});

// models/carPurchases.ts
var import_core11 = require("@keystone-6/core");
var import_access11 = require("@keystone-6/core/access");
var import_fields11 = require("@keystone-6/core/fields");
var CarPurchases = (0, import_core11.list)({
  access: import_access11.allowAll,
  fields: {
    agency: (0, import_fields11.relationship)({ ref: "Agency", many: false }),
    carName: (0, import_fields11.text)({ validation: { isRequired: true } }),
    purchaseCount: (0, import_fields11.integer)({ defaultValue: 0 }),
    lastPurchase: (0, import_fields11.timestamp)({ defaultValue: { kind: "now" } })
  }
});

// schema.ts
var lists = {
  User: Users,
  Agency: Agencies,
  carListingManagement: CarListing,
  invoiceManagement: carInvoiceManagement,
  searchFiltering: SearchFiltering,
  authentication: UserAuthentication,
  reviews: Reviews,
  // Ajout des nouvelles statistiques
  agencyStatistics: AgencyStatistics,
  carScanStatistics: CarScanStatistics,
  carPurchases: CarPurchases,
  homePage: HomePage,
  carBrand: CarBrand,
  carImage: CarImage
  /*carMedia: CarMedia*/
};

// auth.ts
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  sessionData: "createdAt",
  secretField: "password",
  initFirstItem: {
    fields: ["fullName", "email", "password"]
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: process.env.SESSION_SECRET
});

// keystone.ts
var keystone_default = withAuth(
  (0, import_core12.config)({
    db: {
      provider: "sqlite",
      url: "file:./keystone.db"
    },
    lists,
    session
  })
);
//# sourceMappingURL=config.js.map
