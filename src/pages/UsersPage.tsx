import { FC, ReactElement } from 'react';

import UserList from 'features/User/UserTable/UserTable';
import AddUser from 'features/User/AddUser/AddUser';
import { SectionStyled } from 'components/UI/Section/Section.styled';
import { SectionTitleStyled } from 'components/UI/SectionTitle/SectionTitle.styled';
import UserFilter from 'features/User/UserFilter/UserFilter';

const Users: FC = (): ReactElement => {
  return (
    <SectionStyled>
      <SectionTitleStyled marginBottom="40px">USERS</SectionTitleStyled>
      <AddUser />
      <UserFilter />
      <UserList />
    </SectionStyled>
  );
};

export { Users };
