import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:61083/'
});

export default api;