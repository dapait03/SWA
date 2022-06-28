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
import javax.ws.rs.PathParam;
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
    
    /**
     * Delete an existing object
     * @param id
     */

    @DELETE
    @Path("contracts/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void removeContractsByID(@PathParam("id") Long id) {
        contractDao.deleteContract(id);
    }

    @DELETE
    @Path("users/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void removeUsersByID(@PathParam("id") Long id) {
        userDao.deleteUser(id);
    }

    @DELETE
    @Path("customers/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void removeCustomerByID(@PathParam("id") Long id) {
        customerDao.deleteCustomer(id);
    }

    /**
     * Update an existing object
     * @param id
     */
    @POST
    @Path("customers/{custId}/{custName}/{custDepartment}/{custAddress}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Customer addCustomer(@PathParam("custId") Long custId, @PathParam("custName") String custName, @PathParam("custDepartment") String custDepartment, @PathParam("custAddress") String custAddress ) {
        Customer customerTemp = new Customer(custId, custName, custDepartment, custAddress);
        return customerDao.addToCustomerList(customerTemp);
    } 
    @POST
    @Path("users/{id}/{userFirstName}/{userLastName}/{username}/{password}/{userMail}/{userPhoneNumber1}/{userPhoneNumber2}/{isAdmin}/{userCustomerName}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User save(@PathParam("id") Long id, @PathParam("userFirstName") String userFirstName, @PathParam("userLastName") String userLastName, @PathParam("username") String username, @PathParam("password") String password, @PathParam("userMail") String userMail, @PathParam("userPhoneNumber1") String userPhoneNumber1, @PathParam("userPhoneNumber2") String userPhoneNumber2, @PathParam("isAdmin") boolean isAdmin, @PathParam("userCustomerName") String userCustomerName ) {
        User userTemp = new User(id, userFirstName, userLastName, username, password, userMail, userPhoneNumber1, userPhoneNumber2, isAdmin, userCustomerName);
        return userDao.save(userTemp);
    } 

    @POST
    @Path("contracts/{contID}/{contractStartDate}/{contractEndDate}/{contractIp1}/{contractIp2}/{contractIp3}/{contractVersion}/{contractNumFeature1}/{contractNumFeature2}/{contractNumFeature3}/{contractUser1}/{contractUser2}/{contractLicenseKey}/")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Contract addToContractList(@PathParam("contID") Long contID, @PathParam("contractStartDate") java.sql.Date contractStartDate, @PathParam("contractEndDate") java.sql.Date contractEndDate, @PathParam("contractIp1") String contractIp1, @PathParam("contractIp2") String contractIp2, @PathParam("contractIp3") String contractIp3, @PathParam("contractVersion") String contractVersion, @PathParam("contractNumFeature1") int contractNumFeature1, @PathParam("contractNumFeature2") int contractNumFeature2, @PathParam("contractNumFeature3") int contractNumFeature3, @PathParam("contractUser1") User contractUser1, @PathParam("contractUser2") User contractUser2, @PathParam("contractLicenseKey") String contractLicenseKey ) {
        Contract contractTemp = new Contract();
        return contractDao.addToContractList(contractTemp);
    } 
}