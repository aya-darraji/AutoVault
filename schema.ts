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

export const lists = {

  User: Users
  

} satisfies Lists
