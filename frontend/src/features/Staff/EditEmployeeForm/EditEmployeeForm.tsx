import { ReactElement, ChangeEvent, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import EmployeeForm from '../components/EmployeeForm/EmployeeForm';

import { initialDefaultValue } from 'helpers/defaultValue/initialDefaultValue';
import { updateEmployee } from '../redux/employeeSlice';
import { useAppDispatch, useAppSelector } from 'common/hooks/reduxHooks';
import { selectStaff } from '../redux/selectors';
import { EmployeeType } from 'common/types/types';

const EditEmployeeForm: FC = (): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const staff: EmployeeType[] = useAppSelector(selectStaff);
  const [currentEmployee, setCurrentEmployee] = useState<EmployeeType>(() => staff[0] || initialDefaultValue);

  const selectCurrentEmployee = (e: ChangeEvent<HTMLSelectElement>): void => {
    const input: HTMLSelectElement = e.target;
    const value: string = input.value;

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
    <>
      <label htmlFor="editEmployee">{t('main.edit.current_employee')}</label>
      <select
        required
        name="editEmployee"
        onChange={selectCurrentEmployee}
        value={currentEmployee.name || 'Add Employee'}
      >
        {staff.map(({ name, id }: EmployeeType): ReactElement => {
          return (
            <option key={id} value={name}>
              {name}
            </option>
          );
        })}
      </select>
      <h3>{t('main.edit.employee_info')}</h3>
      <EmployeeForm initialValues={currentEmployee} newEmployee={onUpdateEmployee} />
      <button form="employeeForm" type="reset">
        {t('main.edit.undo_btn')}
      </button>
      <button form="employeeForm" type="submit">
        {t('main.edit.save_btn')}
      </button>
    </>
  );
};

export default EditEmployeeForm;
