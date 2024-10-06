import { FC, ReactElement } from 'react';
import NavBar from './NavBar/NavBar';
import LogOut from './LogOut/LogOut';

const Header: FC = (): ReactElement => {
  return (
    <header>
      <NavBar />
      <LogOut />
    </header>
  );
};

export default Header;
