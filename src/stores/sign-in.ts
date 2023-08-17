import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import AuthService from "../services/AuthService";
import type {AuthResponse} from "@/models/AuthResponse";
import type {AuthRequest} from "@/models/AuthRequest";

export const useTokenStore = defineStore('counter', () => {
    const client = ref('0')
    async function login(login: string, password: string){
        try {
            const response = await AuthService.login();
            let flag = false;

            response.data.forEach(item=>{
                if(item.login === login && item.password === password){
                    document.cookie = `token=${item.token}`
                    document.cookie = `client=@${item.firstname}${item.lastname}`
                    flag = true
                }
            })
            if(flag)
                return 201
            return 404
        }catch (e) {
            return 500
        }


    }

    const logout = () => {
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }

    const registration = async (data: AuthRequest) => {
        try {
            const response = await AuthService.registration(data);
            if(response.status === 201){
                return 201
            }
        } catch (e) {
            console.log(e)
        }
    }

    return { login, logout, registration }
})
