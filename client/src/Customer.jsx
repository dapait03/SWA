import React from "react";
import { withStyles } from '@material-ui/core/styles';

import { Box, Button } from "@material-ui/core";

import HttpService from "./HttpService";

import CustomerDialog from "./CustomerDialog";

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

class Customer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: [], dialogIsOpen: false 
        };
    }

    openDialog = () => {
        this.setState({ dialogIsOpen: true });
      };
    
    closeDialog = () => {
        this.setState({ dialogIsOpen: false });
      };

    componentDidMount() {
        HttpService.getCustomers().then(res => {
            this.setState({ customers : res });
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <table style={{ width: "100%" }}>
                    <tr className="tableRow">
                        <th style={{border: "2px solid grey", width: "8%"}}>Customer</th>
                        <th style={{border: "2px solid grey", width: "42%"}}>Adresse</th>
                        <th style={{border: "2px solid grey", width: "25%"}}>Department</th>
                        <th style={{border: "2px solid grey", width: "25%"}}>Name</th>
                        <td className="tableCell" style={{ width: "11%"}}>
                            <Button style={{visibility: "hidden"}}sx={{margin: "10px"}} variant="contained"></Button>
                        </td>
                        <td className="tableCell" style={{ width: "11%"}}>
                            <Button style={{visibility: "hidden"}}sx={{margin: "10px"}} variant="contained">Delete</Button>
                        </td>
                    </tr>
                </table>
                {this.state.customers&& this.state.customers.map((customer) =>
                <table style={{ width:"100%" }}>
                    <tr className="tableRow" key={customer.custID} style={{ width:"100%" }}>
                        <td className="tableCell" style={{border: "2px solid grey", width: "8%"}}>{customer.custID}</td>
                        <td className="tableCell" style={{border: "2px solid grey", width: "42%"}}>{customer.address}</td>
                        <td className="tableCell" style={{border: "2px solid grey", width: "25%"}}>{customer.department}</td>
                        <td className="tableCell" style={{border: "2px solid grey", width: "25%"}}>{customer.name}</td>
                        <td className="tableCell" style={{ width: "11%"}}>
                            <Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={this.openDialog}>Edit</Button>
                        </td>
                        <td className="tableCell" style={{ width: "11%"}}>
                            <Button 
                            sx={{margin: "10px"}} variant="contained" color="primary" 
                            onClick={() => {
                                HttpService.deleteCustomer(customer.custID).then(res => {
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
                <CustomerDialog open={this.state.dialogIsOpen} onClose={this.closeDialog}/>


            </div>
        );
    }
}

export default withStyles(styles)(Customer);