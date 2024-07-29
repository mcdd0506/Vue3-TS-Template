export const useServer = (viteEnv: ViteEnv) => ({
  // 监听所有公共ip
  // host: '0.0.0.0',
  cors: true,
  port: viteEnv.VITE_PORT,
  proxy: {
    // 前缀
    '/dev': {
      target: 'http://www.example.com',
      changeOrigin: true,
      // 前缀重写
      rewrite: (path: string) => path.replace(/^\/api/, '/api')
    }
  }
})
