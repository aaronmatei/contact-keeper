import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<h1>Helloo client</h1>
			</Fragment>
		</Router>
	);
};

export default App;
