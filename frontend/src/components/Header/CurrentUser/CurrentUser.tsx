import { FC, ReactElement } from 'react';

import { CurrentUserWrapperStyled, UserAvatar } from './CurrentUser.styled';

const CurrentUser: FC = (): ReactElement => {
  return (
    <CurrentUserWrapperStyled>
      <p>No name</p>
      <UserAvatar></UserAvatar>
    </CurrentUserWrapperStyled>
  );
};

export default CurrentUser;
