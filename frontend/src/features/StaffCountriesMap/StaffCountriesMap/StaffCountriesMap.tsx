import { useEffect, useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

import { selectStaff } from 'features/Staff/redux/selectors';
import Markers from '../components/Markers/Markers';

import { useAppSelector } from 'common/tools/reduxTools';
import googleApi from 'helpers/API_KEYS/GoogleKeys';
import { getCoordinates } from 'API/geocodeApi';
import { EmployeeType } from 'common/types/types';
import { MarkerType } from '../components/types';

import { mapStyles } from './StaffCountriesMap.styled';

const defaultCenter = {
  lat: 48.8566,
  lng: 2.3522,
};

const StaffCountriesMap = () => {
  const staff: EmployeeType[] = useAppSelector(selectStaff);
  const [markers, setMarkers] = useState<MarkerType[]>([]);

  useEffect(() => {
    const fetchMarkers = async (): Promise<void> => {
      const newMarkers: MarkerType[] = await Promise.all(
        staff.map(async ({ name, country, id }: EmployeeType) => {
          const coordinates: google.maps.LatLngLiteral | null = await getCoordinates(country);
          return {
            name,
            position: coordinates,
            id: id!,
          } as MarkerType;
        })
      );

      setMarkers(newMarkers);
    };

    fetchMarkers();
  }, [staff]);

  return (
    <div style={mapStyles}>
      {!staff.length && <p>please add employee</p>}
      <APIProvider apiKey={googleApi} onLoad={() => console.log('Maps API has loaded.')}>
        <Map mapId="STAFF_MAP" defaultZoom={3} defaultCenter={defaultCenter}>
          <Markers markers={markers} />
        </Map>
      </APIProvider>
    </div>
  );
};

export default StaffCountriesMap;
