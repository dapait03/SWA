import React from "react";
import { withStyles } from '@material-ui/core/styles';

import { Button } from "@material-ui/core";

import HttpService from "./HttpService";

import ContractDialog from "./ContractDialog";

const styles = theme => ({
    center: {
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 40px)',
        border: '5px solid red',
        padding: '10px',
    }
});

class Contract extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contracts: [], dialogIsOpen: false, editRow : 0, contractStartDate : "", contractEndDate : "", contractVersion : "", contractIPs1 : "", contractIPs2 : "", contractIPs3 : "",
            contractNumFeatures1 : "", contractNumFeatures2 : "", contractNumFeatures3 : ""
        };
    }
    openDialog = (rowId, contractStartDate, contractEndDate,
        contractVersion, contractIPs1, contractIPs2, contractIPs3, contractNumFeatures1,
        contractNumFeatures2, contractNumFeatures3) => {
        this.setState({ dialogIsOpen: true });
        this.setState({ editRow: rowId });
        this.setState({ contractStartDate: contractStartDate });
        this.setState({ contractEndDate: contractEndDate });
        this.setState({ contractVersion: contractVersion });
        this.setState({ contractIPs1: contractIPs1 });
        this.setState({ contractIPs2: contractIPs2 });
        this.setState({ contractIPs3: contractIPs3 });
        this.setState({ contractNumFeatures1: contractNumFeatures1 });
        this.setState({ contractNumFeatures2: contractNumFeatures2 });
        this.setState({ contractNumFeatures3: contractNumFeatures3 });
      };
    
      closeDialog = () => {
        this.setState({ dialogIsOpen: false });
      };



    componentDidMount() {
        HttpService.getContracts().then(res => {
            this.setState({ contracts : res });
        });
    }

    render() {
        // const { classes } = this.props;
        return (
            <div>
                <table style={{ width: "100%" }}>
                    <tr className="tableRow">
                        <th style={{border: "2px solid grey", width: "8%"}}>Customer</th>
                        <th style={{border: "2px solid grey", width: "42%"}}>Start Date</th>
                        <th style={{border: "2px solid grey", width: "25%"}}>End Date</th>
                        <th style={{border: "2px solid grey", width: "25%"}}>Version</th>
                        <td className="tableCell" style={{ width: "11%"}}>
                        <Button style={{visibility: "hidden"}}sx={{margin: "10px"}} variant="contained"></Button>
                        </td>
                        <td className="tableCell" style={{ width: "11%"}}>
                        <Button style={{visibility: "hidden"}}sx={{margin: "10px"}} variant="contained">Delete</Button>
                        </td>
                    </tr>
                </table>
                {this.state.contracts&& this.state.contracts.map((contracts) =>
                <table style={{width:"100%"}}>
                    <tr className="tableRow" key={contracts.contID} style={{width:"100%"}}>
                        <td className="tableCell" style={{border: "2px solid grey", width: "8%"}}>{contracts.contID}</td>
                        <td className="tableCell" style={{border: "2px solid grey", width: "42%"}}>{contracts.contractStartDate}</td>
                        <td className="tableCell" style={{border: "2px solid grey", width: "25%"}}>{contracts.contractEndDate}</td>
                        <td className="tableCell" style={{border: "2px solid grey", width: "25%"}}>{contracts.contractVersion}</td>
                        <td className="tableCell" style={{ width: "11%"}}>
                        <Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={() => this.openDialog(contracts.contID, contracts.contractStartDate, contracts.contractEndDate,
                            contracts.contractVersion, contracts.contractIPs1, contracts.contractIPs2, contracts.contractIPs3, contracts.contractNumFeatures1,
                            contracts.contractNumFeatures2, contracts.contractNumFeatures3
                            )} >Edit</Button>
                        </td>
                        <td className="tableCell" style={{ width: "11%"}}>
                            <Button 
                            sx={{margin: "10px"}} variant="contained" color="primary" 
                            onClick={() => {
                                HttpService.deleteContract(contracts.contID).then(res => {
                                    window.location.reload(false);
                                });
                            }}
                            >
                                Delete
                            </Button>
                        </td>
                    </tr>
                </table>
                )}
                <ContractDialog open={this.state.dialogIsOpen} onClose={this.closeDialog} editRow={this.state.editRow} contractStartDate={this.state.contractStartDate} contractEndDate={this.state.contractEndDate} 
                contractVersion={this.state.editRow} contractIPs1={this.state.contractIPs1} contractIPs2={this.state.contractIPs2} contractIPs3={this.state.contractIPs3}
                contractNumFeatures1={this.state.contractNumFeatures1} contractNumFeatures2={this.state.contractNumFeatures2} contractNumFeatures3={this.state.contractNumFeatures3} />
            </div>
        );
    }
}

export default withStyles(styles)(Contract);