import React from 'react';
import './Timer.css'

function Timer() {
	return (
		<div id='timer' className='fade-in'>
			<div className="timer-text">
				<div className="text">Kuruksastra</div>
				<a href="/#events">
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
						width="64" height="64"
						viewBox="0 0 226 226"
						className="down-arrow"
						style={{fill:"#000000"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{"mix-blend-mode": "normal"}}><path d="M0,226v-226h226v226z" fill="none"></path><g><path d="M3.48711,113c0,-60.47266 49.04023,-109.51289 109.51289,-109.51289c60.47266,0 109.51289,49.04023 109.51289,109.51289c0,60.47266 -49.04023,109.51289 -109.51289,109.51289c-60.47266,0 -109.51289,-49.04023 -109.51289,-109.51289z" fill="#000000"></path><path d="M156.74336,87.08945c-13.50703,13.50703 -27.01406,27.0582 -40.56523,40.56523c-13.55117,-13.55117 -27.10234,-27.10234 -40.65352,-40.65352c-11.82969,-11.82969 -30.10391,6.57695 -18.23008,18.45078c16.59688,16.59688 33.19375,33.19375 49.79063,49.79063c5.03203,5.03203 13.37461,4.89961 18.31836,-0.08828c16.59688,-16.59688 33.19375,-33.19375 49.79063,-49.79063c11.78555,-11.87383 -6.62109,-30.14805 -18.45078,-18.27422z" fill="#ffffff"></path></g></g>
					</svg>
				</a>
			</div>
		</div>	
	);
}

export default Timer;
