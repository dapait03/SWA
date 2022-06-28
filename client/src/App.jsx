import React from "react";
import { withStyles } from '@material-ui/core/styles';

import TopAppBar from "./TopAppBar";
import CustomerMS from "./CustomerMS";
import ContractMS from "./ContractMS";
import UserMS from "./UserMS";

import Login from './Login';

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
					<Routes>
						<Route path="/" element={<CustomerMS />} />
						<Route path="/users" element={<UserMS />} />
						<Route path="/contracts" element={<ContractMS />} />
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