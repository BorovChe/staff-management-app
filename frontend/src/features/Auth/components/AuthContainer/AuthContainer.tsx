import { FC, ReactElement } from 'react';
import { Location, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import I18nSwitcher from 'features/i18n/components/I18nSwitcher/I18nSwitcher';
import AuthLink from '../AuthLink/AuthLink';
import { authLink } from 'features/Auth/data/data';
import { NavLinkType } from 'common/types/types';

import {
  AuthContainerStyled,
  AuthBlockStyled,
  AuthTitleStyled,
  NavListStyled,
  I18nSwitcherWtapper,
} from './AuthContainer.styled';

const AuthContainer: FC = (): ReactElement => {
  const { t } = useTranslation();
  const { pathname }: Location = useLocation();

  return (
    <AuthContainerStyled location={pathname}>
      <AuthBlockStyled>
        <AuthTitleStyled>{t('auth.auth_title')}</AuthTitleStyled>
        <Outlet />
        <NavListStyled>
          {authLink.map(
            ({ path, title }: NavLinkType): ReactElement => (
              <AuthLink key={path} path={path} title={t(title)} />
            )
          )}
        </NavListStyled>
        <I18nSwitcherWtapper>
          <I18nSwitcher />
        </I18nSwitcherWtapper>
      </AuthBlockStyled>
    </AuthContainerStyled>
  );
};

export default AuthContainer;
