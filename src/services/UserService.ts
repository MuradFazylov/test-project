import $api from "../http";

import type { AxiosResponse } from "axios";
import type { UserResponse } from "@/models/UserResponse";

export default class UserService{
    static async getUsers():Promise<AxiosResponse<UserResponse[]>>{
        return $api.get('/users')
    }

    static async getUserDetail(id: string):Promise<AxiosResponse<UserResponse>>{
        return $api.get(`/users/${id}`)
    }

    static async editUserDetail(data: UserResponse):Promise<AxiosResponse<UserResponse>>{
        return $api.put(`/users/${data.id}`, {...data})
    }

    static async deleteUser(data: UserResponse):Promise<AxiosResponse<UserResponse>>{
        return $api.delete(`/users/${data.id}`)
    }
}