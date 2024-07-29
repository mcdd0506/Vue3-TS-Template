import { MockMethod } from 'vite-plugin-mock'

import { Apis, commonRes } from '../utils/_common'

export default [
  {
    url: `${Apis.HOME}/getData`,
    method: 'get',
    response: () => {
      return commonRes({
        name: 'this is mock name'
      })
    }
  }
] as MockMethod[]
