import UserList from 'components/Users/UserTable/UserTable';

import { SectionStyled } from 'components/UI/Section/Section.styled';
import { SectionTitleStyled } from 'components/UI/SectionTitle/SectionTitle.styled';

const Users: React.FC = (): React.ReactElement => {
  return (
    <SectionStyled>
      <SectionTitleStyled marginBottom="40px">USERS</SectionTitleStyled>
      <UserList />
    </SectionStyled>
  );
};

export default Users;
