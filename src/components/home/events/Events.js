import React, { Component } from 'react';

import EventCard from './EventCard'
import './Events.css'
import { Grid } from '@material-ui/core';
import Sun from './Sun'

import AppContext from '../../../AppContext';

class Events extends Component {

	constructor(props) {
		super(props);
		this.state = {
			events: [{
				"eventName": "DANCE",
				"eventImage": "https://miro.medium.com/max/1185/1*a1Sy9bAOy6vZzILhvhSYjA.png",
				"eventDescription": "DSC SASTRA",
				id: "demo1"
			},
			{
				"eventName": "DRAMA",
				"eventImage": "https://miro.medium.com/max/1185/1*a1Sy9bAOy6vZzILhvhSYjA.png",
				"eventDescription": "DSC SASTRA",
				id: "demo2"
			},
			{
				"eventName": "SINGING",
				"eventImage": "https://miro.medium.com/max/1185/1*a1Sy9bAOy6vZzILhvhSYjA.png",
				"eventDescription": "DSC SASTRA",
				id: "demo4"
			}]
		}
	}

	static contextType = AppContext;

	render() {
		console.log(this.context);
		return (
			<div id='events' class="container-fluid">
				Details on Events and Proshows Coming Soon...
				<Grid justify="space-between" container direction="row" alignItems="center">
					{
						this.state.events.map((value) => {
							console.log(value)
							return <Grid xs={11} sm={5} md={5} lg={3} item><EventCard event={value} class="eventCard" dataTarget="#demo4" /></Grid>
						})
					}
				</Grid>
				<Sun />
			</div>
		)
	}
}

export default Events;
