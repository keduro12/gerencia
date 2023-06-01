import { createRouter, createWebHistory } from "vue-router";
import {useUserStore} from "@/store/User.js"

const requireAuth = async(to, from, next) =>{
    const useStore = useUserStore();
    const user = await useStore.currentUser()

    if(user){
        next();
    }else{
        next("/login")
    }
}


const routes = [
    {
        path: '/',
        name: 'HomePage',
        beforeEnter: requireAuth,
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