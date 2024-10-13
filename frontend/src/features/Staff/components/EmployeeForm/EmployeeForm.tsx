import { FC, ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { ProfessionSelect, StatusSelect, CountrySelect, NameField } from '../Fields';

import { EmployeeType } from 'common/types/types';
import { EmployeeFormProps } from './types';

const EmployeeForm: FC<EmployeeFormProps> = ({ initialValues, newEmployee }): ReactElement => {
  const { register, handleSubmit, reset } = useForm<EmployeeType>({ defaultValues: initialValues });

  useEffect((): void => {
    reset(initialValues);
  }, [initialValues, reset]);

  const onSubmit = ({ name, profession, country, status }: EmployeeType): void => {
    const updateEmployee = {
      name,
      profession,
      country,
      status,
    };

    newEmployee(updateEmployee);
  };

  return (
    <form id="employeeForm" onSubmit={handleSubmit(onSubmit)}>
      <NameField register={register} />
      <ProfessionSelect register={register} />
      <CountrySelect register={register} />
      <StatusSelect register={register} />
    </form>
  );
};

export default EmployeeForm;
