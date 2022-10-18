import axios from "axios";

const callApi = axios.create({
    baseURL: "https://book-store-demoo.herokuapp.com/api"
})

export default callApi;