import { FC, ReactElement } from 'react';

import I18nSwitcher from '../../../features/i18n/components/I18nSwitcher/I18nSwitcher';
import { HeaderStyled } from './Header.styled';
import CurrentUser from '../CurrentUser/CurrentUser';

const Header: FC = (): ReactElement => {
  return (
    <HeaderStyled>
      <I18nSwitcher />
      <CurrentUser />
    </HeaderStyled>
  );
};

export default Header;
