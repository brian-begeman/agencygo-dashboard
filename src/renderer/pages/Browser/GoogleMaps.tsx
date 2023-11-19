import GoogleMap from 'google-maps-react-markers';
import { useEffect, useRef, useState } from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import axios from 'axios';

const Map = ({ setLocationCoords }) => {
  const gApiKey = 'AIzaSyAy4ju0eocnpVLO3LpRI8aWVF31z5ruql4';
  const mapRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);
  const defaultCoords = { lat: 40.7128, lng: -74.006 };
  const [currentCoords, setCurrentCoords] = useState(defaultCoords);

  useEffect(() => {
    setLocationCoords(currentCoords);
  }, [currentCoords]);

  const onGoogleApiLoaded = ({ map }) => {
    mapRef.current = map;
    setMapReady(true);
  };

  return (
    <>
      <div style={{ width: '100%' }}>
        <GooglePlacesAutocomplete
          apiKey={'AIzaSyA4PmJsMQCUqWiAcSTHbQInNzgHobD69n4'}
          selectProps={{
            async onChange(p) {
              const pid = p?.value.place_id;
              const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${pid}&key=${gApiKey}`;
              const response = (await axios.get(url)).data;
              const coords = {
                lat: response.result.geometry.location.lat,
                lng: response.result.geometry.location.lng,
              };
              setCurrentCoords(coords);
            },
            styles: {
              option(base, props) {
                return {
                  ...base,
                  color: 'black',
                };
              },
            },
          }}
        />
        <GoogleMap
          apiKey={gApiKey}
          defaultCenter={defaultCoords}
          defaultZoom={10}
          mapMinHeight="30vh"
          onGoogleApiLoaded={onGoogleApiLoaded}
          onChange={(map) => {
            setCurrentCoords({
              lat: map.center[1],
              lng: map.center[0],
            });
          }}
        >
          <span
            markerId={'maps-d-23'}
            lat={currentCoords.lat}
            lng={currentCoords.lng}
          >
            <PlaceIcon fontSize="large" style={{ color: 'green' }} />
          </span>
        </GoogleMap>
      </div>
    </>
  );
};

export default Map;
