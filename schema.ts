
import { type TypeInfo, type Lists } from '.keystone/types'
import { Users } from './models/users'
import { Agencies } from './models/agency'
import { Cars } from './models/cars'
import { Invoices } from './models/invoice'
import { type ListConfig } from '@keystone-6/core'
//test

export const lists = {

  User: Users ,
  Agency: Agencies,
  Car:Cars,
  Invoice:Invoices,

} satisfies Lists
