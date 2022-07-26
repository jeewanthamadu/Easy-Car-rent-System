import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:8080/Easy_car_rent_system_war/'
})
export default instance;