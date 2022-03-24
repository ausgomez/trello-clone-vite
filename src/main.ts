import { createApp } from 'vue'
import VueClickAway from "vue3-click-away";
import App from './App.vue'
import './index.css'
import router from './router'


createApp(App).use(VueClickAway).use(router).mount('#app')
