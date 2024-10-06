import { FC, ReactElement } from 'react';

import professions from 'data/professions.json';
import { ProfessionType } from 'common/types/types';
import { UserFieldProps } from './types';

const ProfessionSelect: FC<UserFieldProps> = ({ register }): ReactElement => {
  return (
    <>
      <label htmlFor="profession">Professions</label>
      <select {...register('profession')}>
        <option value="Select profession">Select profession</option>
        {professions.map(({ title, id }: ProfessionType): ReactElement => {
          return (
            <option key={id} value={title}>
              {title}
            </option>
          );
        })}
      </select>
    </>
  );
};

export { ProfessionSelect };
