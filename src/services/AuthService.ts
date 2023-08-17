import $api from "../http";

import type { AxiosResponse } from 'axios';
import type { AuthResponse } from "@/models/AuthResponse";
import type {AuthRequest} from "@/models/AuthRequest";

export default class AuthService {
    static async login(): Promise<AxiosResponse<AuthResponse[]>> {
        return $api.get<AuthResponse[]>('/login')
    }

    static async registration(data: AuthRequest): Promise<AxiosResponse<AuthRequest[]>> {
        return $api.post<AuthRequest[]>('/login', {...data})
    }

}