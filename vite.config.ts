import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'

// 自动引入样式
import { useBuild } from './build/build'
import { usePlugins } from './build/plugins'
import { useServer } from './build/server'
import { wrapperEnv } from './build/utils'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 模式
  const isBuild = command === 'build'
  // 获取当前文件夹地址 current working directory
  const root = process.cwd()
  // 读取包含 VITE_ 开头的环境变量
  const env = loadEnv(mode, root)
  // 环境变量值转换
  const viteEnv = wrapperEnv(env)

  return {
    plugins: usePlugins(isBuild, viteEnv),
    build: useBuild(viteEnv),
    server: useServer(viteEnv),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      // 预加载
      preprocessorOptions: {
        // 全局样式变量预注入
        scss: {
          additionalData: `
            @use "./src/styles/variables.scss" as *;
            @use "./src/styles/mixin.scss" as *;`,
          javascriptEnabled: true
        }
      }
    }
  }
})
