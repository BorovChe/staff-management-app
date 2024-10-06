import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { logOut } from 'features/Auth/redux/authSlice';
import { useAppDispatch } from 'common/hooks/reduxHooks';

const LogOut: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <button type="button" onClick={() => dispatch(logOut(false))}>
      {t('header.log_out')}
    </button>
  );
};

export default LogOut;
