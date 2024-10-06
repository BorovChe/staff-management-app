import { Outlet } from 'react-router-dom';
import { AuthContainerStyled, AuthBlockStyled, NavListStyled, LinkStyleStyled } from './AuthContainer.styled';
import { useTranslation } from 'react-i18next';
import I18nSwitcher from 'components/I18nSwitcher/I18nSwitcher';

const AuthContainer = () => {
  const { t } = useTranslation();

  return (
    <AuthContainerStyled>
      <AuthBlockStyled>
        <h1>{t('auth.auth_title')}</h1>
        <Outlet />
        <NavListStyled>
          <li>
            <LinkStyleStyled to="signUp">{t('auth.sign_in')}</LinkStyleStyled>
          </li>
          <li>
            <LinkStyleStyled to="signIn">{t('auth.sign_up')}</LinkStyleStyled>
          </li>
        </NavListStyled>
        <I18nSwitcher />
      </AuthBlockStyled>
    </AuthContainerStyled>
  );
};

export default AuthContainer;
