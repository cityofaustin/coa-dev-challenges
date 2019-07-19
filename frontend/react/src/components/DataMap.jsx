import React, { useState } from 'react';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import '../styles/DataMap.css';

const DataMap = props => {
  const { dogData } = props;

  const generateInfoPanel = selectedRecord => (
    <div className="infoPanel">
      <Grid container>
        <Grid item xs={8}>
          <p>
            <b>Name:</b>{' '}
            {`${selectedRecord.first_name} ${selectedRecord.last_name}`}
          </p>
        </Grid>
        <Grid className="zipText" item xs={4}>
          <p>
            <b>Zip:</b> {selectedRecord.zip_code}
          </p>
        </Grid>
        <Grid item xs={12}>
          <p>
            <b>Address:</b> {selectedRecord.address}
          </p>
        </Grid>
        <Grid className="descriptionText" item xs={12}>
          <p>{selectedRecord.description_of_dog}</p>
        </Grid>
      </Grid>
    </div>
  );

  const Map = () => {
    const [selectedRecord, setSelectedRecord] = useState(null);

    return (
      <GoogleMap
        defaultZoom={12}
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
              onClick={() => {
                setSelectedRecord(dogAtk);
              }}
            />
          ))}

        {selectedRecord && (
          <InfoWindow
            position={{
              lat: selectedRecord.location.coordinates[1],
              lng: selectedRecord.location.coordinates[0]
            }}
            onCloseClick={() => {
              setSelectedRecord(null);
            }}
          >
            {generateInfoPanel(selectedRecord)}
          </InfoWindow>
        )}
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
