import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import firebase from './firebase'
import './index.css'
import router from './router'

const app = createApp(App)

app.use(router)

app.use(firebase)

app.mount('#app')
