import { defineStore } from 'pinia'
import { appState } from './state'

export const useAppStore = defineStore('app', {
   state: appState,
   actions: {
    setDrawerStatus (drawerStatus: boolean) {
        this.drawerStatus = drawerStatus;
    }
   }
})