import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createVfm } from 'vue-final-modal';

import './assets/main.css'

const app = createApp(App)

app.use(router)

const vfm = createVfm();
app.use(vfm);

app.mount('#app')
