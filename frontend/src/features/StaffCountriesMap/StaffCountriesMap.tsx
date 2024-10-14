import { APIProvider, Map } from '@vis.gl/react-google-maps';

const position = { lat: 53.54992, lng: 10.00678 };

const StaffCountriesMap = () => {
  const googleApi = process.env.REACT_APP_GOOGLE_MAPS_API_KEY!;

  return (
    <>
      <APIProvider apiKey={googleApi}>
        <Map defaultCenter={position} defaultZoom={10} mapId="DEMO_MAP_ID"></Map>
      </APIProvider>
    </>
  );
};

export default StaffCountriesMap;
