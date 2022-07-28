import axios from "axios";

const callApi = axios.create({
    baseURL: "http://192.168.1.8:8082/api"
})

export default callApi;