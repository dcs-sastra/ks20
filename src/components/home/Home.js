import React, {Component} from 'react';
import Events from './events/Events';
import Proshows from './proshows/Proshows';
import Timer from './timer/Timer';

import './Home.css';

class Home extends Component {
	render() {
		return (
			<div id="home">
				<div id="top" className="container">
					<img id="ks-logo-home" className="img-fluid" src={window.location.origin + '/logo.png'} />
					<Timer />
				</div>
				<Events />
				<Proshows />
			</div>	
		)
	}
}

export default Home;