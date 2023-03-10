import axios from "axios";

export const HOST_URL = `https://online.staging.dostaevsky.ru`
export const API_URL = HOST_URL + `/operator/api`;
export const SIGNIN_URL = HOST_URL + `/signin`;

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
});

api.interceptors.request.use((config) => {
    let tokens_value = localStorage.getItem("tokens")
    
    if (!tokens_value){

        console.log('redirect to signin from api.request')

        window.location.href = SIGNIN_URL   
    } else {
        let tokens = {
            id_token : null
        }

        try {
            tokens = JSON.parse(tokens_value);
        } catch(e) {
            localStorage.removeItem("tokens")
            return config;
        }

        config.headers.Authorization = `Bearer ${tokens.id_token}`;
    }
    return config;
});

api.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config
        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true
            try {
                const response = await api.post(`/auth/refresh`)

                let tokens = response.data

                console.log('token was refreshed', tokens)

                localStorage.setItem("tokens", JSON.stringify(tokens))

                return api.request(originalRequest);
            } catch (e) {
                console.log('redirect to signin from api.response')

                window.location.href = SIGNIN_URL
            }
        }
        throw error;
    }
);

export default api;
