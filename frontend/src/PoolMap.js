import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import './PoolMap.scss';


const PoolMap = () => {
  const position = [30.2669,-97.741]
  return (
    <div className="PoolMap-container">
      <Map center={position} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
    </div>
  );
}

export default PoolMap;
