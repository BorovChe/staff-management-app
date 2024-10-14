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
            {t('nav_bar.staff')}
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="edit-employee" className={activeClassName}>
            {t('nav_bar.edit_employee')}
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="statistics" className={activeClassName}>
            {t('nav_bar.statistics')}
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="staff-countries" className={activeClassName}>
            {t('nav_bar.staff_countries')}
          </NavLinkStyled>
        </li>
      </NavListStyled>
    </NavStyled>
  );
};

export default NavBar;
