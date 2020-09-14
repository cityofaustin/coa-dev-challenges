import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import './PoolMap.scss';

const PoolMap = () => {
  return (
    <div className="PoolMap-container">
      <Map center={[30.2669,-97.741]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
          <PoolMapMarker position={[30.212930071000073,-97.80184931899998]} name="[insert pool name here]"/>
      </Map>
    </div>
  );
}

const PoolMapMarker = ({position, name}) => (
  <Marker
    position={position}
    onClick={()=>{}}
  >
    <Popup onClose={()=>{}}>{name}</Popup>
  </Marker>
)

export default PoolMap;
