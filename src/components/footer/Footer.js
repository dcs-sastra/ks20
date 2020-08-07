import React, {Component} from 'react';
import './Footer.css';

import devLove from '../../assets/devLove.png';
import dscLogo from '../../assets/dsc-logo.png';

export default class Footer extends Component {
	render() {
		return (
			<div id="contact-us" className="container-fluid ftr">
	            <div className="row">
	                <div className="col ctr">
	                    <img className="pic img img-fluid" src={window.location.origin + "/cropped-ks20.png"} alt="KS Logo" />
	                </div>
	            </div>
	            <div className="row">
	                <div className="col contdet">Contact Details</div>
	            </div>
	            <hr className="hor3" />
	            <div className="row">
	                <div className="col occ">
	                        <p>Overall Cultural Coordinator</p>
	                        <p className="tdet">Sri Krishna: 9677460642</p>
	                </div>
	            </div>
	            <hr className="hor2" />
	            <div className="row">
	                <div className="col dsc"><p><img src={devLove} className="img img-fluid" alt="love" /></p><p><img src={dscLogo}  className="img img-fluid dsc-logo" alt="DSC Logo" /></p></div>
	            </div>
	            <div className="row dev">
	                <div className="col ctr">Developers</div>
	            </div>
	            <div className="row dev2">
	                <div className="col ctr"><p>Ramvardhan R.</p></div>
	                <div className="col ctr"><p>Vashanth S.</p></div>
	                <div className="col ctr"><p>Ayush Singh</p></div>
	                <div className="col ctr"><p>Shiva</p></div>
	                <div className="col ctr"><p>Deepakh Srinivasan</p></div>
	                <div className="col ctr"><p>K Ram Narayan</p></div>
	            </div>
	        </div>
		);
	}
}