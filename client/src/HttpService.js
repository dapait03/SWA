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
        const response = await axios.delete(`http://localhost:8080/users/${id}`);
        return response.data;
    }
}

async function deleteContract(id){
    if(id){
        const response = await axios.delete(`http://localhost:8080/contracts/${id}`);
        return response.data;
    }
}

async function deleteCustomer(id){
    if(id){
        const response = await axios.delete(`http://localhost:8080/customers/${id}`);
        return response.data;
    }
}

async function updateUser(user){
    if(user){
        const response = await axios.put(`http://localhost:8080/users/${user.id}/${user.userFirstName}/${user.userLastName}/${user.username}/${user.password}/${user.userMail}/${user.userPhoneNumber1}/${user.userPhoneNumber2}/${user.isAdmin}`, user);
        return response.data;
    }
}

async function updateCustomer(customer){
    if(customer){
        const response = await axios.put(`http://localhost:8080/customers/${customer.custId}/${customer.custName}/${customer.custDepartment}/${customer.custAddress}`, customer);
        return response.data;
    }
}

/*
 * Non functional
*/
async function updateContract(contract){
    if(contract){
        const response = await axios.put(`http://localhost:8080/contracts/${contract.id}`, contract);
        return response.data;
    }
}

const HttpService = {
    getCustomers,
    getContracts,
    getUsers,
    deleteUser,
    deleteContract,
    deleteCustomer,
    updateUser,
    updateContract,
    updateCustomer
};

export default HttpService;