import React from 'react';
import VetThumbnail from "./VetThumbnail.jsx";

const VetList = (props) => (
  <div>
    {props.vets.map(vet => <VetThumbnail vet={vet} key={vet.id} />)}
  </div>
)
