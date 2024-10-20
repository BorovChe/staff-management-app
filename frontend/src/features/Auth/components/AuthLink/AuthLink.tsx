import { FC, ReactElement } from 'react';

import { NavLinkType } from 'common/types/types';

import { AuthLinkStyled } from './AuthLink.styled';

const AuthLink: FC<NavLinkType> = ({ path, title }): ReactElement => {
  return (
    <li>
      <AuthLinkStyled to={path}>{title}</AuthLinkStyled>
    </li>
  );
};

export default AuthLink;
