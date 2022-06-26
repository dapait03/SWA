package de.hse.swa.jodel.orm;

import de.hse.swa.jodel.orm.dao.CustomerDao;
import de.hse.swa.jodel.orm.model.Customer;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import io.quarkus.test.junit.QuarkusTest;

import com.google.inject.Inject;

@QuarkusTest
public class CustomerDaoTest {
    
    @Inject
    CustomerDao customerDao;

    @BeforeEach
    void clearAllFromDatabase() {
        customerDao.deleteAllCustomers();
    }

    // Finished
    @Test
    void testGetCustomer() {
        Customer testCustomer = new Customer(10L,"Test Company", "Test Department", "Test Address");
        customerDao.addToCustomerList(testCustomer);
        Customer testCustomer2 = customerDao.getCustomer(0L);
        // Tests
        assertEquals(testCustomer2.getCustID(), 0);
        assertEquals(testCustomer2.getName(), "Test Company");
        assertEquals(testCustomer2.getDepartment(), "Test Department");
        assertEquals(testCustomer2.getAddress(), "Test Address");
    }

    @Test
    void testGetCustomerList(){
        Customer testCustomer = new Customer(10L,"Test Company", "Test Department", "Test Address");
        customerDao.addToCustomerList(testCustomer);
        Customer testCustomer2 = new Customer(10L,"Test Company2", "Test Department2", "Test Address2");
        customerDao.addToCustomerList(testCustomer2);
        List<Customer> testCustomerList = customerDao.getCustomers();
        assertEquals(testCustomerList.size(), 2);
        assertEquals(testCustomerList.get(0).getCustID(), 0);
        assertEquals(testCustomerList.get(0).getName(), "Test Company");
        assertEquals(testCustomerList.get(0).getDepartment(), "Test Department");
        assertEquals(testCustomerList.get(0).getAddress(), "Test Address");
        assertEquals(testCustomerList.get(1).getCustID(), 1);
        assertEquals(testCustomerList.get(1).getName(), "Test Company2");
        assertEquals(testCustomerList.get(1).getDepartment(), "Test Department2");
        assertEquals(testCustomerList.get(1).getAddress(), "Test Address2");
    }

    @Test
    void testAddToCustomerList() {
        Customer TestCustomer = new Customer(10L,"Test Company", "Test Department", "Test Street");
        customerDao.addToCustomerList(TestCustomer);
        // Test
        assertEquals( customerDao.getCustomers().size(), 1);
    }

    @Test
    void testDeleteCustomer(){
        Customer testCustomer = new Customer(10L,"Test Company", "Test Department", "Test Street");
        customerDao.addToCustomerList(testCustomer);
        customerDao.deleteCustomer(0L);
        // Test
        assertEquals(0, customerDao.getCustomers().size());
    }

    @Test
    void testDeleteCustomerList(){
        Customer testCustomer = new Customer(10L,"Test Company", "Test Department", "Test Street");
        Customer testCustomer2 = new Customer(10L,"Test Company2", "Test Department2", "Test Street2");
        customerDao.addToCustomerList(testCustomer);
        customerDao.addToCustomerList(testCustomer2);
        customerDao.deleteAllCustomers();
        // Test
        assertEquals(0, customerDao.getCustomers().size());
    }

}