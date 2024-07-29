// createPinia 函数并不需要显示引入 配置有自动导入
// 持久化 pinia 插件
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 创建 pinia 实例
const pinia = createPinia()
// 使用持久化插件
pinia.use(piniaPluginPersistedstate)
// 函数式注入 pinia
const usePinia = (app: any) => {
  app.use(pinia)
}

export default usePinia
