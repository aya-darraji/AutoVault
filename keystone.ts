
import { config } from '@keystone-6/core'

import { lists } from './schema'


import { withAuth, session } from './auth'

export default withAuth(
  config({
    db: {
      provider: 'sqlite',
      url: 'file:./keystone.db',
    },
    lists,
    session,
    storage: {
      localStorage: {
        kind: 'local',
        type: 'image',
        generateUrl: path => `http://localhost:3000/images${path}`,
        serverRoute: {
          path: '/images',
        },
        storagePath: 'public/images',
      },
    }
  })
)
