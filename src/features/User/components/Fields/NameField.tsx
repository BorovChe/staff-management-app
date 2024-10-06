import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { UserFieldProps } from './types';

const NameField: FC<UserFieldProps> = ({ register }): ReactElement => {
  const { t } = useTranslation();
  return (
    <>
      <label htmlFor="name">{t('user_form.name.label')}</label>
      <input type="text" placeholder={t('user_form.name.select')} {...register('name')} />
    </>
  );
};

export { NameField };
