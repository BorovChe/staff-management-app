import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavBar: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="edit-users">{t('header.edit_user')}</NavLink>
        </li>
        <li>
          <NavLink to="/">{t('header.users')}</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
