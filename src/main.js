import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import getConfig from './utils/config'

const app = createApp(App)

app.config.globalProperties.$config = getConfig()

app.use(router)

app.mount('#app')
