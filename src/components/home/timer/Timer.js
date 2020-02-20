import React, {Component} from 'react';
import './Timer.css'

class Timer extends Component {
	constructor() {
		super();
		this.state = {
			days: 30,
			hours: 0,
			minutes: 0,
			seconds: 0,
			timeLeft: 100
		}
	}

	componentDidMount() {
		this.interval = setInterval(this.updateTimer, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	updateTimer = () => {
		let timeLeft = (new Date(2020, 2, 20)) - Date.now();
		let days = Math.floor(timeLeft / (1000*60*60*24));
		timeLeft %= (1000*60*60*24);
		let hours = Math.floor(timeLeft / (1000*60*60));
		timeLeft %= (1000*60*60);
		let minutes = Math.floor(timeLeft / (1000*60));
		timeLeft %= (1000*60);
		let seconds = Math.floor(timeLeft / (1000));
		this.setState({days, hours, minutes, seconds});
	}

	render() {
		return (
			<div id='timer'>
				<div>
					<div className="val">{this.state.days}</div>
					<div className="desc">DAYS</div>
				</div>
				<div>
					<div className="val">{this.state.hours}</div>
					<div className="desc">HRS</div>
				</div>
				<div>
					<div className="val">{this.state.minutes}</div>
					<div className="desc">MINS</div>
				</div>
				<div>
					<div className="val">{this.state.seconds}</div>
					<div className="desc">SECS</div>
				</div>

			</div>	
		)
	}
}

export default Timer;