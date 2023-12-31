import './assets/main.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, {})
app.mount('#app')
