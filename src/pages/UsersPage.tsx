import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import UserList from 'features/User/UserTable/UserTable';
import AddUser from 'features/User/AddUser/AddUser';
import { SectionStyled } from 'components/UI/Section/Section.styled';
import { SectionTitleStyled } from 'components/UI/SectionTitle/SectionTitle.styled';
import UserFilter from 'features/User/UserFilter/UserFilter';

const Users: FC = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <SectionStyled>
      <SectionTitleStyled marginBottom="40px">{t('main.users.title')}</SectionTitleStyled>
      <AddUser />
      <UserFilter />
      <UserList />
    </SectionStyled>
  );
};

export { Users };
