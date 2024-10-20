import { FC, ReactElement, useState } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

import { EmployeeType } from 'common/types/types';
import { CurrentUserSelectProps } from './types';

import { OptionStyled, SelectButtonStyled, SelectOptionsStyled, SelectWrapperStyled } from '../UI/Field.styled';

const CurrentUserSelect: FC<CurrentUserSelectProps> = ({ currentUserName, staff, onChange }): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onChangeSelect = (value: string): void => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <SelectWrapperStyled>
      <SelectButtonStyled onClick={() => setIsOpen(!isOpen)}>
        {currentUserName || 'Select an employee'}
        <span>{isOpen ? <MdOutlineKeyboardArrowUp size={20} /> : <MdOutlineKeyboardArrowDown size={20} />}</span>
      </SelectButtonStyled>

      {isOpen && (
        <SelectOptionsStyled>
          {staff.map(
            ({ name, id }: EmployeeType): ReactElement => (
              <OptionStyled key={id} isSelected={currentUserName === name} onClick={(): void => onChangeSelect(name)}>
                {name}
              </OptionStyled>
            )
          )}
        </SelectOptionsStyled>
      )}
    </SelectWrapperStyled>
  );
};

export default CurrentUserSelect;
