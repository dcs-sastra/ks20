import React, { useState, useEffect } from 'react';
import { Modal, Button, Tab, Tabs } from 'react-bootstrap'
import './Events.css';

export default function EventModal({ show, handleClose, cluster }) {
    const [clusterDetails, setClusterDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const [eventLoading, setEventLoading] = useState(false);
    const [currentEventId, setCurrentEventId] = useState(null);
    const [eventDetails, setEventDetails] = useState([]);

    useEffect(() => {
        setLoading(true);
        if (cluster !== null) {
            fetch(`https://ks-backend-20.herokuapp.com/clusters/${cluster}`)
                .then((response) => response.json())
                .then((data) => {
                    setClusterDetails(data);
                    setCurrentEventId(data['events'][0].id);
                    setLoading(false);
                });
        }
    }, [cluster]);

    useEffect(() => {
        setEventLoading(true);
        if (currentEventId !== null) {
            fetch(`https://ks-backend-20.herokuapp.com/events/${currentEventId}`)
                .then((response) => response.json())
                .then((data) => {
                    setEventDetails(data);
                    setEventLoading(false);
                });
        }
    }, [currentEventId]);

    function getSocialIcons() {
        console.log(clusterDetails.socials);
		if(!clusterDetails || !clusterDetails.socials) return null;
		let links = {
			facebook: null,
			instagram: null,
			twitter: null
		};

		clusterDetails.socials.forEach(social => {
			links[social.type.toLowerCase()] = social.url;
		})

		return (
			<div className="socials">
                {
                    links.facebook !== null && 
                    <div>
                        <a href={links.facebook} target="_blank" rel="noopener noreferrer" >
                            <img className="social" src="https://i.ibb.co/MBhZ2tS/facebook-black-48.png" alt="facebook link" />
                            Follow {clusterDetails.name} at facebook
                        </a>
                    </div>
                }
                {
                    links.instagram !== null && 
                    <div>
                        <a href={links.instagram} target="_blank" rel="noopener noreferrer" >
                            <img  className="social"  src="https://i.ibb.co/6W5DJs1/instagram-black-48.png" alt="instagram link" />
                            Follow {clusterDetails.name} at instagram
                        </a>
                    </div>
                }
				{
                    links.twitter !== null && 
                    <div>
                        <a href={links.twitter} target="_blank" rel="noopener noreferrer" >
                            <img className="social" src="https://i.ibb.co/khKkngS/twitter-black-48.png" alt="twitter link" />
                            Follow {clusterDetails.name} at twitter
                        </a>
                    </div>
                }
			</div>
		);

	}

    return (
        <>
            <Modal className="modal" show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{(cluster && !loading) ? clusterDetails.name : "Please wait"}</Modal.Title>
                </Modal.Header>
                {(cluster && !loading) ? (<>
                    <Modal.Body>
                        <Tabs
                            activeKey={currentEventId}
                            onSelect={(k) => setCurrentEventId(k)}
                        >
                            {
                                (clusterDetails['events'] && clusterDetails['events'].length > 0)
                                    ? clusterDetails['events'].map((event) =>
                                        <Tab eventKey={event.id} title={event.name} key={event.id} >
                                            {eventLoading ? "Loading" : (
                                                <div className="event-tab">
                                                    <p>
                                                        {eventDetails.description}
                                                    </p>
                                                    <h2>
                                                        Contact Details
                                                    </h2>
                                                    {
                                                        (eventDetails && eventDetails.contacts && eventDetails.contacts.length > 0) 
                                                            ?  eventDetails.contacts.map((contact) => 
                                                                <div className="contact-details" key={contact._id}>
                                                                    <h4>{contact.position}</h4>
                                                                    <p>{contact.name}: {contact.phone}</p>
                                                                </div>
                                                            )
                                                            : null
                                                    }
                                                    {getSocialIcons()}
                                                </div>
                                            )}
                                        </Tab>
                                    )
                                    : null
                            }
                        </Tabs>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={(eventLoading) ? null : () => window.open(eventDetails.reg_link)}>
                            Register
                    </Button>
                    </Modal.Footer></>) : "Loading"}
            </Modal>
        </>
    );
}