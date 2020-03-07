import React, { Component } from 'react';
import './Events.css'
import Sun from './Sun'

class Events extends Component {
	render() {
		return (
			<div id='events'>
				<Sun style={{ overflow: "hidden" }} />
			</div>
		)
	}
}

export default Events;
