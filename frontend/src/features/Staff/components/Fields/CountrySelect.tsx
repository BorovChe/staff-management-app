import { FC, ReactElement, useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { Controller } from 'react-hook-form';

import { getEuropeanCountries } from 'API/countryApi';
import { CountriesType } from 'common/types/types';
import { EmployeeSelectProps } from './types';

import {
  LabelStyled,
  OptionStyled,
  SelectButtonStyled,
  SelectOptionsStyled,
  SelectWrapperStyled,
} from '../UI/Field.styled';

const CountrySelect: FC<EmployeeSelectProps> = ({ visibleLabel, control }): ReactElement => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [countries, setCountries] = useState<CountriesType[]>([]);

  useEffect(() => {
    getEuropeanCountries().then(data => {
      setCountries(data);
    });
  }, []);

  return (
    <>
      {visibleLabel && <LabelStyled htmlFor="country">{t('employee_form.country.label')}</LabelStyled>}
      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <SelectWrapperStyled>
            <SelectButtonStyled type="button" onClick={() => setIsOpen(!isOpen)}>
              {field.value || t('employee_form.country.select')}
              <span>{isOpen ? <MdOutlineKeyboardArrowUp size={20} /> : <MdOutlineKeyboardArrowDown size={20} />}</span>
            </SelectButtonStyled>

            {isOpen && (
              <SelectOptionsStyled>
                {countries.map(
                  ({ name }: CountriesType): ReactElement => (
                    <OptionStyled
                      key={name.common}
                      isSelected={field.value === name.common}
                      onClick={() => {
                        field.onChange(name.common);
                        setIsOpen(false);
                      }}
                    >
                      {name.common}
                    </OptionStyled>
                  )
                )}
              </SelectOptionsStyled>
            )}
          </SelectWrapperStyled>
        )}
      />
    </>
  );
};

export { CountrySelect };
