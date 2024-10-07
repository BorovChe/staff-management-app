import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const AuthContainerStyled = styled.div`
  position: relative;
  width: 100%;
  height: 298px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
`;

/* background-image: url(${props => (props.locationprop === '/' ? backgroundSpase : backgroundImg)}); */

const AuthBlockStyled = styled.div`
  position: absolute;
  top: 222px;
  left: 50%;
  background-color: #ffffff;
  border-radius: 24px;
  display: flex;
  padding: 24px 46px 50px 46px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  transform: translate(-50%, 0);
  min-width: 382px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 2px 1px rgba(0, 0, 0, 0.2);
`;

const NavListStyled = styled.ul`
  display: flex;
  justify-content: center;
  gap: 18px;
  list-style: none;
`;

const LinkStyleStyled = styled(NavLink)`
  color: #808080;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #4169e1;
  }

  &.active {
    color: #000000;
  }
`;

export { AuthContainerStyled, AuthBlockStyled, NavListStyled, LinkStyleStyled };
