import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

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

export { NavLinkStyled, activeClassName };
