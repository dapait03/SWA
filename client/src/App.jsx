import React from "react";
import { withStyles } from '@material-ui/core/styles';

import TopAppBar from "./TopAppBar";

import Login from './Login';
import Customer from './Customer';
import User from './User';
import Contract from './Contract';

import { Routes, Route, Link } from "react-router-dom";

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
					<Button component={Link} to="/" variant="contained" color="primary">Customers</Button>
					<Button component={Link} to="/user" variant="contained" color="primary">Users</Button>
					<Button component={Link} to="/contract" variant="contained" color="primary">Contracts</Button>
					<Routes>
						<Route path="/" element={<Customer />} />
						<Route path="/user" element={<User />} />
						<Route path="/contract" element={<Contract />} />
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

