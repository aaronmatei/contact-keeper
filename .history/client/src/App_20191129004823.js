import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<h1>Helloo client</h1>
			</div>
		</Router>
	);
};

export default App;
