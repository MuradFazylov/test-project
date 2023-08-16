import axios from "axios";

export const API_URL = `https://dashbord.uz/pcg/pcg/public/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default $api