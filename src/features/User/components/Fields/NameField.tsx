import { FC, ReactElement } from 'react';

import { UserFieldProps } from './types';

const NameField: FC<UserFieldProps> = ({ register }): ReactElement => {
  return (
    <>
      <label htmlFor="name">Full Name</label>
      <input type="text" placeholder="Enter full name" {...register('name')} />
    </>
  );
};

export { NameField };
