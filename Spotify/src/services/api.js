import axios from "axios";

const api = axios.create({
    baseURL: ' http://127.0.0.1:3000',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 5000, // tempo máximo de espera
})

export default api;