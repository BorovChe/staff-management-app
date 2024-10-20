import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';

import { EditStaff, Staff, StaffCountries, Statistics } from 'pages';

import AuthContainer from 'features/Auth/components/AuthContainer/AuthContainer';
import SignUpForm from 'features/Auth/SignUpForm/SignUpForm';
import SignInForm from 'features/Auth/SignInForm/SignInForm';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { Navigate } from 'react-router-dom';

const publicRoutes = {
  element: <PublicRoutes />,
  children: [
    {
      path: '',
      element: <AuthContainer />,
      children: [
        { path: 'sign-in', element: <SignInForm /> },
        { path: 'sign-up', element: <SignUpForm /> },
      ],
    },
  ],
};

const privateRoutes = {
  element: <PrivateRoutes />,
  children: [
    {
      path: '/',
      element: <SharedLayout />,
      children: [
        { index: true, element: <Staff /> },
        { path: 'edit-employee', element: <EditStaff /> },
        { path: 'statistics', element: <Statistics /> },
        { path: 'staff-countries', element: <StaffCountries /> },
      ],
    },
  ],
};

const errorPage = { path: '*', element: <Navigate to="/" replace /> };

export { publicRoutes, privateRoutes, errorPage };
