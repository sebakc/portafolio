import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/normalize.css'
import './assets/scss/app.scss'

createApp(App).use(router).mount('#app')
