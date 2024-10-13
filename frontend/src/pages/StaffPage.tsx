import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import EmployeeList from 'features/Staff/StaffTable/StaffTable';
import AddEmployee from 'features/Staff/AddEmployee/AddEmployee';
import { SectionStyled } from 'components/UI/Section/Section.styled';
import { SectionTitleStyled } from 'components/UI/SectionTitle/SectionTitle.styled';
import EmployeeFilter from 'features/Staff/EmployeeFilter/EmployeeFilter';

const Staff: FC = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <SectionStyled>
      <SectionTitleStyled marginBottom="40px">{t('main.staff.title')}</SectionTitleStyled>
      <AddEmployee />
      <EmployeeFilter />
      <EmployeeList />
    </SectionStyled>
  );
};

export { Staff };
