import { FC, ReactElement } from 'react';
import NavBar from './NavBar/NavBar';
import LogOut from './LogOut/LogOut';
import I18nSwitcher from '../I18nSwitcher/I18nSwitcher';

const Header: FC = (): ReactElement => {
  return (
    <header>
      <NavBar />
      <I18nSwitcher />
      <LogOut />
    </header>
  );
};

export default Header;
