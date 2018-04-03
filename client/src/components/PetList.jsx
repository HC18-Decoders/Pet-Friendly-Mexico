import React from 'react';
import VetThumbnail from "./PetThumbnail.jsx";

const PetList = (props) => (
  <div>
    {props.pets.map(pet => <PetThumbnail pet={pet} key={pet.id} />)}
  </div>
)
