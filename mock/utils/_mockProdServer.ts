import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

//  mockProdServer.ts

// 可以使用 import.meta.glob 功能来进行全部导入
const modules: Record<string, any> = import.meta.glob('../../mock/**/*.ts', {
  eager: true
})

const mockModules: any[] = []

Object.entries(modules).forEach(([key, value]) => {
  ;/_/.test(key) || mockModules.push(...value.default)
})

export function setupProdMockServer(mockAll: boolean) {
  // 如果 mockAll 为 true，则全部启用，否则只启用不包含 isConnected 的 mock 接口
  createProdMockServer(mockAll ? mockModules : mockModules.filter((item) => !item.isConnected))
}
