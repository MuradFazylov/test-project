import axios from "axios";

export const API_URL = `https://64dd9610825d19d9bfb14403.mockapi.io/api/v1/`

const $api = axios.create({
    // withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config)=>{
    // config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default $api