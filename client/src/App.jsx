import React from "react";
import { withStyles } from '@material-ui/core/styles';

import TopAppBar from "./TopAppBar";
<<<<<<< HEAD
import SideMenu from "./SideMenu";
=======
import Footer from "./Footer";
>>>>>>> 2515d2f995315552bd202fcf353a66de240c5bfe

import Login from './Login';
import Customer from './Customer';
import User from './User';
import Contract from './Contract';

import { BrowserRouter as Routes, Router, Link, useRoutes } from "react-router-dom";

import Button from '@material-ui/core/Button';

const styles = theme => ({
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
	},
});

const theUrl ="http://localhost:8080/step4/";

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
					<SideMenu />
					

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
<Route path="/customer" element={<Customer />} />
<Route path="/contract" element={<Contract />} />
<Route path="" element={<User />} />
*/