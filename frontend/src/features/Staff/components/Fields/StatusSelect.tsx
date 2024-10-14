import { FC, ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { EmployeeSelectProps } from './types';

import {
  FieldWrapperStyled,
  LabelStyled,
  OptionStyled,
  SelectButtonStyled,
  SelectOptionsStyled,
  SelectWrapperStyled,
} from '../UI/Field.styled';
import { Controller } from 'react-hook-form';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

const StatusSelect: FC<EmployeeSelectProps> = ({ visibleLabel, control }): ReactElement => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <FieldWrapperStyled>
      {visibleLabel && <LabelStyled htmlFor="status">{t('employee_form.status.label')}</LabelStyled>}
      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <SelectWrapperStyled>
            <SelectButtonStyled type="button" onClick={() => setIsOpen(!isOpen)}>
              {field.value || t('employee_form.status.select')}
              <span>{isOpen ? <MdOutlineKeyboardArrowUp size={20} /> : <MdOutlineKeyboardArrowDown size={20} />}</span>
            </SelectButtonStyled>

            {isOpen && (
              <SelectOptionsStyled>
                {['active', 'disabled', 'blocked'].map(
                  (status: string): ReactElement => (
                    <OptionStyled
                      key={status}
                      isSelected={field.value === status}
                      onClick={() => {
                        field.onChange(status);
                        setIsOpen(false);
                      }}
                    >
                      {status}
                    </OptionStyled>
                  )
                )}
              </SelectOptionsStyled>
            )}
          </SelectWrapperStyled>
        )}
      />
    </FieldWrapperStyled>
  );
};

export { StatusSelect };
