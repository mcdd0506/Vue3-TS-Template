import { visualizer } from 'rollup-plugin-visualizer'

export const visualizerPlugin = () =>
  visualizer({
    open: true, // 注意这里要设置为 true，否则无效
    gzipSize: true,
    brotliSize: true
  })
