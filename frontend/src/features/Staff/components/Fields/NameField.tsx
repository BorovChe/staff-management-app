import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { EmployeeFieldProps } from './types';

const NameField: FC<EmployeeFieldProps> = ({ register }): ReactElement => {
  const { t } = useTranslation();
  return (
    <>
      <label htmlFor="name">{t('employee_form.name.label')}</label>
      <input type="text" placeholder={t('employee_form.name.select')} {...register('name')} />
    </>
  );
};

export { NameField };
