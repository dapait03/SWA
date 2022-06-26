import React from "react";
import { withStyles } from '@material-ui/core/styles';

import { Box, Button } from "@material-ui/core";

import HttpService from "./HttpService";

import UserDialog from "./UserDialog";

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

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Tuser: [], dialogIsOpen: false 
        };
    }
    openDialog = () => {
        this.setState({ dialogIsOpen: true });
      };
    
      closeDialog = () => {
        this.setState({ dialogIsOpen: false });
      };

    componentDidMount() {
        HttpService.getUsers().then(res => {
            this.setState({ Tuser : res });
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div >
                <table style={{ width: "100%" }}>
                    <tr className="tableRow">
                        <th style={{border: "2px solid grey", width: "33%"}}>User</th>
                        <th style={{border: "2px solid grey", width: "33%"}}>E-Mail</th>
                        <th style={{border: "2px solid grey", width: "33%"}}>Phone Number</th>
                        <td className="tableCell" style={{ width: "11%"}}>
                            <Button style={{visibility: "hidden"}}sx={{margin: "10px"}} variant="contained"></Button>
                        </td>
                        <td className="tableCell" style={{ width: "11%"}}>
                            <Button style={{visibility: "hidden"}}sx={{margin: "10px"}} variant="contained">Delete</Button>
                        </td>
                    </tr>
                </table>
                {this.state.Tuser&& this.state.Tuser.map((Tuser) =>
                <table style={{width:"100%"}}>
                    <tr className="tableRow" key={Tuser.id} style={{width:"100%"}}>
                        <td className="tableCell" style={{border: "2px solid grey", width: "33%"}}>{Tuser.firstName} {Tuser.lastName}</td>
                        <td className="tableCell" style={{border: "2px solid grey", width: "33%"}}>{Tuser.mail}</td>
                        <td className="tableCell" style={{border: "2px solid grey", width: "33%"}}>{Tuser.phoneNumber1}</td>
                        <td className="tableCell" style={{ width: "11%"}}>
                            <Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={this.openDialog}>Edit</Button>
                        </td>
                        <td className="tableCell" style={{ width: "11%"}}>
                            <Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={this.openDialog}>Delete</Button>
                        </td>
                    </tr>
                </table>
                )}
                <UserDialog open={this.state.dialogIsOpen} onClose={this.closeDialog}/>
            </div>
        );
    }
}

export default withStyles(styles)(User);