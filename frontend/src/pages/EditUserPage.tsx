import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import EditUsersForm from 'features/User/EditUserForm/EditUserForm';
import { SectionStyled } from 'components/UI/Section/Section.styled';
import { SectionTitleStyled } from 'components/UI/SectionTitle/SectionTitle.styled';

const EditUsers: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <SectionStyled>
      <SectionTitleStyled marginBottom="80px">{t('main.edit.title')}</SectionTitleStyled>
      <EditUsersForm />
    </SectionStyled>
  );
};

export { EditUsers };
