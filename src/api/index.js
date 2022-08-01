import axios from "axios";

const callApi = axios.create({
    baseURL: "https://localhost:8082/api"
})

export default callApi;