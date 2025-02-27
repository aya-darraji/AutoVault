import { list } from '@keystone-6/core'
import { allowAll } from '@keystone-6/core/access'

import {
  text,
  relationship,
  password,
  timestamp,
  select,
} from '@keystone-6/core/fields'
import { document } from '@keystone-6/fields-document'
import { type Lists } from '.keystone/types'
import { Users } from './models/users'
import { Agencies } from './models/agency'
import { CarListing } from './models/carListingManagement'
import { carInvoiceManagement } from './models/invoiceManagement'
import { SearchFiltering } from './models/searchFiltering'
import { UserAuthentication } from './models/authentication'
//import { HomePage, CarBrand, CarImage } from './models/homePage';
import { Reviews } from './models/reviews'
// Importation des modèles de statistiques
import { AgencyStatistics } from './models/agencyStatistics';
import { CarScanStatistics } from './models/carScanStatistics';
import { CarPurchases } from './models/carPurchases';
/*import { CarMedia } from "./models/carMedia"; */

export const lists = {

  User: Users,
  Agency: Agencies,
  carListingManagement:CarListing,
  invoiceManagement:carInvoiceManagement,
  searchFiltering:SearchFiltering,
  authentication:UserAuthentication,
  reviews: Reviews,
  // Ajout des nouvelles statistiques
  agencyStatistics: AgencyStatistics,
  carScanStatistics: CarScanStatistics,
  carPurchases: CarPurchases,
  /*homePage: HomePage,
  carBrand: CarBrand,
  carImage: CarImage*/
 
  /*carMedia: CarMedia*/


} satisfies Lists
