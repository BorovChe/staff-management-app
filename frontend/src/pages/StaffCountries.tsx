import StaffCountriesMap from 'features/StaffCountriesMap/StaffCountriesMap/StaffCountriesMap';
import { useTranslation } from 'react-i18next';

import { SectionStyled } from 'components/UI/Section/Section.styled';
import { SectionTitleStyled } from 'components/UI/SectionTitle/SectionTitle.styled';

const StaffCountries = () => {
  const { t } = useTranslation();

  return (
    <SectionStyled>
      <SectionTitleStyled marginBottom="20px">{t('main.staff_countries.title')}</SectionTitleStyled>
      <StaffCountriesMap />;
    </SectionStyled>
  );
};

export { StaffCountries };
