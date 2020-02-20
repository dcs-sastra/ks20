import React, {Component} from 'react';
import Events from './events/Events';
import Proshows from './proshows/Proshows';
import Timer from './timer/Timer';
import logo from '../../assets/logo.png';

import './Home.css';

class Home extends Component {
	render() {
		return (
			<div id="home">
				<div id="top" className="container">
					<img id="ks-logo-home" className="img-fluid" src={logo} />
					<Timer />
				</div>
				<Events />
				<Proshows />
			</div>	
		)
	}
}

export default Home;