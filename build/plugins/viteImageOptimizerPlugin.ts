// 图片压缩
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export const viteImageOptimizerPlugin = () =>
  ViteImageOptimizer({
    png: {
      // https://sharp.pixelplumbing.com/api-output#png
      quality: 60
    },
    jpeg: {
      // https://sharp.pixelplumbing.com/api-output#jpeg
      quality: 60
    },
    jpg: {
      // https://sharp.pixelplumbing.com/api-output#jpeg
      quality: 60
    }
  })
