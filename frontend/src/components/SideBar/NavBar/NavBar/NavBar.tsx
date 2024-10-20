import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import NavBarLink from '../NavBarLink/NavBarLink';
import sideBarNav from '../data/data';
import { NavLinkType } from 'common/types/types';

import { NavListStyled, NavStyled } from './NavBar.styled';

const NavBar: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <NavStyled>
      <NavListStyled>
        {sideBarNav.map(
          ({ path, title }: NavLinkType): ReactElement => (
            <NavBarLink key={path} path={path} title={t(title)} />
          )
        )}
      </NavListStyled>
    </NavStyled>
  );
};

export default NavBar;
