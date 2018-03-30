import React from "react";
import { Link } from "react-router-dom";

const PetThumbnail = (props) => (
  <div style={{color: "purple"}}>
    <Link to={`${props.match.url}/${props.mentor.id}`}>
    </Link>
      <span style={{color: "purple"}} id="vetsFN">{`${props.pet.name}`}</span>
  </div>
)

export default VetThumbnail;
