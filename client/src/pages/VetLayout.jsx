import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import VetList from "../components/VetList.jsx";

const VetLayout = (props) => (
  <div>
    <div>
      <h1 style={{color: "purple"}}> Vet-Profiles </h1>
    </div>
    <VetList vet={props.data.vet} match={props.match}/>
  </div>
)

export default VetLayout;
