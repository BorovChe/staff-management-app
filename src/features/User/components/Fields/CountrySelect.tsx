import { FC, ReactElement, useEffect, useState } from 'react';

import { getEuropeanCountries } from 'API/countryApi';
import { CountriesType } from 'common/types/types';
import { UserFieldProps } from './types';

const CountrySelect: FC<UserFieldProps> = ({ register }): ReactElement => {
  const [countries, setCountries] = useState<CountriesType[]>([]);

  useEffect(() => {
    getEuropeanCountries().then(data => {
      setCountries(data);
    });
  }, []);

  return (
    <>
      <label htmlFor="country">Country</label>
      <select {...register('country')}>
        <option value="Select country">Select country</option>
        {countries.map(({ name }: CountriesType): ReactElement => {
          return (
            <option key={name.common} value={name.common}>
              {name.common}
            </option>
          );
        })}
      </select>
    </>
  );
};

export { CountrySelect };
