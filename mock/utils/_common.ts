/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
// 默认前缀
export enum Apis {
  HOME = '/api/home',
  USER = '/api/user'
}

// 公共返回
export const commonRes = (data: any) => {
  return {
    code: 200,
    data,
    msg: '请求成功'
  }
}
