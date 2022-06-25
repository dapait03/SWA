package de.hse.swa.jodel.jaxrs.resources;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import de.hse.swa.jodel.orm.dao.ContractDao;
import de.hse.swa.jodel.orm.dao.CustomerDao;
import de.hse.swa.jodel.orm.dao.UserDao;
import de.hse.swa.jodel.orm.model.Contract;
import de.hse.swa.jodel.orm.model.Customer;
import de.hse.swa.jodel.orm.model.User;
import io.vertx.core.http.HttpServerRequest;

@RequestScoped
@Path("/")
public class Step4UserResource {

    @Inject
    UserDao userDao;

    @Inject
    CustomerDao customerDao;

    @Inject
    ContractDao contractDao;
    
    @Context
    HttpServerRequest request;

    @GET
    @Path("/users")
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> getUsers() {
        return userDao.getUsers();
    }
    
    @GET
    @Path("customers")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Customer> getCustomers() {
        return customerDao.getCustomers();
    }

    @GET
    @Path("contracts")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Contract> getContractList() {
        return contractDao.getContractList();
    }


    @GET
    @Path("customers/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Customer getCustomer(Long id) {
        return customerDao.getCustomer(id);
    }

    @GET
    @Path("contracts/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Contract getContract(Long id) {
        return contractDao.getContract(id);
    }

    @GET
    @Path("users/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public User getUser(Long id) {
        return userDao.getUser(id);
    }

    /**
     * Update an existing user or create a new one
     * @param user
     * @return the updated user
     */
    @PUT
    @Path("users")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User addUser(User user) {
        return userDao.save(user);
    } 
    
    /**
     * Create a new user
     * @param user
     * @return the new user
     */
    @POST
    @Path("users")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User updateUser(User user) {
        return userDao.save(user);
    }
    

    @PUT
    @Path("customers")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Customer addToCustomerList(Customer customer) {
        return customerDao.addToCustomerList(customer);
    } 
    
    /**
     * Create a new user
     * @param user
     * @return the new user
     */
    @POST
    @Path("customers")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Customer updateCustomer(Customer customer) {
        return customerDao.addToCustomerList(customer);
    }


    @PUT
    @Path("contracts")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Contract addToContractList(Contract contract) {
        return contractDao.addToContractList(contract);
    } 
    
    /**
     * Create a new user
     * @param user
     * @return the new user
     */
    @POST
    @Path("contracts")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Contract updateContract(Contract contract) {
        return contractDao.addToContractList(contract);
    }

    /**
     * Create a new user
     * @param user
     * @return the new user
     */
    @POST
    @Path("login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User login (User user) {
        return userDao.login(user.getUsername(), user.getPassword());
    }
    
    
    @DELETE
    @Path("users/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void removeAllUsers() {
    	userDao.deleteAllUsers();
    }
}