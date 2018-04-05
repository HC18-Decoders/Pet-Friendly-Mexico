import React from "react";
import { Link } from "react-router-dom";

const ResultsThumbnail = (props) => (
  <div style={{color: "purple"}}>
    <Link to={`${props.match.url}/${props.vet.id}`}>
    </Link>
      <span style={{color: "purple"}} id="vetsFN">
        {`${props.vet.firstName} ${props.vet.lastName} ${props.vet.phoneNumber} ${props.vet.address}`}
      </span>
  </div>
)

export default ResultsThumbnail;
