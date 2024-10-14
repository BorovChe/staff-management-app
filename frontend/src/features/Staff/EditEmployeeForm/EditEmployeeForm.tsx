import { ReactElement, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import EmployeeForm from '../components/EmployeeForm/EmployeeForm';

import { initialDefaultValue } from 'helpers/defaultValue/initialDefaultValue';
import { updateEmployee } from '../redux/employeeSlice';
import { useAppDispatch, useAppSelector } from 'common/hooks/reduxHooks';
import { selectStaff } from '../redux/selectors';
import { EmployeeType } from 'common/types/types';

import {
  CurrentUserWrapperStyled,
  CurrentUserSelectStyled,
  InformationTitleStyled,
  ButtonWrapperStyled,
  SaveBtnStyled,
  UndoBtnStyled,
} from './EditEmployeeForm.styled';
import CurrentUserSelect from '../components/Fields/CurrentUserSelect';

const EditEmployeeForm: FC = (): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const staff: EmployeeType[] = useAppSelector(selectStaff);
  const [currentEmployee, setCurrentEmployee] = useState<EmployeeType>(() => staff[0] || initialDefaultValue);

  const selectCurrentEmployee = (value: string): void => {
    const searchCurrentEmployee: EmployeeType =
      staff && staff.length ? staff.find(({ name }: EmployeeType): boolean => name === value)! : initialDefaultValue;
    setCurrentEmployee(searchCurrentEmployee);
  };

  const onUpdateEmployee = (employee: EmployeeType): void => {
    const onUpdateCurrentEmployee: EmployeeType[] = staff.map(
      (item: EmployeeType): EmployeeType => (item.id === currentEmployee.id ? { ...employee, id: item.id } : item)
    );

    dispatch(updateEmployee(onUpdateCurrentEmployee));
    setCurrentEmployee(employee);
  };

  return (
    <CurrentUserWrapperStyled>
      <CurrentUserSelectStyled>
        <label htmlFor="editEmployee">{t('main.edit.current_employee')}</label>
        <CurrentUserSelect staff={staff} currentUserName={currentEmployee.name} onChange={selectCurrentEmployee} />
      </CurrentUserSelectStyled>
      <InformationTitleStyled>{t('main.edit.employee_info')}</InformationTitleStyled>
      <EmployeeForm initialValues={currentEmployee} newEmployee={onUpdateEmployee} visibleLabel={true} />
      <ButtonWrapperStyled>
        <UndoBtnStyled form="employeeForm" type="reset">
          {t('main.edit.undo_btn')}
        </UndoBtnStyled>
        <SaveBtnStyled form="employeeForm" type="submit">
          {t('main.edit.save_btn')}
        </SaveBtnStyled>
      </ButtonWrapperStyled>
    </CurrentUserWrapperStyled>
  );
};

export default EditEmployeeForm;
