import React from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker
} from 'react-google-maps';
import PropTypes from 'prop-types';
import '../styles/DataMap.css';

const DataMap = props => {
  const { dogData } = props;

  const Map = () => {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 30.267153, lng: -97.743057 }}
      >
        {dogData
          .filter(dogAtk => 'location' in dogAtk) // Some of the data is missing the location property
          .map((dogAtk, i) => (
            <Marker
              key={i}
              position={{
                lat: dogAtk.location.coordinates[1],
                lng: dogAtk.location.coordinates[0]
              }}
            />
          ))}
      </GoogleMap>
    );
  };

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <div className="mapContainer">
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDcddZn0zwfZ-TjYhwRDEq-nUhjB7sDY20"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
};

DataMap.propTypes = {
  dogData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DataMap;
