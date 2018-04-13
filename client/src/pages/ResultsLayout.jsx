import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ResultsList from "../components/ResultsList.jsx";

const ResultsLayout = (props) => (
  <div>
    {console.log(props.vets)}
    <div>
      <h1 style={{color: "purple"}}> Results </h1>
    </div>
    <ResultsList vets={props.vets} match={props.match}/>
  </div>
)

export default ResultsLayout;
