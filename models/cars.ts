import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, integer, relationship, select, checkbox, float, timestamp, image } from '@keystone-6/core/fields';
import QRCode from 'qrcode';



export const Cars = list({
  fields: {
    name: text({ validation: { isRequired: true } }),

    model: select({
      options: [
        { label: 'Toyota', value: 'toyota' },
        { label: 'Honda', value: 'honda' },
        { label: 'Ford', value: 'ford' },
        { label: 'Chevrolet', value: 'chevrolet' },
        { label: 'Nissan', value: 'nissan' },
        { label: 'BMW', value: 'bmw' },
        { label: 'Mercedes-Benz', value: 'mercedes' },
        { label: 'Audi', value: 'audi' },
        { label: 'Volkswagen', value: 'volkswagen' },
        { label: 'Hyundai', value: 'hyundai' },
        { label: 'Kia', value: 'kia' },
        { label: 'Subaru', value: 'subaru' },
        { label: 'Mazda', value: 'mazda' },
        { label: 'Tesla', value: 'tesla' },
        { label: 'Lexus', value: 'lexus' },
        { label: 'Jeep', value: 'jeep' },
        { label: 'Dodge', value: 'dodge' },
        { label: 'Ram', value: 'ram' },
        { label: 'Chrysler', value: 'chrysler' },
        { label: 'Buick', value: 'buick' },
        { label: 'GMC', value: 'gmc' },
        { label: 'Cadillac', value: 'cadillac' },
        { label: 'Porsche', value: 'porsche' },
        { label: 'Ferrari', value: 'ferrari' },
        { label: 'Lamborghini', value: 'lamborghini' },
        { label: 'Bentley', value: 'bentley' },
        { label: 'Maserati', value: 'maserati' },
        { label: 'Rolls-Royce', value: 'rolls_royce' },
        { label: 'Jaguar', value: 'jaguar' },
        { label: 'Land Rover', value: 'land_rover' },
        { label: 'Volvo', value: 'volvo' },
        { label: 'Mitsubishi', value: 'mitsubishi' },
        { label: 'Infiniti', value: 'infiniti' },
        { label: 'Acura', value: 'acura' },
        { label: 'Genesis', value: 'genesis' },
      ],
      validation: { isRequired: true },
      ui: { displayMode: 'select' },

    }),

    year: integer({ validation: { isRequired: true } }),

    price: integer({ validation: { isRequired: true } }),

    color: select({
      options: [
        { label: 'Black', value: 'black' },
        { label: 'White', value: 'white' },
        { label: 'Silver', value: 'silver' },
        { label: 'Gray', value: 'gray' },
        { label: 'Blue', value: 'blue' },
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Yellow', value: 'yellow' },
        { label: 'Orange', value: 'orange' },
        { label: 'Brown', value: 'brown' },
        { label: 'Gold', value: 'gold' },
        { label: 'Purple', value: 'purple' },
        { label: 'Pink', value: 'pink' },
      ],
    }),
    bodyType: select({
      options: [
        { label: 'Sedan', value: 'sedan' },
        { label: 'SUV', value: 'suv' },
        { label: 'Truck', value: 'truck' },
        { label: 'Coupe', value: 'coupe' },
        { label: 'Convertible', value: 'convertible' },
        { label: 'Hatchback', value: 'hatchback' },
        { label: 'Wagon', value: 'wagon' },
        { label: 'Van', value: 'van' },
        { label: 'Electric', value: 'electric' },
      ],
    }),

    engineType: select({
      options: [
        { label: 'Gasoline', value: 'gasoline' },
        { label: 'Diesel', value: 'diesel' },
        { label: 'Electric', value: 'electric' },
        { label: 'Hybrid', value: 'hybrid' },
        { label: 'Hydrogen', value: 'hydrogen' },
      ],
    }),

    horsepower: integer(),
    torque: integer(),
    topSpeed: integer(),
    acceleration: text(),
    transmission: select({
      options: [
        { label: 'Manual', value: 'manual' },
        { label: 'Automatic', value: 'automatic' },
        { label: 'CVT', value: 'cvt' },
        { label: 'Dual-Clutch', value: 'dual_clutch' },
      ],
    }),

    drivetrain: select({
      options: [
        { label: 'FWD', value: 'fwd' },
        { label: 'RWD', value: 'rwd' },
        { label: 'AWD', value: 'awd' },
        { label: '4WD', value: '4wd' },
      ],
    }),

    fuelCapacity: float(),
    fuelEconomyCity: float(),
    fuelEconomyHighway: float(),
    fuelEconomyCombined: float(),
    emissionsRating: text(),
    airbags: integer(),

    abs: checkbox(),
    tractionControl: checkbox(),
    laneAssist: checkbox(),
    adaptiveCruiseControl: checkbox(),
    blindSpotMonitor: checkbox(),
    rearViewCamera: checkbox(),
    parkingSensors: checkbox(),
    autonomousDrivingLevel: select({
      options: [
        { label: 'None', value: '0' },
        { label: 'Basic Assist', value: '1' },
        { label: 'Partial Automation', value: '2' },
        { label: 'Conditional Automation', value: '3' },
        { label: 'High Automation', value: '4' },
        { label: 'Full Automation', value: '5' },
      ],
    }),

    seats: integer(),
    seatMaterial: select({
      options: [
        { label: 'Cloth', value: 'cloth' },
        { label: 'Leather', value: 'leather' },
        { label: 'Synthetic Leather', value: 'synthetic_leather' },
        { label: 'Alcantara', value: 'alcantara' },
      ],
    }),
    heatedSeats: checkbox(),
    ventilatedSeats: checkbox(),
    sunroof: checkbox(),
    climateControl: select({
      options: [
        { label: 'Manual AC', value: 'manual' },
        { label: 'Automatic Climate Control', value: 'automatic' },
        { label: 'Multi-Zone Climate Control', value: 'multi_zone' },
      ],
    }),
    infotainmentSystem: text(),
    touchscreenSize: float(),
    wirelessCharging: checkbox(),
    appleCarPlay: checkbox(),
    androidAuto: checkbox(),

    wheels: select({
      options: [
        { label: 'Steel', value: 'steel' },
        { label: 'Alloy', value: 'alloy' },
        { label: 'Carbon Fiber', value: 'carbon_fiber' },
      ],
    }),
    wheelSize: float(),
    ledHeadlights: checkbox(),
    fogLights: checkbox(),
    tintedWindows: checkbox(),

    cargoCapacity: float(),
    towingCapacity: float(),
    roofRack: checkbox(),
    trailerHitch: checkbox(),

    bluetooth: checkbox(),
    wifiHotspot: checkbox(),
    usbPorts: integer(),
    speakerSystem: text(),

    /*agency: relationship({
      ref: 'Agency', many: true, ui: {
        displayMode: 'select',
        labelField: 'agencyFullName',
      }
    }),*/
    
    
    
    
    agency: relationship({
      ref: "Agency", // Utilisation du bon nom
      many: true,
      ui: {
        displayMode: "select",
        labelField: "agencyFullName",
      }
    }),



    
    
    status: select({
      options: [
        { label: 'Available', value: 'available' },
        { label: 'Sold', value: 'sold' },
        { label: 'Reserved', value: 'reserved' },
      ],
      defaultValue: 'available',
    }),
    listedDate: timestamp({ defaultValue: { kind: 'now' } }),
    warrantyYears: integer(),

    images: image({ storage: 'localStorage' }),
    videoURL: text(),

    insuranceStatus: select({
      options: [
        { label: 'Not Insured', value: 'not_insured' },
        { label: 'Insured', value: 'insured' },
        { label: 'Extended Warranty', value: 'extended_warranty' },
      ],
    }),
    registrationValidUntil: timestamp(),
  },
  /***parte qrcode  */
  qrCodeUrl: text(),  // Ajouter un champ pour stocker l'URL du QR Code

  access: allowAll,
  hooks: {
    async afterOperation({ operation, item, context }) {
      if (operation === 'create' || operation === 'update') {
        // Générer le QR Code lors de la création ou mise à jour d'une voiture
        const carUrl = `${process.env.BASE_URL}/cars/${item.id}`; // URL de la page de détail de la voiture
        const qrCode = await QRCode.toDataURL(carUrl); // Générer l'URL du QR code
        
        // Ici, vous pouvez soit envoyer l'image du QR code directement au frontend, soit l'enregistrer dans un autre système de stockage
        // Exemple d'enregistrement dans un stockage externe si nécessaire
      }
    },
  },
});
