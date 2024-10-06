import { FC, ReactElement } from 'react';
import { UserFieldProps } from './types';

const StatusSelect: FC<UserFieldProps> = ({ register }): ReactElement => {
  return (
    <>
      <label htmlFor="status">Status</label>
      <select {...register('status')}>
        <option value="Select status">Select status</option>
        {['active', 'disabled', 'blocked'].map((status: any) => {
          return (
            <option key={status} value={status}>
              {status}
            </option>
          );
        })}
      </select>
    </>
  );
};

export { StatusSelect };
