import { googleApi } from 'helpers/API_KEYS/GoogleKeys';

const getCoordinates = async (country: string) => {
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${country}&key=${googleApi}`);
  const data = await response.json();
  if (data.results.length > 0) {
    return data.results[0].geometry.location;
  }
  return null;
};

export { getCoordinates };
