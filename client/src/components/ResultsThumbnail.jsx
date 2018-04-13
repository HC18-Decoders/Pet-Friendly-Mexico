import React from "react";
import { Link } from "react-router-dom";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
const ResultsThumbnail = (props) => (
  <Card>
    <CardMedia
        overlay={<CardTitle title={`${props.vet.businessName}`} subtitle={`${props.vet.businessType}`} />}
      >
       <img src="https://images.pexels.com/photos/68798/pexels-photo-68798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" height="640" width="426"/>
      </CardMedia>
      <CardTitle title= {`${props.vet.firstName}`} subtitle={`${props.vet.lastName}`} />
   <CardText>
     </CardText>
  <div style={{color: "black"}}>
    <Link to={`${props.match.url}/${props.vet.id}`}>
    </Link>
      <span style={{color: "black"}} id="vetsFN">
        {`${props.vet.phoneNumber} ${props.vet.streetAddress} ${props.vet.zipCode} ${props.vet.state} ${props.vet.city} ${props.vet.businessType}`}
      </span>
  </div>
  </Card>
);

export default ResultsThumbnail;
