import React, { useState, useEffect } from 'react';
import { Modal, Button, Tab, Tabs } from 'react-bootstrap'
import MarkdownView from 'react-showdown';
import './Events.css';

export default function EventModal({ show, handleClose, cluster }) {
    const [clusterDetails, setClusterDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const [eventLoading, setEventLoading] = useState(false);
    const [currentEventId, setCurrentEventId] = useState(null);
    const [eventDetails, setEventDetails] = useState({});

    useEffect(() => {
        setLoading(true);
        if (cluster !== null) {
            fetch(`https://ks-backend-20.herokuapp.com/clusters/${cluster}`)
                .then((response) => response.json())
                .then((data) => {
                    setClusterDetails(data);
                    if(data.events && data.events.length > 0) {
                        setCurrentEventId(data['events'][0].id);
                    }
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
                    console.log(data)
                });
        }
    }, [currentEventId]);

    function getSocialIcons() {
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
                            Follow {clusterDetails.name} on facebook
                        </a>
                    </div>
                }
                {
                    links.instagram !== null && 
                    <div>
                        <a href={links.instagram} target="_blank" rel="noopener noreferrer" >
                            <img  className="social"  src="https://i.ibb.co/6W5DJs1/instagram-black-48.png" alt="instagram link" />
                            Follow {clusterDetails.name} on instagram
                        </a>
                    </div>
                }
				{
                    links.twitter !== null && 
                    <div>
                        <a href={links.twitter} target="_blank" rel="noopener noreferrer" >
                            <img className="social" src="https://i.ibb.co/khKkngS/twitter-black-48.png" alt="twitter link" />
                            Follow {clusterDetails.name} on twitter
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
                                                    <div className="md">
                                                        <MarkdownView markdown = {eventDetails.description} />
                                                    </div>
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
                                                    {
                                                        eventDetails.poster_link
                                                            ? <div>
                                                                <img className="img img-fluid" src={eventDetails.poster_link} alt={`Poster for the event - ${eventDetails.name}`} />
                                                            </div>
                                                            : null
                                                    }
                                                    {
                                                        (eventDetails && eventDetails.youtube_link && eventDetails.youtube_link !== "")
                                                        ?   <iframe 
                                                                title={`youtube-embed-${event.id}`}
                                                                className="youtube-embed"
                                                                src={eventDetails.youtube_link} 
                                                                frameBorder="0" 
                                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                                                allowFullScreen 
                                                            />
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
                        {
                            (eventDetails && eventDetails.reg_link)
                                ? <a href={eventDetails.reg_link} target="_blank" rel="noreferrer noopener">
                                    <Button variant="success">Register</Button>
                                </a>
                                : null
                        }
                    </Modal.Footer></>) : "Loading"}
            </Modal>
        </>
    );
}