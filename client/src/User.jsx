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

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }



    componentDidMount() {
        HttpService.getUsers().then(res => {
            this.setState({ users : res });
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div >
                <table style={{ width: "100%" }}>
                    <tr className="tableRow">
                        <th style={{border: "2px solid grey", width: "8%"}}>User</th>
                        <th style={{border: "2px solid grey", width: "42%"}}>E-Mail</th>
                        <th style={{border: "2px solid grey", width: "25%"}}>Phone Number</th>
                        <Button style={{hidden: "hidden"}}sx={{margin: "10px"}} variant="contained"></Button>
                    </tr>
                </table>
                {this.state.users&& this.state.users.map((users) =>
                <table style={{width:"100%"}}>
                    <tr className="tableRow" key={users.custID} style={{width:"100%"}}>
                        <td className="tableCell" style={{border: "2px solid grey", width: "8%"}}>{users.userFirstName}{users.userLastName}</td>
                        <td className="tableCell" style={{border: "2px solid grey", width: "42%"}}>{users.userMail}</td>
                        <td className="tableCell" style={{border: "2px solid grey", width: "25%"}}>{users.userPhoneNumber1}</td>
                        <Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={() => this.openDialog()}>Edit</Button>
                    </tr>
                </table>
                )}
            </div>
        );
    }
}

export default withStyles(styles)(User);