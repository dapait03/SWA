import React from "react";
import { withStyles } from '@material-ui/core/styles';

import { Button } from "@material-ui/core";

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
            Tuser: [], dialogIsOpen: false, editRow : 0, firstName: "", lastName: "", mail: "", phoneNumber1: "", phoneNumber2: "" , password: "", isAdmin: false , username: ""
        };
    }
    openDialog = (rowId, firstName, lastName, mail, phone1, phone2, password, isAdmin, username) => {
        this.setState({ dialogIsOpen: true });
        this.setState({ editRow: rowId });
        this.setState({ firstName: firstName });
        this.setState({ lastName: lastName });
        this.setState({ mail: mail });
        this.setState({ phoneNumber1: phone1 });
        this.setState({ phoneNumber2: phone2 });
        this.setState({ password: password });
        this.setState({ isAdmin: isAdmin });
        this.setState({ username: username });
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
        // const { classes } = this.props;
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
                            <Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={() => this.openDialog(Tuser.id, Tuser.firstName, Tuser.lastName, 
                                Tuser.mail, Tuser.phoneNumber1, Tuser.phoneNumber2, Tuser.password, Tuser.admin, Tuser.username)}>Edit</Button>
                        </td>
                        <td className="tableCell" style={{ width: "11%"}}>
                            <Button 
                            sx={{margin: "10px"}} variant="contained" color="primary" 
                            onClick={() => {
                                HttpService.deleteUser(Tuser.id).then(res => {
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
                <UserDialog open={this.state.dialogIsOpen} onClose={this.closeDialog} editRow={this.state.editRow} 
                firstName={this.state.firstName} lastName={this.state.lastName} mail={this.state.mail} phoneNumber1={this.state.phoneNumber1} phoneNumber2={this.state.phoneNumber2}
                password={this.state.password} isAdmin={this.state.isAdmin} username={this.state.username}
                />
            </div>
        );
    }
}

export default withStyles(styles)(User);