import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const AuthLinkStyled = styled(NavLink)`
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

export { AuthLinkStyled };
