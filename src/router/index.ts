// 解构 createRouter 创建路由工厂函数 createWebHistory 历史摸模式
import { createRouter, createWebHistory } from 'vue-router'

import type { App } from 'vue'
// RouteRecordRaw 约束路由对象
import type { RouteRecordRaw } from 'vue-router'
// 路由配置项
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/about/index.vue')
  },
  {
    path: '/unocss',
    component: () => import('@/views/unocss/index.vue')
  },
  {
    path: '/svg',
    component: () => import('@/views/svg/index.vue')
  },
  {
    path: '/rem',
    component: () => import('@/views/rem/index.vue')
  },
  {
    path: '/img',
    component: () => import('@/views/img/index.vue')
  },
  {
    path: '/mock',
    component: () => import('@/views/mock/index.vue')
  }
]

// 创建路由实例
const router = createRouter({
  routes, // 配置
  history: createWebHistory() // 模式
})

// 导出路由注册函数
export const useRouter = (app: App) => {
  app.use(router)
}
