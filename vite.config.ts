import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import { visualizer } from 'rollup-plugin-visualizer'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
// import progress from 'vite-plugin-progress'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { px2rem } from 'vite-plugin-px2rem'
import ViteRestart from 'vite-plugin-restart'
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'
import vueDevTools from 'vite-plugin-vue-devtools'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // 监听所有公共 ip
    // host: '0.0.0.0',
    cors: true,
    port: 3300,
    proxy: {
      // 前缀
      '/api': {
        target: 'http://www.example.com',
        changeOrigin: true,
        // 前缀重写
        rewrite: (path: string) => path.replace(/^\/api/, '/api')
      }
    }
  },
  build: {
    // 10kb 以下，转 Base64
    assetsInlineLimit: 1024 * 10,
    // chunkSizeWarningLimit: 1500,//配置文件大小提醒限制，默认 500
    rollupOptions: {
      output: {
        // 每个 node_modules 模块分成一个 js 文件
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            // return 'vendor' // 第三方依赖合并在一起
            // 把第三方依赖抽离出来
            return id.toString().split('node_modules/.pnpm/')[1].split('/')[0].toString()
          }
          return undefined
        },
        // 用于从入口点创建的块的打包输出格式 [name] 表示文件名,[hash] 表示该文件内容 hash 值
        entryFileNames: 'assets/js/[name].[hash].js', // 用于命名代码拆分时创建的共享块的输出命名
        chunkFileNames: 'assets/js/[name].[hash].js', // 用于输出静态资源的命名，[ext] 表示文件扩展名
        assetFileNames: 'assets/[ext]/[name].[hash].[ext]'
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      resolvers: [
        ElementPlusResolver() // Auto import icon components
      ],
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
      dts: './types/auto-imports.d.ts',
      // eslint 报错解决：'ref' is not defined
      eslintrc: {
        // 默认 false, true 启用生成。生成一次就可以，避免每次工程启动都生成，一旦生成配置文件之后，最好把 enable 关掉，即改成 false。结合文档 1
        enabled: false
        // 否则这个文件每次会在重新加载的时候重新生成，这会导致 eslint 有时会找不到这个文件。当需要更新配置文件的时候，再重新打开
        // filepath: './.eslintrc-auto-import.json', // 默认就是 ./.eslintrc-auto-import.json
        // globalsPropValue: true // 默认 true
      }
    }),
    Components({
      resolvers: [
        ElementPlusResolver()
        // Auto register icon components
        // 自动注册图标组件
      ],
      dts: './types/components.d.ts'
    }),
    createStyleImportPlugin({
      resolves: [ElementPlusResolve()],
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name: string) => {
            return `element-plus/theme-chalk/${name}.css`
          }
        }
      ]
    }),
    UnoCSS(),
    px2rem({
      width: 750,
      rootFontSize: 16
    }),
    viteCompression({
      verbose: true, // 默认即可
      disable: false, // 开启压缩(不禁用)，默认即可
      deleteOriginFile: false, // 删除源文件
      threshold: 10240, // 压缩前最小文件大小
      algorithm: 'gzip', // 压缩算法
      ext: '.gz' // 文件类型
    }),
    // progress(),
    ViteRestart({
      restart: ['*.config.[jt]s', '**/config/*.[jt]s', '*.config.cjs']
    }),
    visualizer({
      open: true, // 注意这里要设置为 true，否则无效
      gzipSize: true,
      brotliSize: true
    }),
    ViteImageOptimizer()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
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
})
