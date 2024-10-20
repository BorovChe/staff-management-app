import axios, { AxiosInstance } from 'axios';

import googleApi from 'helpers/API_KEYS/GoogleKeys';
import getData from './requestMiddleware';

import { CoordinatesResponseType } from './types';

const countriesCoordinatesApi: AxiosInstance = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode',
});

const getCoordinates = async (country: string): Promise<google.maps.LatLngLiteral | null> => {
  const results = await getData<CoordinatesResponseType, null>(
    countriesCoordinatesApi,
    `/json?address=${country}&key=${googleApi}`,
    null
  );

  if (results) return results.results[0].geometry.location;
  else return null;
};

export { getCoordinates };
