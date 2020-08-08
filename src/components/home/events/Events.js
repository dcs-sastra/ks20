import React, { Component } from 'react';
import EventModal from './EventModal';
import {toast} from 'react-toastify';
import './Events.css'

class Events extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			currentOpenCategory: null,
			categories: [],
			clusterSelected: null
		}
		this.categoryGenerator = this.categoryGenerator.bind(this);
		this.handleModalClose = this.handleModalClose.bind(this);
	}

	componentDidMount() {
		fetch("https://ks-backend-20.herokuapp.com/categories/")
			.then((response) => response.json())
			.then((data) => this.setState({ categories: data }));
	}

	handleModalClose() {
		this.setState({ showModal: false });
	}

	categoryGenerator(category, thisCategoryIndex) {

		const handleCategoryClick = (e) => {
			let prevOpenCategory = this.state.currentOpenCategory;
			this.setState({ currentOpenCategory: thisCategoryIndex });
			e.target.nextElementSibling.style['height'] = e.target.nextElementSibling.scrollHeight + "px";
			if (prevOpenCategory !== null) {
				if (prevOpenCategory === thisCategoryIndex) this.setState({ currentOpenCategory: null });
				let prevTabElement = document.getElementsByClassName('category-head')[prevOpenCategory].nextElementSibling;
				prevTabElement.style['height'] = "0";
			}
		}

		const handleDisableCategoryClick = (categoryName) => {
			toast.error(`No events have been currently posted for ${categoryName}. Check later.`);
		}

		return (
			<div className="category-tab" key={category.id}>
				<div className={`category-head${!category.active ? ' disabled' : ''}`} onClick={category.active ? handleCategoryClick : (e) => {handleDisableCategoryClick(category.name)} }>
					{category.name}
					<span>{(thisCategoryIndex === this.state.currentOpenCategory) ? "-" : "+"}</span>
				</div>
				{
					category.active && 
					<div className="category-content">
						{
							(category.clusters && category.clusters.length > 0)
								? category.clusters.map((cluster) =>
									<div 
										key = {cluster.id}
										className = "cluster-card" 
										onClick = {() => this.setState({ clusterSelected: cluster.id, showModal: true})}
									>
										<img src={cluster.logo_url} alt={`${cluster.name} logo`} />
										<p>{cluster.name}</p>
									</div>
								)
								: null
						}
					</div>
				}
			</div>
		)
	}

	render() {
		let categoryTabs = [];
		if (this.state.categories.length > 0) {
			categoryTabs =  this.state.categories.map((category, index) => this.categoryGenerator(category, index));
		}
		return (
			<div id="events">
				<div id='categories'>
					<div className="heading"> Events </div>
					<div className="category-tabs">
						{(categoryTabs.length === 0) ? "Loading" : categoryTabs}
					</div>
					<EventModal show={this.state.showModal} handleClose={this.handleModalClose} cluster={this.state.clusterSelected} />
				</div>
			</div>
		)
	}
}

export default Events;