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
            users: [], dialogIsOpen: false 
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
            this.setState({ users : res });
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div >
                {this.state.users&& this.state.users.map((users) =>
                <table style={{background: "lightgray", width:"100%"}}>
                    <tr className="tableRow" key={users.custID} style={{background: "lightgray", width:"100%"}}>
                        <td className="tableCell" style={{border: "1px solid grey", width: "4%"}}>{users.userFirstName}{users.userLastName}</td>
                        <td className="tableCell" style={{border: "1px solid grey", width: "46%"}}>{users.userMail}</td>
                        <td className="tableCell" style={{border: "1px solid grey", width: "25%"}}>{users.userPhoneNumber1}</td>
                        <Button sx={{margin: "10px"}}variant="contained" color="primary" onClick={this.openDialog}>Edit</Button>
                    </tr>
                </table>
                )}
            </div>
        );
    }
}

export default withStyles(styles)(User);