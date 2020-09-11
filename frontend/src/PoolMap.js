import React, {useState, useEffect} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import './PoolMap.scss';

const PoolMap = ({pools, selectedPool, setSelectedPool}) => {
  const [center, setCenter] = useState([30.2669,-97.741])

  useEffect(()=>{
    if (selectedPool) {
      setCenter([selectedPool.location_1.latitude, selectedPool.location_1.longitude])
    }
  }, [selectedPool])

  return (
    <div className="PoolMap-container">
      <Map center={center} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
          {pools.map((pool)=>(
            <PoolMapMarker
              pool={pool}
              setSelectedPool={setSelectedPool}
            />
          ))}
      </Map>
    </div>
  );
}

const PoolMapMarker = ({pool, setSelectedPool}) => (
  <Marker
    position={[pool.location_1.latitude,pool.location_1.longitude]}
    onClick={()=>setSelectedPool(pool)}
  >
    <Popup>{pool.pool_name}</Popup>
  </Marker>
)

export default PoolMap;
