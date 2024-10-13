import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import professions from 'data/professions.json';
import { ProfessionType } from 'common/types/types';
import { EmployeeFieldProps } from './types';

const ProfessionSelect: FC<EmployeeFieldProps> = ({ register }): ReactElement => {
  const { t } = useTranslation();
  return (
    <>
      <label htmlFor="profession">{t('employee_form.professions.label')}</label>
      <select {...register('profession')}>
        <option value={t('employee_form.professions.select')}>{t('employee_form.professions.select')}</option>
        {professions.map(({ title, id }: ProfessionType): ReactElement => {
          return (
            <option key={id} value={title}>
              {title}
            </option>
          );
        })}
      </select>
    </>
  );
};

export { ProfessionSelect };
