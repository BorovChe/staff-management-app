import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import EmployeeItem from '../components/EmployeeItem/EmployeeItem';

import { useAppDispatch, useAppSelector } from 'common/hooks/reduxHooks';
import { employeeFilter } from '../EmployeeFilter/employeeFilterFunc';
import { deleteEmployee } from '../redux/employeeSlice';
import { selectFilterStaff, selectStaff } from '../redux/selectors';
import { EmployeeType } from 'common/types/types';

import {
  TableWrapperStyled,
  StaffTableStyled,
  HeadTitleStyled,
  NameColumnStyled,
  ProfessionColumnStyled,
  CountryColumnStyled,
  StatusColumnStyled,
  DeleteColumnStyled,
} from './StaffTable.styled';

const EmployeeTable: FC = (): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const staff: EmployeeType[] = useAppSelector(selectStaff);
  const filter = useAppSelector(selectFilterStaff);
  const visibleStaff = employeeFilter(staff, filter);

  const onDeleteEmployee = (id: string): void => {
    const employeeDelete = staff.filter((employee: EmployeeType): boolean => employee.id !== id);
    dispatch(deleteEmployee(employeeDelete));
  };

  return (
    <TableWrapperStyled>
      <StaffTableStyled>
        <thead>
          <HeadTitleStyled>
            <NameColumnStyled>{t('main.staff.employee_table.name')}</NameColumnStyled>
            <ProfessionColumnStyled>{t('main.staff.employee_table.profession')}</ProfessionColumnStyled>
            <CountryColumnStyled>{t('main.staff.employee_table.country')}</CountryColumnStyled>
            <StatusColumnStyled>{t('main.staff.employee_table.status')}</StatusColumnStyled>
            <DeleteColumnStyled></DeleteColumnStyled>
          </HeadTitleStyled>
        </thead>
        <tbody>
          {visibleStaff.map((employee: EmployeeType): ReactElement => {
            return <EmployeeItem key={employee.id} employee={employee} onDeleteEmployee={onDeleteEmployee} />;
          })}
        </tbody>
      </StaffTableStyled>
    </TableWrapperStyled>
  );
};

export default EmployeeTable;
