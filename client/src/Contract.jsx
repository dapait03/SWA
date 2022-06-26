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
            contracts: [],
        };
    }



    componentDidMount() {
        HttpService.getContracts().then(res => {
            this.setState({ contracts : res });
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                {this.state.contracts&& this.state.contracts.map((contracts) =>
                <table style={{background: "lightgray", width:"100%"}}>
                    <tr className="tableRow" key={contracts.custID} style={{background: "lightgray", width:"100%"}}>
                        <td className="tableCell" style={{border: "1px solid grey", width: "4%"}}>{contracts.contractUser1}</td>
                        <td className="tableCell" style={{border: "1px solid grey", width: "46%"}}>{contracts.contractStartDate}</td>
                        <td className="tableCell" style={{border: "1px solid grey", width: "25%"}}>{contracts.contractEndDate}</td>
                        <td className="tableCell" style={{border: "1px solid grey", width: "25%"}}>{contracts.contractVersion}</td>
                        <Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={() => this.openDialog()}>Edit</Button>
                    </tr>
                </table>
                )}
            </div>
        );
    }
}

export default withStyles(styles)(Contract);