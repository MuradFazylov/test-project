import { ref } from 'vue'
import { defineStore } from 'pinia'
import UserService from "../services/UserService";
import type {UserResponse} from "@/models/UserResponse";

export const useUserStore = defineStore('user', () => {
    const users = ref<any>()
    const user = ref<any>()
    async function gerUsers(){
        try {
            const response = await UserService.getUsers();
            users.value = response.data
        }catch (e) {
            console.log(e)
        }
    }

    async function getUserDetail(id: string):Promise<UserResponse|undefined>{
        try {
            const response = await UserService.getUserDetail(id);
            user.value = response.data
            return user.value
        }catch (e) {
            console.log(e)
        }
    }

    async function editUserDetail(data:UserResponse):Promise<UserResponse|undefined>{
        try {
            console.log(data)
            const response = await UserService.editUserDetail(data);
            user.value = response.data
            return user.value
        }catch (e) {
            console.log(e)
        }
    }

    async function deleteUser(data:UserResponse):Promise<any>{
        try {
            const response = await UserService.deleteUser(data);
            if(response.status === 200){
                return response.status
            }
        }catch (e) {
            console.log(e)
        }
    }

    async function createUser(data:UserResponse):Promise<any>{
        try {
            const response = await UserService.createUser(data);
            if(response.status === 201){
                return response.status
            }
        }catch (e) {
            console.log(e)
        }
    }

    return { users, user, gerUsers, getUserDetail, editUserDetail, deleteUser, createUser }
})
