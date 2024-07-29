// 插件配置 总入口
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { autoImportPlugin } from './autoImportPlugin'
import { px2remPlugin } from './px2remPlugin'
import { svgLoaderPlugin } from './svgLoaderPlugin'
import { unocssPlugin } from './unocssPlugin'
import { visualizerPlugin } from './visualizerPlugin'
import { viteCompressionPlugin } from './viteCompressionPlugin'
import { viteImageOptimizerPlugin } from './viteImageOptimizerPlugin'
import { viteRestartPlugin } from './viteRestartPlugin'
import { vueDevToolsPlugin } from './vueDevToolsPlugin'

export const usePlugins = (isBuild: boolean, viteEnv: ViteEnv) => {
  const { VITE_OPEN_GZIP, VITE_OPEN_VISUALIZER, VITE_OPEN_MOCK, VITE_MOCK_ALL } = viteEnv

  const plugins = [vue(), vueJsx()]

  // 开发环境&生产环境加载的插件
  plugins.push(...autoImportPlugin())
  plugins.push(px2remPlugin())
  plugins.push(svgLoaderPlugin())
  plugins.push(unocssPlugin())

  // 开发需要
  if (!isBuild) {
    plugins.push(vueDevToolsPlugin())
    plugins.push(viteRestartPlugin())
  }

  // 生产环境需要
  if (isBuild) {
    // 图片压缩
    plugins.push(viteImageOptimizerPlugin())

    VITE_OPEN_GZIP && plugins.push(viteCompressionPlugin())
    VITE_OPEN_VISUALIZER && plugins.push(visualizerPlugin())
  }

  return plugins
}
