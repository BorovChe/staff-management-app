import { FC, ReactElement } from 'react';
import { NavLinkType } from 'common/types/types';

import { NavLinkStyled, activeClassName } from './NavBarLink.styled';

export const NavBarLink: FC<NavLinkType> = ({ path, title }): ReactElement => {
  return (
    <li>
      <NavLinkStyled to={path} className={activeClassName}>
        {title}
      </NavLinkStyled>
    </li>
  );
};

export default NavBarLink;
