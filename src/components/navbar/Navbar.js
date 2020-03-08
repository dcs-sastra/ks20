import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
	constructor() {
		super();
		this.state = {
			active: ''
		}
	}

	componentDidMount() {
		this.setState({active: document.getElementById('home-link')})
	}

	changeActive = (e) => {
		this.state.active.classList.remove('active');
		e.target.parentNode.classList.add('active');
		this.setState({active: e.target.parentNode});
	}
	
	render() {
		return (
			<nav class="my-nav navbar navbar-expand-lg navbar-dark bg-dark">
			  <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
			    <a class="navbar-brand" href="#">
				<img src={window.location.origin + '/ks20.png'} height="75"/>
				</a>
			    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
			      <li class="nav-item active my-nav-item" id="home-link">
			        <a class="nav-link" href="#" onClick={(e)=>this.changeActive(e)}>Home <span class="sr-only">(current)</span></a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#events" onClick={(e) => this.changeActive(e)}>Events</a>
			      </li>
			      <li class="nav-item">
			        <a class="nav-link" href="#proshows" onClick={(e) => this.changeActive(e)}>Proshows</a>
			      </li>
			    </ul>
			  </div>
			</nav>
		)
	}
}

export default Navbar;