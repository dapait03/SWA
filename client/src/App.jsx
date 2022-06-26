import React from "react";
import { withStyles } from '@material-ui/core/styles';

import TopAppBar from "./TopAppBar";
import MainScene from "./MainScene";
import Footer from "./Footer";

import Login from './Login';
import Customer from './Customer';
import User from './User';
import Contract from './Contract';
import UserDialog from "./UserDialog";
import ContractDialog from "./ContractDialog";
import CustomerDialog from "./CustomerDialog";

import { Routes, Route } from "react-router-dom";

const styles = theme => ({
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});

const theUrl ="http://localhost:8080/";

class App extends React.Component {

	constructor(props) {
		super(props);
	    this.state = {	  
			loggedIn: false,
		};
	}

	authorized = () => {
		this.setState({loggedIn: true});
	}
  
	render() {
		if (this.state.loggedIn) {
			return (
				<div>
					<TopAppBar />
					<MainScene />
					<Routes>
						<Route path="/" element={<Customer />} />
						<Route path="/users" element={<User />} />
						<Route path="/contracts" element={<Contract />} />
					</Routes>

				</div>
			);
		} else {
			return (
				<Login url={theUrl} authorized = {this.authorized}></Login> 
				);
			}
		}
	}
	
	export default withStyles(styles)(App);
	
/*
<Footer sx={{paddingBottom: "60px"}}></Footer>
<Button component={Link} to="" variant="contained" color="primary">User</Button>
<Button component={Link} to="/customer" variant="contained" color="primary">Customer</Button>
<Button component={Link} to="/contract" variant="contained" color="primary">Contract</Button>
*/