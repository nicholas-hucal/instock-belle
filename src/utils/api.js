import axios from "axios";

const BASE_URL = "http://localhost:8080";

export default {
    getWarehouseById(id){
        return axios.get(`${BASE_URL}/warehouse/${id}`);
    },
    editWarehouse(warehouse, id) {
        return axios.put(`${BASE_URL}/warehouse/${id}`, warehouse)
    },
    addWarehouse(warehouse) {
        return axios.post(`${BASE_URL}/warehouse`, warehouse)
    }
}