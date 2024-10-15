import { FC, ReactElement } from 'react';
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

import { MarkersProps } from './types';
import { MarkerType } from '../types';

const Markers: FC<MarkersProps> = ({ markers }): ReactElement => {
  return (
    <>
      {markers.map(
        ({ id, position }: MarkerType): ReactElement => (
          <AdvancedMarker key={id} position={position}>
            <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
          </AdvancedMarker>
        )
      )}
    </>
  );
};

export default Markers;
