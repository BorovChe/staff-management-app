import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import signInBg from 'components/images/authBg/signInBg.png';
import signUpBg from 'components/images/authBg/signUpBg.png';

import { BgImageProps } from './types';

const AuthContainerStyled = styled.div<BgImageProps>`
  background-image: url(${({ location }) => (location === '/signIn' ? signInBg : signUpBg)});
  position: relative;
  width: 100%;
  height: 298px;

  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  background-color: var(--background-primary-color);
`;

const AuthBlockStyled = styled.div`
  position: absolute;
  top: 222px;
  left: 50%;
  transform: translate(-50%, 0);

  width: 520px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  padding: 24px 46px 50px 46px;

  background-color: var(--color-primary-white);

  border-radius: 5px;
  box-shadow: 0 6px 4px 0 rgba(222, 219, 219, 0.25);
`;

const AuthTitleStyled = styled.h1`
  color: var(--color-primary-black);
`;

const NavListStyled = styled.ul`
  display: flex;
  justify-content: center;
  gap: 18px;
  list-style: none;
`;

const LinkStyleStyled = styled(NavLink)`
  color: #808080;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: var(--btn-primary-color);
  }

  &.active {
    color: #000;
  }
`;

const I18nSwitcherWtapper = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
`;

export { AuthContainerStyled, AuthBlockStyled, AuthTitleStyled, NavListStyled, LinkStyleStyled, I18nSwitcherWtapper };
