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

  <div style={{color: "black"}}>
    <Link to={`${props.match.url}/${props.vet.id}`}>
    </Link>
      <span style={{color: "black", display: "block"}} id="vetsFN">
        <ul>
        {`Numero ${props.vet.phoneNumber}
        Dirección  ${props.vet.streetAddress}
        Ciudad ${props.vet.city}
        Estado ${props.vet.state}
        Codigo Postal ${props.vet.zipCode}   `}
      </ul>
      </span>
  </div>
  </CardText>
  </Card>
);

export default ResultsThumbnail;
