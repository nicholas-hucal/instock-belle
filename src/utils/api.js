import axios from "axios";

const BASE_URL = "https://instock-serverr.herokuapp.com";

const api =  {
    getAllWarehouses(){
        return axios.get(`${BASE_URL}/warehouse/`);
    },
    getWarehouseById(id){
        return axios.get(`${BASE_URL}/warehouse/${id}`);
    },
    deleteWarehouseById(id){
        return axios.delete(`${BASE_URL}/warehouse/${id}`);
    },
    editWarehouse(warehouse, id) {
        return axios.put(`${BASE_URL}/warehouse/${id}`, warehouse)
    },
    addWarehouse(warehouse) {
        return axios.post(`${BASE_URL}/warehouse`, warehouse)
    },
    doSearch(search) {
        return axios.post(`${BASE_URL}/search`, search)
    },
    inventoryContent(id){
        return axios.get(`${BASE_URL}/warehouse/${id}/inventory`)
    },
    getInventoryById(id){
        return axios.get(`${BASE_URL}/inventory/${id}`);
    },
    addInventory(inventory) {
        return axios.post(`${BASE_URL}/inventory`, inventory)
    },
    editInventory(inventory, id) {
        return axios.put(`${BASE_URL}/inventory/${id}`, inventory)
    },
    deleteInventory(inventoryId) {
        return axios.delete(`${BASE_URL}/inventory/${inventoryId}`)
    },
    getAllInventory() {
        return axios.get(`${BASE_URL}/inventory`)
    },
}

export default api;