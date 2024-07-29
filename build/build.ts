export const useBuild = (viteEnv: ViteEnv) => {
  const { VITE_CHECK } = viteEnv
  return {
    // 10kb 以下，转 Base64
    assetsInlineLimit: 1024 * 10,
    // chunkSizeWarningLimit: 1500,//配置文件大小提醒限制，默认 500
    rollupOptions: {
      output: {
        // 每个 node_modules 模块分成一个 js 文件
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            return VITE_CHECK
              ? id.toString().split('node_modules/.pnpm/')[1].split('/')[0].toString()
              : 'vendor'
          }
          return undefined
        },
        // 用于从入口点创建的块的打包输出格式 [name] 表示文件名,[hash] 表示该文件内容 hash 值
        entryFileNames: 'assets/js/[name].[hash].js', // 用于命名代码拆分时创建的共享块的输出命名
        chunkFileNames: 'assets/js/[name].[hash].js', // 用于输出静态资源的命名，[ext] 表示文件扩展名
        assetFileNames: 'assets/[ext]/[name].[hash].[ext]'
      }
    }
  }
}
