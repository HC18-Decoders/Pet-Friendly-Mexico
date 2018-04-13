import React from 'react';
import {compose, withProps, withStateHandlers} from "recompose";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import {GOOGLE_API} from '../../../keys.js';

const MyMapComponent = compose(
  withProps({
    googleMapURL:`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API}&callback=initMap`,
    loadingElement: <div style={{height:'75%'}} />,
    containerElement: <div style={{height:'75%'}} />,
    mapElement:<div style={{height:'75%'}} />
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
<GoogleMap
  defaultZoom = {8}
  defaultCenter = {{lat:19.397925, lng:-99.171663}}
>
  {props.points.map(function(obj){
    return <Marker
      position={{lat: obj.location.coordinates[0], lat: obj.location.coordinates[1]}}/>
  })}
</GoogleMap>
)

export default MyMapComponent;
