import React, { Component } from 'react';
import EventModal from './EventModal';
import './Events.css'

//Deleted Sun


import AppContext from '../../../AppContext';

class Events extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			currentTab: null,
			categories: [],
			clusterSelected: null
		}
		this.categoryTabGenerator = this.categoryTabGenerator.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleShow = this.handleShow.bind(this);
	}

	handleClose = () => {
		this.setState({ showModal: false });
		return false;
	}

	handleShow = () => {
		this.setState({ showModal: true });
		return true;
	}

	componentDidMount = () => {
		fetch("https://ks-backend-20.herokuapp.com/categories/").then((response) => response.json()).then((data) => this.setState({ categories: data }));
	}

	categoryTabGenerator(key, category) {
		return (
			<div className="category-tab">
				<div className="category-head" onClick={(e) => {
					let prevTab = this.state.currentTab;
					this.setState({ currentTab: key });
					e.target.nextElementSibling.style['height'] = e.target.nextElementSibling.scrollHeight + "px";
					if (prevTab != null) {
						if (prevTab == key)
							this.setState({ currentTab: null });
						let prevTabElement = document.getElementsByClassName('category-head')[prevTab].nextElementSibling;
						prevTabElement.style['height'] = "0";
					}
				}}>
					{category.name}
					<span style={{ "float": "right", "pointerEvents": "none" }}>{(key === this.state.currentTab) ? "-" : "+"}</span>
				</div>
				<div className="category-content">
					{category.clusters.map((cluster) => {
						return (
							<div className="cluster-card" onClick={() => {
								this.setState({ clusterSelected: cluster.id })
								this.handleShow();
							}}>
								<img src={cluster.logo_url} alt={cluster.name}></img>
								<p>{cluster.name}</p>
							</div>)
					})}
				</div>
			</div>
		)
	}

	render() {
		let categoryTabs = [];
		if (this.state.categories.length !== 0) {
			this.state.categories.forEach((category, i) => {
				categoryTabs.push(
					this.categoryTabGenerator(i, category)
				)
			});
		}
		return (
			<div id='categories'>
				<div className="heading">
					Details on Events and Proshows Coming Soon...
				</div>
				<div className="category-tabs">
					{(categoryTabs.length === 0) ? "Loading" : categoryTabs}
				</div>
				<EventModal show={this.state.showModal} handleClose={this.handleClose} cluster={this.state.clusterSelected} />
			</div>
		)
	}
}

export default Events;
