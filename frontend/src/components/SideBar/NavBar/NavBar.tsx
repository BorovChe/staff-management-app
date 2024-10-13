import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { NavLinkStyled, NavListStyled, NavStyled, activeClassName } from './NavBar.styled';

const NavBar: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <NavStyled>
      <NavListStyled>
        <li>
          <NavLinkStyled to="/" className={activeClassName}>
            {t('header.staff')}
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="edit-employee" className={activeClassName}>
            {t('header.edit_employee')}
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="country" className={activeClassName}>
            Country
          </NavLinkStyled>
        </li>
      </NavListStyled>
    </NavStyled>
  );
};

export default NavBar;
