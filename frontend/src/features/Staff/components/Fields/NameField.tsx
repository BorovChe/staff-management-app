import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { EmployeeFieldProps } from './types';

import { FieldWrapperStyled, InputFieldStyled, LabelStyled } from '../UI/Field.styled';

const NameField: FC<EmployeeFieldProps> = ({ register, visibleLabel }): ReactElement => {
  const { t } = useTranslation();
  return (
    <FieldWrapperStyled>
      {visibleLabel && <LabelStyled htmlFor="name">{t('employee_form.name.label')}</LabelStyled>}
      <InputFieldStyled type="text" placeholder={t('employee_form.name.select')} {...register('name')} />
    </FieldWrapperStyled>
  );
};

export { NameField };
