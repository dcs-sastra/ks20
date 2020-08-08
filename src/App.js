import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Particles from 'react-particles-js';
import configs from './particleJSconfig.json';
import moon from './assets/moonpng.png';
import meteor from './assets/meteor2.png';

import Navbar from './components/navbar/Navbar';
import Routes from './components/Routes';
import Footer from './components/footer/Footer';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

class App extends Component {

		constructor() {
			super();
			this.state = {
				data: {}
			}
		}

	componentDidMount() {
		this.canvas = document.querySelector('.canvasWrapper');
		this.body = document.querySelector('#root > div');
		this.html = document.documentElement;
		this.updateCanvasHeight();
		this.checkForUpdate = setInterval(this.updateCanvasHeight, 3000);
	}

	componentWillUnmount() {
		clearInterval(this.checkForUpdate);
	}

	updateCanvasHeight = () => {
		let ht = Math.max( this.body.scrollHeight, this.body.offsetHeight);
		this.canvas.style.height = `${ht}px`;
	}

	render() {
	  	return (
			<div className="app">
				<BrowserRouter>
					<img src={moon} className="moon" alt="moon" />
					<img src={meteor} className="meteor" alt="meteor" />

					<Navbar />

					<Particles 
						params={configs}
						className = "canvasWrapper"
					/>

					<ToastContainer />

					<Routes />
					<Footer />

				</BrowserRouter>
			</div>
		);
	}
}

export default App;