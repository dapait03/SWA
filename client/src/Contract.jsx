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
            contracts: [], dialogIsOpen: false, editRow : 0
        };
    }
    openDialog = (rowId) => {
        this.setState({ dialogIsOpen: true });
        this.setState({ editRow: rowId });
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
                        <Button sx={{margin: "10px"}}variant="contained" color="primary" >Edit</Button>
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
                <ContractDialog open={this.state.dialogIsOpen} onClose={this.closeDialog}/>
            </div>
        );
    }
}

export default withStyles(styles)(Contract);