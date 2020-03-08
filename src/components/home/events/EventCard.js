import './EventCard.css';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Modal} from 'react-bootstrap';


function EventDescription(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter" class="eventDescriptionTitle">
          {props.eventName}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p class="eventDescription">
          {props.eventDescription}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


const EventCard = ({ event }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Card class="eventCard" onClick={() => setModalShow(true)}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={event.eventName}
            height="140"
            image={event.eventImage}
            title={event.eventName}
            class="eventImage"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {event.eventName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <EventDescription
        show={modalShow}
        onHide={() => setModalShow(false)}
        eventName={event.eventName}
        eventDescription = {event.eventDescription}
      />
    </>
  );
}


export default EventCard;