import { createApp } from 'vue'

import usePinia from '@/store'

import App from './App.vue'
import { useRouter } from './router'

const app = createApp(App)

useRouter(app)
usePinia(app)

app.mount('#app')
