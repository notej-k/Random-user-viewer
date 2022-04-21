import React   from 'react';
import Map, { Marker } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = (props) => {

  const MAPBOXTOKEN = "pk.eyJ1IjoiamV0b25pOTk5IiwiYSI6ImNsMjZraHp2cDJraTkzYmxwbGloempkdDIifQ.IJhoIriClG0YiKCgnf9N8w";
  const MAPSTYLE = "mapbox://styles/mapbox/streets-v9";

  return (
    <Map
      initialViewState={{
        latitude: props.latitude,
        longitude: props.longitude,
        zoom: 1,
        
      }}
      style={{ width: window.innerWidth-6, height: 593 }}
      mapStyle={MAPSTYLE}
      mapboxAccessToken={MAPBOXTOKEN}
    >
      <Marker longitude={props.longitude} latitude={props.latitude} color="red" />
    </Map>
  )
}

export default MapComponent;