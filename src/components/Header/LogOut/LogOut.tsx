import { FC, ReactElement } from 'react';

import { logOut } from 'features/Auth/redux/authSlice';
import { useAppDispatch } from 'common/hooks/reduxHooks';

const LogOut: FC = (): ReactElement => {
  const dispatch = useAppDispatch();

  return (
    <button type="button" onClick={() => dispatch(logOut(false))}>
      LogOut
    </button>
  );
};

export default LogOut;
