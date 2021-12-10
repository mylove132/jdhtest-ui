import { defineStore } from 'pinia'
import { userState } from './state'

export const useUserStore = defineStore('user', {
   state: userState,
   actions: {
    setName (name: string) {
        this.name = name;
    }
   }
})