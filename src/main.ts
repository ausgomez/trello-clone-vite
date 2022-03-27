import { createApp } from 'vue'
import VueClickAway from "vue3-click-away";
import App from './App.vue'
import './index.css'
import router from './router'
import { createPinia, PiniaVuePlugin } from 'pinia'

const pinia = createPinia()


createApp(App).use(VueClickAway).use(router).use(pinia).mount('#app')
