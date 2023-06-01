import {defineStore} from 'pinia'

import {auth} from '@/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import router from '@/router'
export const useUserStore = defineStore('user', {
    state: () =>({
        userData: null,
    }),

    actions:{
        async registerUser(email, password){
            try {
                const createUser = createUserWithEmailAndPassword(auth, email, password)
                const userCreate = createUser.user;

                this.userData = {
                    email: userCreate.email,
                    uid: userCreate.uid
                }

                router.push("login")

            } catch (error) {
                return error.code
                
                console.log(error.code)
            }
        }
    }
})