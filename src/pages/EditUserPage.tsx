import { FC, ReactElement } from 'react';

import EditUsersForm from 'features/User/EditUserForm/EditUserForm';
import { SectionStyled } from 'components/UI/Section/Section.styled';
import { SectionTitleStyled } from 'components/UI/SectionTitle/SectionTitle.styled';

const EditUsers: FC = (): ReactElement => {
  return (
    <SectionStyled>
      <SectionTitleStyled marginBottom="80px">EDIT USER</SectionTitleStyled>
      <EditUsersForm />
    </SectionStyled>
  );
};

export { EditUsers };
