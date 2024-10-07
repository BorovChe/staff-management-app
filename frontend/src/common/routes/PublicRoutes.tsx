import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from 'common/hooks/reduxHooks';
import { selectAuth } from 'features/Auth/redux/selectors';

const PublicRoutes: FC = (): JSX.Element => {
  const isLoggedIn = useAppSelector(selectAuth);
  if (!isLoggedIn) {
    return <Outlet />;
  }
  return <Navigate to="/" replace={true} />;
};

export { PublicRoutes };
