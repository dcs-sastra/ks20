import React, { Component } from 'react';
import EventCard from './EventCard'
import './Events.css'
import { Grid } from '@material-ui/core';

class Events extends Component {

	constructor(props) {
		super(props);
		this.state = {
			events: [{
				"eventName": "DSC",
				"eventImage": "https://miro.medium.com/max/1185/1*a1Sy9bAOy6vZzILhvhSYjA.png",
				"eventDescription": "DSC SASTRA"
			},
			{
				"eventName": "DSC",
				"eventImage": "https://miro.medium.com/max/1185/1*a1Sy9bAOy6vZzILhvhSYjA.png",
				"eventDescription": "DSC SASTRA"
			},
			{
				"eventName": "DSC",
				"eventImage": "https://miro.medium.com/max/1185/1*a1Sy9bAOy6vZzILhvhSYjA.png",
				"eventDescription": "DSC SASTRA"
			}]
		}
	}
	render() {
		return (
			<div id='events' class="container-fluid">
				Details on Events and Proshows Coming Soon...
				<Grid justify="space-between" container direction="row" alignItems="center">
					{
						this.state.events.map((value) => {
							return <Grid xs={11} sm={5} md={5} lg={3} item><EventCard event={value} class="eventCard" /></Grid>
						})
					}
				</Grid>
			</div>
		)
	}
}

export default Events;