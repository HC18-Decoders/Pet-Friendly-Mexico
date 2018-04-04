import React from 'react';
import ServiceThumbnail from "./ServiceThumbnail.jsx";

const ServiceList = (props) => (
  <div>
    {props.services.map(vet => <ServiceThumbnail service={service} key={service.id} />)}
  </div>
)
