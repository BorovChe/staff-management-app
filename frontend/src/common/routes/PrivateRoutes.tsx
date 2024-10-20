import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from 'common/tools/reduxTools';
import { selectAuth } from 'features/Auth/redux/selectors';

const PrivateRoutes: FC = (): JSX.Element => {
  const isLoggedIn = useAppSelector(selectAuth);
  if (isLoggedIn) {
    return <Outlet />;
  }
  return <Navigate to="/sign-in" replace={true} />;
};

export { PrivateRoutes };
