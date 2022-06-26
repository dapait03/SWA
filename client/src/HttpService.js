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
    if(id){
        const response = await axios.post("http://localhost:8080/users/delete", {id: id});
        return response.data;
    }
}

async function deleteContract(id){
    if(id){
        const response = await axios.post("http://localhost:8080/contracts/delete", {id: id});
        return response.data;
    }
}

async function deleteCustomer(id){
    if(id){
        const response = await axios.post("http://localhost:8080/customers/delete", {id: id});
        return response.data;
    }
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