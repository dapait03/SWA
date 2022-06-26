import axios from "axios";

async function getCustomers() {
    const response = await axios.get("http://localhost:8080/customers");
    return response.data;
}

async function getContracts() {
    const response = await axios.get("http://localhost:8080/contracts");
    return response.data;
}

async function getUsers(){
    const response = await axios.get("http://localhost:8080/users");
    return response.data;
}

async function deleteUser(id){
    const response = await axios.delete("http://localhost:8080/users/" + id);
    return response.data;
}

async function deleteContract(id){
    const response = await axios.delete("http://localhost:8080/contracts/" + id);
    return response.data;
}

async function deleteCustomer(id){
    const response = await axios.delete("http://localhost:8080/customers/" + id);
    return response.data;
}

const HttpService = {
    getCustomers,
    getContracts,
    getUsers,
    deleteUser,
    deleteContract,
    deleteCustomer
};

export default HttpService;