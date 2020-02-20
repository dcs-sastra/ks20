import React, {Component} from 'react';
import Events from './events/Events';
import Proshows from './proshows/Proshows';
import Timer from './timer/Timer';
import logo from '../../assets/logo.png';

import './Home.css';

class Home extends Component {
	// componentDidMount() {
	// 	const logo = document.getElementById('ks-logo-home');
	// 	logo.classList.add('fade-in');
	// }
	render() {
		return (
			<div id="home">
				<div id="top">
					<img id="ks-logo-home" src={logo} />
					<Timer />
				</div>
				<Events />
				<Proshows />
			</div>	
		)
	}
}

export default Home;