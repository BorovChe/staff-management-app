import sprite from 'components/images/sprite.svg';
import { FC } from 'react';
import { CustomIconProps } from './types';

const CustomIcon: FC<CustomIconProps> = ({ width, height, id }) => {
  return (
    <svg width={width} height={height}>
      <use href={sprite + '#' + id}></use>
    </svg>
  );
};

export default CustomIcon;
