import { Location, Outlet, useLocation } from 'react-router-dom';
import {
  AuthContainerStyled,
  AuthBlockStyled,
  AuthTitleStyled,
  NavListStyled,
  LinkStyleStyled,
  I18nSwitcherWtapper,
} from './AuthContainer.styled';
import { useTranslation } from 'react-i18next';
import I18nSwitcher from 'features/i18n/components/I18nSwitcher/I18nSwitcher';

const AuthContainer = () => {
  const { t } = useTranslation();
  const { pathname }: Location = useLocation();

  return (
    <AuthContainerStyled location={pathname}>
      <AuthBlockStyled>
        <AuthTitleStyled>{t('auth.auth_title')}</AuthTitleStyled>
        <Outlet />
        <NavListStyled>
          <li>
            <LinkStyleStyled to="signUp">{t('auth.sign_up')}</LinkStyleStyled>
          </li>
          <li>
            <LinkStyleStyled to="signIn">{t('auth.sign_in')}</LinkStyleStyled>
          </li>
        </NavListStyled>
        <I18nSwitcherWtapper>
          <I18nSwitcher />
        </I18nSwitcherWtapper>
      </AuthBlockStyled>
    </AuthContainerStyled>
  );
};

export default AuthContainer;
