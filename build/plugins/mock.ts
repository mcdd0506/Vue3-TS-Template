import { viteMockServe } from 'vite-plugin-mock'

export const mockPlugin = (mockAll: boolean) => {
  return viteMockServe({
    mockPath: 'mock', // 指向 mock 下的文件 自动读取所有文件里面的所有接口
    ignore: /^_/, // 忽略下划线开头的文件
    watchFiles: true, // 监听文件内容变更   默认 true
    localEnabled: true, // 开发环境开启 mock
    prodEnabled: true, // 生产环境开启 mock
    logger: true, // 默认 true
    // injectCode 相对路径是相对于 src/main.ts
    injectCode: `
        import { setupProdMockServer } from '../mock/utils/_mockProdServer';

        setupProdMockServer(${mockAll});
      `
    // injectFile 把 injectCode 自动注入 src/main.ts 里面 不用手写注入代码
    // injectFile: resolve('src/main.ts'),
  })
}
