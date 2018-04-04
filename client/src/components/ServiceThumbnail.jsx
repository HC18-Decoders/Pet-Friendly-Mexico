import React from "react";
import { Link } from "react-router-dom";

const ServiceThumbnail = (props) => (
  <div style={{color: "purple"}}>
    <Link to={`${props.match.url}/${props.mentor.id}`}>
    </Link>
      <span style={{color: "purple"}} id="vetsFN">{`${props.service.first_name} ${props.service.last_name}`}</span>
  </div>
)

export default ServiceThumbnail;
