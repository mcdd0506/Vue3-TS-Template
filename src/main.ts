import { createApp } from 'vue'

import App from './App.vue'
import { useRouter } from './router'

const app = createApp(App)

// 使用路由
useRouter(app)

app.mount('#app')
