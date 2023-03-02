import axios from "axios";

// export const HOST_URL = `https://online.staging.dostaevsky.ru`
export const HOST_URL = `https://mir.strio.ru`
export const API_URL = HOST_URL + `/operator/api`;
export const SINGNIN_URL = HOST_URL + `/signin`;


console.log("API_URL = ", API_URL)

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        // "Access-Control-Request-Origin": "*",
    }
});

api.interceptors.request.use((config) => {
    let tokens = JSON.parse(localStorage.getItem("tokens"));
    config.headers.Authorization = `Bearer ${tokens.id_token}`;
    return config;
});

api.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true;
            try {
                const response = await api.get(`/auth/refresh`);
                let tokens = JSON.parse(localStorage.getItem("tokens"));
                if (!tokens) tokens = {};

                tokens.id_token = response.data.id_token;

                localStorage.setItem("tokens", JSON.stringify(tokens));

                return api.request(originalRequest);
            } catch (e) {
                console.log("пользователь не авторизирован")

                window.location.href = SINGNIN_URL;
            }
        }
        throw error;
    }
);

export default api;
