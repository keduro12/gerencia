import {defineStore} from 'pinia'

import {auth} from '@/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from 'firebase/auth'

import router from '@/router'
import { onMounted } from 'vue'
export const useUserStore = defineStore('user', {
    state: () =>({
        userData: null,
    }),

    actions:{
        async registerUser(email, password){
            try {
                const createUser = await createUserWithEmailAndPassword(auth, email, password)
                const userCreate = createUser.user;

                
                console.log(this.userData)

                this.userData = {
                    email: userCreate.email,
                    uid: userCreate.uid
                }
                console.log(this.userData)
                router.push("/login")
            } catch (error) {
                return error.code
                
                console.log(error.code)
            }
        },

        async loginUser(email, password){
            try {
                const authUser = await signInWithEmailAndPassword(auth, email, password)
                const userCredential = authUser.user

                console.log(userCredential)

                this.userData = {
                    email: userCredential.email,
                    uid: userCredential.uid
                }

                router.push("/")

            } catch (error) {
                return error.code

                console.log(error.code)
            }
        },

        async signOutUser(){
            try {
                const UsersignOut = await signOut(auth)
                this.userData = null;
                router.push("/login")
            } catch (error) {
                console.log(error.code)
            }
        },

        currentUser() {
            return new Promise((resolve, reject) => {
                const unsuscribe = onAuthStateChanged(auth, user => {
                    if (user) {
                        this.userData = {
                            email: user.email,
                            uid: user.uid
                        }
                    } else {
                        this.userData = null;
                    }
                    resolve(user);
                }, e => reject(e))
                unsuscribe()
            })
        },

    },
})
