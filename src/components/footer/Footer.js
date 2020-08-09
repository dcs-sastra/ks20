import React, {Component} from 'react';
import './Footer.css';

export default class Footer extends Component {

	constructor() {
		super();
		this.state = {}
	}

	componentDidMount() {
		fetch("https://ks-backend-20.herokuapp.com/fests")
			.then((response) => response.json())
			.then((data) => this.setState({data}));
	}

	getContacts = () => {
		if(!this.state.data || this.state.data.length <= 0 || !this.state.data[0].contacts || this.state.data[0].contacts.length <= 0) return null;
		return this.state.data[0].contacts.map(contact => (
			<div className="occ" key={contact.id}>
				<p className="contact-pos">{contact.position}</p>
				<p className="tdet">{contact.name}: {contact.phone}</p>
			</div>
		))
	}

	getSocialIcons = () => {
		if(!this.state.data || this.state.data.length <= 0 || !this.state.data[0].socials) return null;
		let links = {
			facebook: null,
			instagram: null,
			twitter: null
		};

		this.state.data[0].socials.forEach(social => {
			links[social.type.toLowerCase()] = social.url;
		})

		return (
			<div className="row">
				{links.facebook !== null && <a className="col social" href={links.facebook} target="_blank" rel="noopener noreferrer" ><img src="https://i.ibb.co/gvxN93K/facebook48.png" alt="facebook link" /></a>}
				{links.instagram !== null && <a className="col social" href={links.instagram} target="_blank" rel="noopener noreferrer"><img src="https://i.ibb.co/MpyzpFW/instagram48.png" alt="instagram link" /></a>}
				{links.twitter !== null && <a className="col social" href={links.twitter} target="_blank" rel="noopener noreferrer"><img src="https://i.ibb.co/Y3znnHp/twitter48.png" alt="twitter link" /></a>}
			</div>
		);

	}

	render() {
		return (
			<div id="contact-us" className="container-fluid ftr">
	            <div className="row">
	                <div className="col ctr">
	                    <img className="pic img img-fluid" src="https://i.ibb.co/ygdSQqJ/cropped-ks20.png" alt="KS Logo" />
	                </div>
	            </div>
	            <div className="row">
	                <div className="col contdet">Contact Details</div>
	            </div>
	            <hr className="hor3" />
	            <div className="">
					{this.getContacts()}
	            </div>
				
				{this.getSocialIcons()}
				
	            <hr className="hor2" />
	            <div className="row">
	                <div className="col dsc">
						<p><img src="https://i.ibb.co/kcqyYXs/devLove.png" className="img img-fluid" alt="love" /></p>
						<a href="http://dscsastra.com/" rel="noopener noreferrer" target="_blank"><p><img src="https://i.ibb.co/NVVf4hG/white-logo-transparent-1.png"  className="img img-fluid dsc-logo" alt="DSC Logo" /></p></a>
					</div>
	            </div>
	            <div className="row dev">
	                <div className="col ctr">Developers</div>
	            </div>
	            <div className="row dev2">
	                <div className="col-4 ctr"><p>Ramvardhan R.</p></div>
	                <div className="col-4 ctr"><p>Vashanth S.</p></div>
					<div className="col-4 ctr"><p>Aravind Srinivasan</p></div>
	                <div className="col-4 ctr"><p>Deepakh Srinivasan</p></div>
					<div className="col-4 ctr"><p>Ayush Singh</p></div>
	                <div className="col-4 ctr"><p>Shiva</p></div>
	                <div className="col ctr"><p>K Ram Narayan</p></div>
	            </div>
	        </div>
		);
	}
}