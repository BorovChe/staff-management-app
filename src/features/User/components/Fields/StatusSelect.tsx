import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { UserFieldProps } from './types';

const StatusSelect: FC<UserFieldProps> = ({ register }): ReactElement => {
  const { t } = useTranslation();

  return (
    <>
      <label htmlFor="status">{t('user_form.status.label')}</label>
      <select {...register('status')}>
        <option value={t('user_form.status.select')}>{t('user_form.status.select')}</option>
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
