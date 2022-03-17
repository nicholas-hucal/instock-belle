import axios from "axios";

const BASE_URL = "http://localhost:8080/";

export default {
    getWarehouseById(id){
        return axios.get(`http://localhost:8080/warehouse/${id}`)
    },
    // inventoryContent(id){
    //     axios.get(`http://localhost:8080/warehouse/${id}/inventory`)
    // }
}