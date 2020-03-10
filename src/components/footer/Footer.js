import React, {Component} from 'react';
import './Footer.css';

import devLove from '../../assets/devLove.png';
import dscLogo from '../../assets/dsc-logo.png';

export default class Footer extends Component {
	render() {
		return (
			<div class="container-fluid ftr">
	            <div class="row">
	                <div class="col ctr">
	                    <img class="pic img img-fluid" src={window.location + "/cropped-ks20.png"} />
	                </div>
	            </div>
	            <div class="row">
	                <div class="col contdet">Contact Details</div>
	            </div>
	            <hr class="hor3" />
	            <div class="row">
	                <div class="col occ">
	                        <p>Overall Cultural Coordinator</p>
	                        <p class="tdet">Sri Krishna: 9677460642</p>
	                </div>
	            </div>
	            <hr class="hor2" />
	            <div class="row">
	                <div class="col dsc"><p><img src={devLove} className="img img-fluid" /></p><p><img src={dscLogo}  className="img img-fluid dsc-logo"/></p></div>
	            </div>
	            <div class="row dev">
	                <div class="col ctr">Developers</div>
	            </div>
	            <div class="row dev2">
	                <div class="col ctr"><p>Ramvardhan R.</p></div>
	                <div class="col ctr"><p>Vashanth S.</p></div>
	                <div class="col ctr"><p>Ayush Singh</p></div>
	                <div class="col ctr"><p>Shiva</p></div>
	                <div class="col ctr"><p>Deepakh Srinivasan</p></div>
	                <div class="col ctr"><p>K Ram Narayan</p></div>
	            </div>
	        </div>
		);
	}
}