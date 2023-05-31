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
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: () => import('@/pages/RegisterPage.vue')
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;