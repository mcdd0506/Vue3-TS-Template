// 全局样式引入
import '@/styles/index.scss'
// eslint-disable-next-line import/no-unresolved
import 'virtual:uno.css' // uno.css

import { createApp } from 'vue'

import usePinia from '@/store'

import App from './App.vue'
import { useRouter } from './router'

const app = createApp(App)

useRouter(app)
usePinia(app)

app.mount('#app')
