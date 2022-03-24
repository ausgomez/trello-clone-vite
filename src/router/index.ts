import { createRouter, createWebHistory } from 'vue-router';
import homePage from '../pages/home.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: homePage },
    ]
})

export default router;