import './EventCard.css';
import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Modal} from 'react-bootstrap';

class EventCard extends Component {
  openRules = () => {
		if(document.getElementById(this.props.event.id).querySelector('#rules').className=="container removeDisplay")
    document.getElementById(this.props.event.id).querySelector('#rules').className="container"
		document.getElementById(this.props.event.id).querySelector('#description').className="container removeDisplay"
		document.getElementById(this.props.event.id).querySelector('#contact').className="container removeDisplay"
		document.getElementById(this.props.event.id).querySelector('#ruleBut').classList.toggle('w3-gray')
		document.getElementById(this.props.event.id).querySelector('#descBut').classList.remove('w3-gray')
		document.getElementById(this.props.event.id).querySelector('#contBut').classList.remove('w3-gray')
	}

	openDesc = () =>{
		if(document.getElementById(this.props.event.id).querySelector('#description').className=="container removeDisplay")
    document.getElementById(this.props.event.id).querySelector('#description').className="container"
		document.getElementById(this.props.event.id).querySelector('#contact').className="container removeDisplay"
		document.getElementById(this.props.event.id).querySelector('#rules').className="container removeDisplay"
		document.getElementById(this.props.event.id).querySelector('#descBut').classList.toggle('w3-gray')
		document.getElementById(this.props.event.id).querySelector('#contBut').classList.remove('w3-gray')
		document.getElementById(this.props.event.id).querySelector('#ruleBut').classList.remove('w3-gray')
	}

	openContact = () => {
    console.dir(document.getElementById(this.props.event.id).querySelector('#contact'))
		if(document.getElementById(this.props.event.id).querySelector('#contact').className=="container removeDisplay")
    document.getElementById(this.props.event.id).querySelector('#contact').className="container"
		document.getElementById(this.props.event.id).querySelector('#description').className="container removeDisplay"
		document.getElementById(this.props.event.id).querySelector('#rules').className="container removeDisplay"
		document.getElementById(this.props.event.id).querySelector('#contBut').classList.toggle('w3-gray')
		document.getElementById(this.props.event.id).querySelector('#descBut').classList.remove('w3-gray')
		document.getElementById(this.props.event.id).querySelector('#ruleBut').classList.remove('w3-gray')
  }
  render()
  {
  return (
    <>  
      <div class="modal fade" id={this.props.event.id} tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg opacity-animate4">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">EVENT - {this.props.event.eventName}</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
              <div id="earth"></div>
            <div class="w3-container">
            <div class="w3-bar w3-blue" style={{fontSize:"30px",width:"70%",marginLeft:"10%"}}>
              <button class="w3-bar-item w3-button tablink w3-gray" onClick={this.openDesc} id="descBut">Description</button>
              <button class="w3-bar-item w3-button tablink" onClick={this.openRules} id="ruleBut">Rules</button>
              <button class="w3-bar-item w3-button tablink" onClick={this.openContact} id="contBut">Contact</button>
            </div>
            <hr/>

            <p style={{fontSize:"20px"}} class="container" id="description">
            DESCRIPTION: ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
            </p>

            <p style={{fontSize:"20px"}} class="container removeDisplay" id="rules">
            RULES: ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
            </p>

            <p style={{fontSize:"20px"}} class="container removeDisplay" id="contact">
            CONTACT: ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
            </p>
      
            </div>
          </div>
        </div>
        </div>
        </div>

      <Card class="eventCard">
        <CardActionArea data-toggle="modal" data-target={'#'+this.props.event.id}>
          <CardMedia
            component="img"
            alt={this.props.event.eventName}
            height="140"
            image={this.props.event.eventImage}
            title={this.props.event.eventName}
            class="eventImage"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.event.eventName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
}


export default EventCard;