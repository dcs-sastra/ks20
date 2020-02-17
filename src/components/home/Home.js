import React, {Component} from 'react';
import Events from './events/Events';
import Proshows from './proshows/Proshows';
import Timer from './timer/Timer';

import './Home.css';

class Home extends Component {
	render() {
		return (
			<div id="home">
				<img id="ks-logo-home" />
				<Timer />
				<Events />
				<Proshows />
			</div>	
		)
	}
}

export default Home;