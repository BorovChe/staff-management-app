import { FC, ReactElement } from 'react';
import { RiDeleteBin4Line } from 'react-icons/ri';

import { EmployeeItemProps } from './types';

import {
  EmployeeItemStyled,
  EmployeeStyled,
  ProfessionStyled,
  CountryStyled,
  StatusStyle,
  DeleteStyled,
  DeleteBtnStyled,
} from './EmployeeItem.styled';

const EmployeeItem: FC<EmployeeItemProps> = ({
  employee: { name, profession, country, status, id },
  onDeleteEmployee,
}): ReactElement => {
  return (
    <EmployeeItemStyled>
      <EmployeeStyled>{name}</EmployeeStyled>
      <ProfessionStyled>{profession}</ProfessionStyled>
      <CountryStyled>{country}</CountryStyled>
      <StatusStyle>{status}</StatusStyle>
      <DeleteStyled>
        <DeleteBtnStyled type="button" onClick={(): void => onDeleteEmployee(id!)}>
          <RiDeleteBin4Line size={20} />
        </DeleteBtnStyled>
      </DeleteStyled>
    </EmployeeItemStyled>
  );
};

export default EmployeeItem;
