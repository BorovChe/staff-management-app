import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from 'common/hooks/reduxHooks';
import { selectAuth } from 'features/Auth/redux/selectors';

const PrivateRoutes: FC = (): JSX.Element => {
  const isLoggedIn = useAppSelector(selectAuth);
  if (isLoggedIn) {
    return <Outlet />;
  }
  return <Navigate to="/signIn" replace={true} />;
};

export { PrivateRoutes };
