import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch}

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<h1>Helloo client</h1>
		</div>
	);
};

export default App;
