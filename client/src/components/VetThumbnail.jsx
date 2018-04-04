import React from "react";
import { Link } from "react-router-dom";

const VetThumbnail = (props) => (
  <div style={{color: "purple"}}>
    <Link to={`${props.match.url}/${props.mentor.id}`}>
    </Link>
      <span style={{color: "purple"}} id="vetsFN">{`${props.vet.first_name} ${props.vet.last_name}`}</span>
  </div>
)

export default VetThumbnail;
