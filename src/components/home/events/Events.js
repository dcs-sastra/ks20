import React, { Component } from 'react';
import './Events.css'
import sun from '../../../assets/sun.png'

class Events extends Component {
	render() {
		return (
			<div id='events'>
				<img src={sun} id="sun" />
			</div>
		)
	}
}

export default Events;
