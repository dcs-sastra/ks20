import React, { useState, useEffect } from 'react';
import { Modal, Button, Tab, Tabs } from 'react-bootstrap'
import './Events.css';

export default function EventModal({ show, handleClose, cluster }) {
    const [clusterDetails, setClusterDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [eventLoading, setEventLoading] = useState(false);
    const [key, setKey] = useState(null);
    const [eventDetails, setEventDetails] = useState([]);

    useEffect(() => {
        setLoading(true);
        if (cluster != null) {
            fetch(`https://ks-backend-20.herokuapp.com/clusters/${cluster}`).then((response) => response.json()).then((data) => {
                setClusterDetails(data);
                setKey(data['events'][0].id);
                setLoading(false);
            })
        }
    }, [cluster])
    useEffect(() => {
        setEventLoading(true);
        if (cluster != null) {
            fetch(`https://ks-backend-20.herokuapp.com/events/${key}`).then((response) => response.json()).then((data) => {
                setEventDetails(data);
                setEventLoading(false);
            })
        }
    }, [key, cluster])
    return (
        <>
            <Modal class="modal" show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{(cluster && !loading) ? clusterDetails.name : "Please wait"}</Modal.Title>
                </Modal.Header>
                {(cluster && !loading) ? (<>
                    <Modal.Body>
                        <Tabs
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                        >
                            {clusterDetails['events'].map((event) => {
                                return (
                                    <Tab eventKey={event.id} title={event.name}>
                                        {eventLoading ? "Loading" : (
                                            <div class="event-tab">
                                                <p>
                                                    {eventDetails.description}
                                                </p>
                                                <h2>
                                                    Contact Details
                                                </h2>
                                                <p>
                                                    {eventDetails.contacts.map((contact) => {
                                                        return (
                                                            <div class="contact-details">
                                                                <h3>{contact.name}</h3>
                                                                <h4>{contact.position}</h4>
                                                                <p>Phone: {contact.phone}</p>
                                                                <p>Email: {contact.email}</p>
                                                            </div>
                                                        )
                                                    })}
                                                </p>
                                            </div>
                                        )}
                                    </Tab>
                                )
                            })}
                        </Tabs>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={(eventLoading) ? null : () => window.open(eventDetails.reg_link)}>
                            Register
                    </Button>
                    </Modal.Footer></>) : "Loading"}
            </Modal>
        </>
    );
}