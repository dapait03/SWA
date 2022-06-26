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
                {this.state.customers&& this.state.customers.map((customer) =>
                <table style={{background: "lightgray", width:"100%"}}>
                    <tr className="tableRow" key={customer.custID} style={{background: "lightgray", width:"100%"}}>
                        <td className="tableCell" style={{border: "1px solid grey", width: "4%"}}>{customer.custID}</td>
                        <td className="tableCell" style={{border: "1px solid grey", width: "46%"}}>{customer.address}</td>
                        <td className="tableCell" style={{border: "1px solid grey", width: "25%"}}>{customer.department}</td>
                        <td className="tableCell" style={{border: "1px solid grey", width: "25%"}}>{customer.name}</td>
                        <Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={this.openDialog}>Edit</Button>
                    </tr>
                </table>
                )}
                <CustomerDialog open={this.state.dialogIsOpen} onClose={this.closeDialog}/>
                {this.state.customers&& this.state.customers.map((cus, i) =>
                 <Box key={i}>{cus.name}</Box>
                )}

            </div>
        );
    }
}

export default withStyles(styles)(Customer);