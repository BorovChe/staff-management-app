import { FC, ReactElement, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { RiDeleteBin4Line } from 'react-icons/ri';

import { getEuropeanCountries } from 'API/countryApi';
import professions from 'data/professions.json';
import { CountriesType } from 'common/types/types/types';

import { ResetBtnStyled } from './UserFilter.styled';

const UserFilter: FC = (): ReactElement => {
  const [countries, setCountries] = useState<CountriesType[]>([]);

  useEffect(() => {
    getEuropeanCountries().then(data => {
      setCountries(data);
    });
  }, []);

  const { handleSubmit, register, reset } = useForm();

  const onSubmit = () => {
    reset();
  };

  return (
    <form id="filterForm" onSubmit={handleSubmit(onSubmit)}>
      <select {...register('profession')}>
        <option value="Select profession">Select profession</option>

        {professions.map(({ title, id }) => {
          return (
            <option key={id} value={title}>
              {title}
            </option>
          );
        })}
      </select>
      <label htmlFor="country">Country</label>
      <select {...register('country')}>
        <option value="Select country">Select country</option>
        {countries.map(({ name }: any) => {
          return (
            <option key={name.common} value={name.common}>
              {name.common}
            </option>
          );
        })}
      </select>

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

      <ResetBtnStyled type="reset">
        <RiDeleteBin4Line size={20} />
      </ResetBtnStyled>
    </form>
  );
};

export default UserFilter;
