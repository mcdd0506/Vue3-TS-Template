import { createRouter, createWebHistory } from 'vue-router'

import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

// 定义路由规则
const routes: RouteRecordRaw[] = [
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
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 为 app 提供路由
export const useRouter = (app: App) => {
  app.use(router)
}
