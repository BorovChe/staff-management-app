import { Outlet } from 'react-router-dom';
import { AuthContainerStyled, AuthBlockStyled, NavListStyled, LinkStyleStyled } from './AuthContainer.styled';

const AuthContainer = () => {
  return (
    <AuthContainerStyled>
      <AuthBlockStyled>
        <h1>User Manager</h1>
        <Outlet />
        <NavListStyled>
          <li>
            <LinkStyleStyled to="signUp">SignUp</LinkStyleStyled>
          </li>
          <li>
            <LinkStyleStyled to="signIn">SignIn</LinkStyleStyled>
          </li>
        </NavListStyled>
      </AuthBlockStyled>
    </AuthContainerStyled>
  );
};

export default AuthContainer;
