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
		let timeLeft = (new Date(2020, 7, 15)) - Date.now();
		let days = Math.max(Math.floor(timeLeft / (1000*60*60*24)), 0);
		timeLeft %= (1000*60*60*24);
		let hours = Math.max(Math.floor(timeLeft / (1000*60*60)), 0);
		timeLeft %= (1000*60*60);
		let minutes = Math.max(Math.floor(timeLeft / (1000*60)), 0);
		timeLeft %= (1000*60);
		let seconds = Math.max(Math.floor(timeLeft / (1000)), 0);
		this.setState({days, hours, minutes, seconds});
	}

	render() {
		return (
			<div id='timer' className='fade-in'>
				<div className="timer-text">
					<div className="title">ESPERANZA</div>
					<div className="subtext">(15th-30th Aug)</div>
					<div className="normal">Launching In</div>
				</div>
				<div className="countdown">
					<div>
						<div className="unit">
							<div className="val">{this.state.days}</div>
							<div className="desc">DAYS</div>
						</div>
						<div className="unit">
							<div className="val">{this.state.hours}</div>
							<div className="desc">HRS</div>
						</div>
					</div>
					<div>
						<div className="unit">
							<div className="val">{this.state.minutes}</div>
							<div className="desc">MINS</div>
						</div>
						<div className="unit">
							<div className="val">{this.state.seconds}</div>
							<div className="desc">SECS</div>
						</div>
					</div>
				</div>
			</div>	
		)
	}
}

export default Timer;