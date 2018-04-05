import React from 'react';
import ResultsThumbnail from "./ResultsThumbnail.jsx";

const ResultsList = (props) => (
  <div>
    {props.vets.map(vet => <ResultsThumbnail match={props.match}
                                             vet={vet}
                                             key={vet.id} />)}
  </div>
)

export default ResultsList;
