import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { logOut } from 'features/Auth/redux/authSlice';
import { useAppDispatch } from 'common/hooks/reduxHooks';

import { LogoutBtnStyled, LogoutIconStyled } from './Logout.styled';

const Logout: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <LogoutBtnStyled type="button" onClick={() => dispatch(logOut(false))}>
      {t('header.log_out')}
      <LogoutIconStyled width="30px" height="30px" />
    </LogoutBtnStyled>
  );
};

export default Logout;
