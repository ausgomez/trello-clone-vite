import { createRouter, createWebHistory } from 'vue-router';
import homePage from '../pages/home.vue';
import testPage from '../pages/test.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: homePage },
        { path: '/test', component: testPage },
    ]
})

export default router;