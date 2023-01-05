import axios from "axios";

const callApi = axios.create({
    baseURL: "https://192.168.1.9/api"
})

export default callApi;