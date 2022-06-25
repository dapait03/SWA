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

const HttpService = {
    getCustomers,
    getContracts,
    getUsers
};

export default HttpService;