import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import logo from '../logo.svg';
import ProgressBar from './progress/ProgressBar';

import './app.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<ProgressBar />
			</div>
		);
	}
}

export default withRouter(App);
