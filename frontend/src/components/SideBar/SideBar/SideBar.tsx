import { FC, ReactElement } from 'react';
import logo from '../../images/logo/phoenix-logo.png';

import NavBar from '../NavBar/NavBar';
import Logout from '../Logout/Logout';

import { AsideStyled, LogoWrapperStyled, LogoTitleStyled, LogoSubTitleStyled } from './SideBar.styled';

const SideBar: FC = (): ReactElement => {
  return (
    <AsideStyled>
      <LogoWrapperStyled to="/">
        <img src={logo} width="60px" height="50px" alt="logo" />
        <LogoTitleStyled>
          <p>Staff</p>
          <LogoSubTitleStyled>Management</LogoSubTitleStyled>
        </LogoTitleStyled>
      </LogoWrapperStyled>
      <NavBar />
      <Logout />
    </AsideStyled>
  );
};

export default SideBar;
