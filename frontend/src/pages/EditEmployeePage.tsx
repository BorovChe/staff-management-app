import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import EditStaffForm from 'features/Staff/EditEmployeeForm/EditEmployeeForm';
import { SectionStyled } from 'components/UI/Section/Section.styled';
import { SectionTitleStyled } from 'components/UI/SectionTitle/SectionTitle.styled';

const EditStaff: FC = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <SectionStyled>
      <SectionTitleStyled marginBottom="80px">{t('main.edit.title')}</SectionTitleStyled>
      <EditStaffForm />
    </SectionStyled>
  );
};

export { EditStaff };
