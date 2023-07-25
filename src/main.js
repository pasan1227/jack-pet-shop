import './assets/main.css'

import { initializeApp } from 'firebase/app'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBars, faTimes)

const app = createApp(App)

const firebaseConfig = {
  apiKey: "AIzaSyBWIaKhISAJo0wy2z-XrBKR-8wY0S8643g",
  authDomain: "jack-pet-supplies-2e529.firebaseapp.com",
  projectId: "jack-pet-supplies-2e529",
  storageBucket: "jack-pet-supplies-2e529.appspot.com",
  messagingSenderId: "631725252767",
  appId: "1:631725252767:web:b0bfd305acab86d2cf42aa",
  measurementId: "G-CK4V9C0L4F"
};
initializeApp(firebaseConfig)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
