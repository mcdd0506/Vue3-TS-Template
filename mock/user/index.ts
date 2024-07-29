import { MockMethod } from 'vite-plugin-mock'

import { Apis, commonRes } from '../utils/_common'

export default [
  {
    // isConnected 表示后端已接入此接口 生产不使用 mock
    // isConnected: true,
    url: `${Apis.USER}/login`,
    method: 'post',
    response: () => {
      return commonRes({
        token: 'this is mock token '
      })
    }
  }
] as MockMethod[]
