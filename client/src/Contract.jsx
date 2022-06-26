import React from "react";
import { withStyles } from '@material-ui/core/styles';

import { Box, Button } from "@material-ui/core";

import HttpService from "./HttpService";

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
            contracts: [], dialogIsOpen: false 
        };
    }
    openDialog = () => {
        this.setState({ dialogIsOpen: true });
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
        const { classes } = this.props;
        return (
            <div>
                <table style={{ width: "100%" }}>
                    <tr className="tableRow">
                        <th style={{border: "2px solid grey", width: "8%"}}>Customer</th>
                        <th style={{border: "2px solid grey", width: "42%"}}>Start Date</th>
                        <th style={{border: "2px solid grey", width: "25%"}}>End Date</th>
                        <th style={{border: "2px solid grey", width: "25%"}}>Version</th>
                        <Button style={{hidden: "hidden"}}sx={{margin: "10px"}} variant="contained"></Button>
                    </tr>
                </table>
                {this.state.contracts&& this.state.contracts.map((contracts) =>
                <table style={{width:"100%"}}>
                    <tr className="tableRow" key={contracts.custID} style={{width:"100%"}}>
                        <td className="tableCell" style={{border: "2px solid grey", width: "8%"}}>{contracts.contractUser1}</td>
                        <td className="tableCell" style={{border: "2px solid grey", width: "42%"}}>{contracts.contractStartDate}</td>
                        <td className="tableCell" style={{border: "2px solid grey", width: "25%"}}>{contracts.contractEndDate}</td>
                        <td className="tableCell" style={{border: "2px solid grey", width: "25%"}}>{contracts.contractVersion}</td>
                        <Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={this.openDialog}>Edit</Button>
                    </tr>
                </table>
                )}
            </div>
        );
    }
}

export default withStyles(styles)(Contract);