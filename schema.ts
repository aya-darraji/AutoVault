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
import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { type Lists } from '.keystone/types'
import { Users } from './models/users'
import { UsersAgency } from './models/UsersAgency'

export const lists = {

  User: Users,
  UsersAgency:UsersAgency
  
  

} satisfies Lists