import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import AuthService from "../services/AuthService";

export const useTokenStore = defineStore('counter', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    async function login(login: string, password: string){
        console.log(login, password)
        try {
            console.log(login, password)
            const response = await AuthService.login(login, password);
            document.cookie = `token=${response.data.token}`
        }catch (e) {
            console.log(e)
        }
    }

    return { count, doubleCount, login }
})
