import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import('@/pages/HomePage.vue')
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: () => import('@/pages/LoginPage.vue')
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;