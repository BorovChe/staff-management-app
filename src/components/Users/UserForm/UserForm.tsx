import { FC, ReactElement, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import professions from 'data/professions.json';
import { getEuropeanCountries } from 'API/countryApi';

import { CountriesType, ProfessionType, UserType } from 'common/types/types/types';
import { UserFormType } from './types';

const UserForm: FC<UserFormType> = ({ initialValues, newUser }): ReactElement => {
  const [countries, setCountries] = useState<CountriesType[]>([]);

  const { register, handleSubmit, reset } = useForm<UserType>({ defaultValues: initialValues });

  useEffect((): void => {
    reset(initialValues);
  }, [initialValues, reset]);

  useEffect(() => {
    getEuropeanCountries().then(data => setCountries(data));
  }, []);

  const onSubmit = ({ name, profession, country, status }: UserType): void => {
    const updateUser = {
      id: '',
      name,
      profession,
      country,
      status,
    };

    newUser(updateUser);
  };

  return (
    <form id="userForm" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Full Name</label>
      <input type="text" placeholder="Enter full name" {...register('name')} />
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
      <label htmlFor="status">Status</label>
      <select {...register('status')}>
        <option value="Select status">Select status</option>
        {['active', 'disabled', 'blocked'].map((status: string): ReactElement => {
          return (
            <option key={status} value={status}>
              {status}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default UserForm;
