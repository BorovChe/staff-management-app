import { FC, ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { getEuropeanCountries } from 'API/countryApi';
import { CountriesType } from 'common/types/types';
import { EmployeeFieldProps } from './types';

const CountrySelect: FC<EmployeeFieldProps> = ({ register }): ReactElement => {
  const { t } = useTranslation();

  const [countries, setCountries] = useState<CountriesType[]>([]);

  useEffect(() => {
    getEuropeanCountries().then(data => {
      setCountries(data);
    });
  }, []);

  return (
    <>
      <label htmlFor="country">{t('employee_form.country.label')}</label>
      <select {...register('country')}>
        <option value={t('employee_form.country.select')}>{t('employee_form.country.select')}</option>
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
