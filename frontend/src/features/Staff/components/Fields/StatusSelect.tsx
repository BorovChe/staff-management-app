import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { EmployeeFieldProps } from './types';

const StatusSelect: FC<EmployeeFieldProps> = ({ register }): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <label htmlFor="status">{t('employee_form.status.label')}</label>
      <select {...register('status')}>
        <option value={t('employee_form.status.select')}>{t('employee_form.status.select')}</option>
        {['active', 'disabled', 'blocked'].map((status: string): ReactElement => {
          return (
            <option key={status} value={status}>
              {status}
            </option>
          );
        })}
      </select>
    </>
  );
};

export { StatusSelect };
