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
    let tokens = JSON.parse(localStorage.getItem("tokens"));
    if (!tokens) {
        window.location.href = SIGNIN_URL;
    } else {
        config.headers.Authorization = `Bearer ${tokens.id_token}`;
    }
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
                // const response = await api.post(`/auth/refresh`);
                let tokens = JSON.parse(localStorage.getItem("tokens"));
                if (!tokens) tokens = {};


                const response = await api.post(`/auth/refresh`,
                    {
                        headers: {
                            'Authorization': `Bearer ${tokens.refresh_token}`
                        }
                    })


                tokens = response.data;

                localStorage.setItem("tokens", JSON.stringify(tokens));

                return api.request(originalRequest);
            } catch (e) {
                window.location.href = SIGNIN_URL;
            }
        }
        throw error;
    }
);

export default api;


