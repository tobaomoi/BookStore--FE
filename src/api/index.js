import axios from "axios";

const callApi = axios.create({
    baseURL: "https://localhost:5001/api"
})

export default callApi;