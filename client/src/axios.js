import axios from "axios"

const instance = axios.create({
    baseURL: "https://hostel-management07.herokuapp.com"
})

export default instance;