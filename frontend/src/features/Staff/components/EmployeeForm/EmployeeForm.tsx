import { FC, ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { NameField } from '../Fields';
import formSelects from 'features/Staff/data/data';
import { EmployeeType } from 'common/types/types';
import { FormSelectType } from 'features/Staff/types/types';
import { EmployeeFormProps } from './types';

import { EditFormStyled } from './EmployeeForm.styled';
import { FieldWrapperStyled } from '../UI/Field.styled';

const EmployeeForm: FC<EmployeeFormProps> = ({ initialValues, newEmployee, visibleLabel }): ReactElement => {
  const { register, handleSubmit, control, reset } = useForm<EmployeeType>({ defaultValues: initialValues });

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
    <EditFormStyled id="employeeForm" onSubmit={handleSubmit(onSubmit)}>
      <FieldWrapperStyled>
        <NameField visibleLabel={visibleLabel} register={register} />
      </FieldWrapperStyled>
      {formSelects.map(
        ({ component: Component }: FormSelectType, i: number): ReactElement => (
          <FieldWrapperStyled key={i}>
            <Component visibleLabel={visibleLabel} control={control} />
          </FieldWrapperStyled>
        )
      )}
    </EditFormStyled>
  );
};

export default EmployeeForm;
