
//import { list } from '@keystone-6/core';
//import gql from 'graphql-tag'
//import { text, integer, select, relationship, image, timestamp } from '@keystone-6/core/fields';
import { type TypeInfo, type Lists } from '.keystone/types'
import { Users } from './models/users'
import { Agencies } from './models/agency'
import { Cars } from './models/cars'
import { Invoices } from './models/invoice'
import { type ListConfig } from '@keystone-6/core'
import { Settings } from './models/settings';  // Mise à jour du fichier*/
import { ResponsiveConfig } from './models/responsiveConfig';  
import { ContactInquiry } from './models/contactInquiry';  
import { ReviewsAndRatings } from './models/reviewsAndRatings';  
import { Media } from './models/media'; 
import { CarSpecifications } from './models/carSpecification'; 
import { CarListings  } from './models/carListings'; 

import { CarSearchFilter  } from './models/carSearchFilter'; 

export const lists = {

  User: Users ,
  Agency: Agencies,
  Car:Cars,
  Invoice:Invoices,
  setting:Settings,
  responsiveConfig:ResponsiveConfig,
  reviewsAndRating:ReviewsAndRatings,
  mediaUpload:Media,
  carSpecification:CarSpecifications,
  contactInquiry:ContactInquiry,
  carSearchFilter:CarSearchFilter,
  carListing :CarListings


} satisfies Lists

/*
export const queries = {
  allCarsWithAgency: graphql`
    query {
      allCars {
        id
        name
        model
        price
        color
        year
        agency {
          id
          agencyFullName
          agencyAvatar
          agencyPhoneNumber
        }
      }
    }
  `,
};
*/