import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: apiURL,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 5000, // tempo máximo de espera
})

export default api;