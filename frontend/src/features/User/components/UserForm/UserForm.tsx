import { FC, ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { ProfessionSelect, StatusSelect, CountrySelect, NameField } from '../../components/Fields';

import { UserType } from 'common/types/types';
import { UserFormProps } from './types';

const UserForm: FC<UserFormProps> = ({ initialValues, newUser }): ReactElement => {
  const { register, handleSubmit, reset } = useForm<UserType>({ defaultValues: initialValues });

  useEffect((): void => {
    reset(initialValues);
  }, [initialValues, reset]);

  const onSubmit = ({ name, profession, country, status }: UserType): void => {
    const updateUser = {
      name,
      profession,
      country,
      status,
    };

    newUser(updateUser);
  };

  return (
    <form id="userForm" onSubmit={handleSubmit(onSubmit)}>
      <NameField register={register} />
      <ProfessionSelect register={register} />
      <CountrySelect register={register} />
      <StatusSelect register={register} />
    </form>
  );
};

export default UserForm;
