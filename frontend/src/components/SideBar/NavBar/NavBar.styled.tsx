import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const NavStyled = styled.nav`
  margin-bottom: auto;
`;

const NavListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 65px;
  padding: 0 60px;
`;

const NavLinkStyled = styled(NavLink)`
  text-align: left;
  font-weight: 400;
  font-size: 16px;

  color: var(--color-primary-white);

  &.active {
    font-weight: 700;
  }
`;

const activeClassName = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '');

export { NavStyled, NavListStyled, NavLinkStyled, activeClassName };
