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
		let canvas = document.querySelector('.canvasWrapper');
		let body = document.body;
		let html = document.documentElement;
		let ht = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
		canvas.style.height = `${ht}px`;
	}

	render() {
	  	return (
		  	<BrowserRouter>
		  		<img src={moon} className="moon" />
		  		<img src={meteor} className="meteor" />

		  		<Navbar />

		        <Particles 
		            params={configs}
		            className = "canvasWrapper"
		        />

		        <Routes />
		    </BrowserRouter>
		);
	}
}

export default App;
