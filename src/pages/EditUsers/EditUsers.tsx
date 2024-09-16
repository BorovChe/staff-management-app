import EditUsersForm from 'components/Users/EditUsersForm/EditUsersForm';

import { SectionStyled } from 'components/UI/Section/Section.styled';
import { SectionTitleStyled } from 'components/UI/SectionTitle/SectionTitle.styled';

const EditUsers: React.FC = (): React.ReactElement => {
  return (
    <SectionStyled>
      <SectionTitleStyled marginBottom="80px">EDIT USER</SectionTitleStyled>
      <EditUsersForm />
    </SectionStyled>
  );
};

export default EditUsers;
