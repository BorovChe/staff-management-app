import { FC, ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PublicRoutes, PrivateRoutes } from 'common/routes';
import { EditStaff, Staff, StaffCountries, Statistics } from 'pages';

import AuthContainer from 'features/Auth/components/AuthContainer/AuthContainer';
import { SignUpForm } from 'features/Auth/SignUpForm/SignUpForm';
import { SignInForm } from 'features/Auth/SignInForm/SignInForm';
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
            <Route index element={<Staff />} />
            <Route path="edit-employee" element={<EditStaff />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="staff-countries" element={<StaffCountries />} />
          </Route>
        </Route>
      </Routes>
    </AppStyled>
  );
};

export default App;
