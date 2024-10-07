import { FC, ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PublicRoutes, PrivateRoutes } from 'common/routes';
import { EditUsers, Users } from 'pages';

import AuthContainer from 'features/Auth/components/AuthContainer/AuthContainer';
import { SignInForm } from 'features/Auth/SignInForm/SignInForm';
import { SignUpForm } from 'features/Auth/SignUpForm/SignUpForm';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import { AppStyled } from './App.styled';

const App: FC = (): ReactElement => {
  return (
    <AppStyled>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route element={<AuthContainer />}>
            <Route path="signIn" element={<SignInForm />} />
            <Route path="signUp" element={<SignUpForm />} />
          </Route>
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route element={<SharedLayout />}>
            <Route index element={<Users />} />
            <Route path="edit-users" element={<EditUsers />} />
          </Route>
        </Route>
      </Routes>
    </AppStyled>
  );
};

export default App;
