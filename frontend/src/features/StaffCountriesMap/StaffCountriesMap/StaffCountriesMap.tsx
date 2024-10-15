import { useEffect, useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

import { selectStaff } from 'features/Staff/redux/selectors';
import Markers from '../components/Markers/Markers';

import { useAppSelector } from 'common/hooks/reduxHooks';
import { googleApi } from 'helpers/API_KEYS/GoogleKeys';
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
      const newMarkers: MarkerType[] = [];
      for (const employee of staff) {
        const { name, country, id }: EmployeeType = employee;
        const coordinates: google.maps.LatLngLiteral = await getCoordinates(country);
        if (coordinates) {
          newMarkers.push({
            name,
            position: coordinates,
            id: id!,
          });
        }
      }
      setMarkers(newMarkers);
    };

    fetchMarkers();
  }, [staff]);

  return (
    <div style={mapStyles}>
      <APIProvider apiKey={googleApi} onLoad={() => console.log('Maps API has loaded.')}>
        <Map mapId="STAFF_MAP" defaultZoom={3} defaultCenter={defaultCenter}>
          <Markers markers={markers} />
        </Map>
      </APIProvider>
    </div>
  );
};

export default StaffCountriesMap;
