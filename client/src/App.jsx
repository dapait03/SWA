import React from "react";
import { withStyles } from '@material-ui/core/styles';

import Login from './Login';
import Customer from './Customer';
import User from './User';
import Contract from './Contract';

import { Routes, Route, Link } from "react-router-dom";

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
					<Button component={Link} to="/" variant="contained" color="primary">Customers</Button>
					<Button component={Link} to="/users" variant="contained" color="primary">Users</Button>
					<Button component={Link} to="/contracts" variant="contained" color="primary">Contracts</Button>
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

