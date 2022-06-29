package de.hse.swa.jodel.orm;

import de.hse.swa.jodel.orm.dao.ContractDao;
import de.hse.swa.jodel.orm.model.Contract;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import io.quarkus.test.junit.QuarkusTest;

import com.google.inject.Inject;

@QuarkusTest
public class ContractDaoTest {
    
    @Inject
    ContractDao contractDao;

    private Contract createContract(Long prefix, java.sql.Date contractStartDate, java.sql.Date contractEndDate, String contractLicenseKey, String contractIPs1, String contractIPs2, String contractIPs3, String contractVersion, int contractNumFeatures1, int contractNumFeatures2, int contractNumFeatures3, String contractUser1, String contractUser2){
        Contract contract = new Contract();
        contract.setContID(prefix);
        contract.setContractStartDate(contractStartDate);
        contract.setContractEndDate(contractEndDate);
        contract.setContractLicenseKey(contractLicenseKey);
        contract.setContractIPs1(contractIPs1);
        contract.setContractIPs2(contractIPs2);
        contract.setContractIPs3(contractIPs3);
        contract.setContractVersion(contractVersion);
        contract.setContractNumFeatures1(contractNumFeatures1);
        contract.setContractNumFeatures2(contractNumFeatures2);
        contract.setContractNumFeatures3(contractNumFeatures3);
        contract.setContractUser1(contractUser1);
        contract.setContractUser2(contractUser2);
        
        return contract;
    }

    @BeforeEach
    void clearAllFromDatabase() {
        contractDao.deleteContractList();
    }

    @Test
    void testGetContract(){
        Contract contract = createContract(1L, new java.sql.Date(System.currentTimeMillis()), new java.sql.Date(System.currentTimeMillis()), "test", "test", "test", "test", "1.0", 1, 1, 1, "new String", "String");
        contractDao.addToContractList(contract);
        Contract contractFromDb = contractDao.getContract(1L);
        assertEquals(contract, contractFromDb);
    }

    @Test
    void testGetContractList(){
        Contract contract = createContract(1L, new java.sql.Date(System.currentTimeMillis()), new java.sql.Date(System.currentTimeMillis()), "test", "test", "test", "test", "1.0", 1, 1, 1, "new User()", "new User()");
        contractDao.addToContractList(contract);
        Contract contract2 = createContract(2L, new java.sql.Date(System.currentTimeMillis()), new java.sql.Date(System.currentTimeMillis()), "test", "test", "test", "test", "1.0", 1, 1, 1, "new User()", "new User()");
        contractDao.addToContractList(contract2);
        List<Contract> contractList = contractDao.getContractList();
        assertEquals(2, contractList.size());
    }	

    @Test
    void testAddToContractList(){
        Contract contract1 = createContract(1L, new java.sql.Date(System.currentTimeMillis()), new java.sql.Date(System.currentTimeMillis()), "test", "test", "test", "test", "1.0", 1, 1, 1, "new String", "String");
        contractDao.addToContractList(contract1);
        Contract contract2 = createContract(2L, new java.sql.Date(System.currentTimeMillis()), new java.sql.Date(System.currentTimeMillis()), "test", "test", "test", "test", "1.0", 1, 1, 1, "new String", "String");
        contractDao.addToContractList(contract2);
        Contract contract3 = createContract(3L, new java.sql.Date(System.currentTimeMillis()), new java.sql.Date(System.currentTimeMillis()), "test", "test", "test", "test", "1.0", 1, 1, 1, "new String", "String");
        contractDao.addToContractList(contract3);
        Contract contractFromDb = contractDao.getContract(3L);
        assertEquals(contract3, contractFromDb);
    }
    
    @Test
    void testDeleteContract(){
        Contract contract = createContract(1L, new java.sql.Date(System.currentTimeMillis()), new java.sql.Date(System.currentTimeMillis()), "test", "test", "test", "test", "1.0", 1, 1, 1, "new String", "String");
        contractDao.addToContractList(contract);
        contractDao.deleteContract(1L);
        Contract contractFromDb = contractDao.getContract(1L);
        assertEquals(null, contractFromDb);
    }

    @Test
    void testDeleteContractList(){
        Contract contract = createContract(1L, new java.sql.Date(System.currentTimeMillis()), new java.sql.Date(System.currentTimeMillis()), "test", "test", "test", "test", "1.0", 1, 1, 1, "new String", "String");
        contractDao.addToContractList(contract);
        Contract contract2 = createContract(2L, new java.sql.Date(System.currentTimeMillis()), new java.sql.Date(System.currentTimeMillis()), "test", "test", "test", "test", "1.0", 1, 1, 1, "new String", "String");
        contractDao.addToContractList(contract2);
        Contract contract3 = createContract(3L, new java.sql.Date(System.currentTimeMillis()), new java.sql.Date(System.currentTimeMillis()), "test", "test", "test", "test", "1.0", 1, 1, 1, "new String", "String");
        contractDao.addToContractList(contract3);
        contractDao.deleteContractList();
        List<Contract> contractList = contractDao.getContractList();
        assertEquals(0, contractList.size());
    }
}
