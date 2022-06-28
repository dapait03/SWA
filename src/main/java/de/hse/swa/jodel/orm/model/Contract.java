/*========================================================================*
 *                                                                        *
 * This software is governed by the GPL version 2.                        *
 *                                                                        *
 * Copyright: Rico Hofmann, Darios Pachtsinis                             *
 *                                                                        *
 * $Id:$
 *                                                                        *
 *========================================================================*/
package de.hse.swa.jodel.orm.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

// import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "contracts")
public class Contract implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
    @Id
    @SequenceGenerator(name = "contractsSeq", sequenceName = "ZSEQ_contracts_ID", allocationSize = 1, initialValue = 10)
    @GeneratedValue(generator = "contractsSeq")
    
    @Column(name = "contID")
    private Long contID;

    @Basic(optional=false)
    @Column(name = "contractStartDate")
    private java.sql.Date contractStartDate;

	@Basic(optional=false)
	@Column(name = "contractEndDate")
	private java.sql.Date contractEndDate;

	@Basic(optional=false)
	@Column(name = "contractIp1", length=64)
	private String contractIp1;

	@Basic(optional=true)
	@Column(name = "contractIp2", length=64)
	private String contractIp2;

	@Basic(optional=true)
	@Column(name = "contractIp3", length=64)
	private String contractIp3;

	@Basic(optional=false)
	@Column(name = "contractVersion", length=64)
	private String contractVersion;

	@Basic(optional=true)
	@Column(name = "contractNumFeature1")
	private int contractNumFeature1;

	@Basic(optional=true)
	@Column(name = "contractNumFeature2")
	private int contractNumFeature2;

	@Basic(optional=true)
	@Column(name = "contractNumFeature3")
	private int contractNumFeature3;

	@Basic(optional=true)
	@Column(name = "contractUser1")
	private User contractUser1;

	@Basic(optional=true)
	@Column(name = "contractUser2")
	private User contractUser2;

    @Basic(optional=false)
    @Column(name = "contractLicenseKey", length=2048)
    private String contractLicenseKey;

	public Contract() {
	}

	public Contract(Long contID, java.sql.Date contractStartDate, java.sql.Date contractEndDate, String contractIp1, String contractIp2, String contractIp3, String contractVersion, int contractNumFeature1, int contractNumFeature2, int contractNumFeature3, User contractUser1, User contractUser2, String contractLicenseKey) {
		this.contID = contID;
		this.contractStartDate = contractStartDate;
		this.contractEndDate = contractEndDate;
		this.contractIp1 = contractIp1;
		this.contractIp2 = contractIp2;
		this.contractIp3 = contractIp3;
		this.contractVersion = contractVersion;
		this.contractNumFeature1 = contractNumFeature1;
		this.contractNumFeature2 = contractNumFeature2;
		this.contractNumFeature3 = contractNumFeature3;
		this.contractUser1 = contractUser1;
		this.contractUser2 = contractUser2;
		this.contractLicenseKey = contractLicenseKey;
	}

	
	public Long getContID() {
		return this.contID;
	}
	public void setContID(Long id) {
		this.contID = id;
	}

	public Date getContractStartDate() {
		return this.contractStartDate;
	}
	public void setContractStartDate(Date contractStartDate) {
		this.contractStartDate = contractStartDate;
	}

	public Date getContractEndDate() {
		return this.contractEndDate;
	}
	public void setContractEndDate(Date contractEndDate) {
		this.contractEndDate = contractEndDate;
	}

	public String getContractIPs1() {
		return this.contractIp1;
	}
	public void setContractIPs1(String contractIp1) {
		this.contractIp1 = contractIp1;
	}

	public String getContractIPs2() {
		return this.contractIp2;
	}
	public void setContractIPs2(String contractIp2) {
		this.contractIp2 = contractIp2;
	}

	public String getContractIPs3() {
		return this.contractIp3;
	}
	public void setContractIPs3(String contractIp3) {
		this.contractIp3 = contractIp3;
	}

	public String getContractVersion() {
		return this.contractVersion;
	}
	public void setContractVersion(String contractVersion) {
		this.contractVersion = contractVersion;
	}

	public int getContractNumFeatures1() {
		return this.contractNumFeature1;
	}
	public void setContractNumFeatures1(int contractNumFeature1) {
		this.contractNumFeature1 = contractNumFeature1;
	}

	public int getContractNumFeatures2() {
		return this.contractNumFeature2;
	}
	public void setContractNumFeatures2(int contractNumFeature2) {
		this.contractNumFeature2 = contractNumFeature2;
	}

	public int getContractNumFeatures3() {
		return this.contractNumFeature3;
	}
	public void setContractNumFeatures3(int contractNumFeature3) {
		this.contractNumFeature3 = contractNumFeature3;
	}

	public User getContractUser1() {
		return this.contractUser1;
	}
	public void setContractUser1(User contractUser1) {
		this.contractUser1 = contractUser1;
	}

	public User getContractUser2() {
		return this.contractUser2;
	}
	public void setContractUser2(User contractUser2) {
		this.contractUser2 = contractUser2;
	}

	public String getContractLicenseKey() {
		return this.contractLicenseKey;
	}
	public void setContractLicenseKey(String contractLicenseKey) {
		this.contractLicenseKey = contractLicenseKey;
	}

	@Override
	public String toString() {
		return "Contract [contID=" + contID + ", contractStartDate=" + contractStartDate + ", contractEndDate="
				+ contractEndDate + ", contractIp1=" + contractIp1 + ", contractIp2=" + contractIp2 + ", contractIp3="
				+ contractIp3 + ", contractVersion=" + contractVersion + ", contractNumFeature1=" + contractNumFeature1
				+ ", contractNumFeature2=" + contractNumFeature2 + ", contractNumFeature3=" + contractNumFeature3
				+ ", contractUser1=" + contractUser1 + ", contractUser2=" + contractUser2 + ", contractLicenseKey="
				+ contractLicenseKey + "]";
	}
	
}