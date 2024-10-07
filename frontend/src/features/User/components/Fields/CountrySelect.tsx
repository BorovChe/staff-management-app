import { FC, ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getEuropeanCountries } from 'API/countryApi';
import { CountriesType } from 'common/types/types';
import { UserFieldProps } from './types';

const CountrySelect: FC<UserFieldProps> = ({ register }): ReactElement => {
  const { t } = useTranslation();

  const [countries, setCountries] = useState<CountriesType[]>([]);

  useEffect(() => {
    getEuropeanCountries().then(data => {
      setCountries(data);
    });
  }, []);

  return (
    <>
      <label htmlFor="country">{t('user_form.country.label')}</label>
      <select {...register('country')}>
        <option value={t('user_form.country.select')}>{t('user_form.country.select')}</option>
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
