type CoordinatesResponseType = {
  results: {
    geometry: { location: google.maps.LatLngLiteral };
  }[];
  status: string;
};

export type { CoordinatesResponseType };
