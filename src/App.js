import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Particles from 'react-particles-js';
import configs from './particleJSconfig.json';
import moon from './assets/moonpng.png';
import meteor from './assets/meteor2.png';

import Navbar from './components/navbar/Navbar';
import Routes from './components/Routes';

import './App.css';

class App extends Component {
	componentDidMount() {
		let canvas = document.querySelector('canvas.canvasWrapper');
		console.log(canvas);
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	render() {
	  	return (
		  	<BrowserRouter>
		  		<img src={moon} className="moon" />
		  		<img src={meteor} className="meteor" />

		  		<Navbar />

		        <Particles 
		        	width='100'
		        	height='100'
		            params={configs}
		            className = "canvasWrapper"
		            canvasClassName = "canvasWrapper"
		        />

		        <Routes />
		    </BrowserRouter>
		);
	}
}

export default App;
