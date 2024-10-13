import { FC, ReactElement, useState } from 'react';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';

import Modal from 'components/Modal/Modal';
import EmployeeForm from 'features/Staff/components/EmployeeForm/EmployeeForm';
import { addEmployee } from '../redux/employeeSlice';
import { initialDefaultValue } from 'helpers/defaultValue/initialDefaultValue';
import { useAppDispatch, useAppSelector } from 'common/hooks/reduxHooks';
import { selectStaff } from '../redux/selectors';
import { EmployeeType } from 'common/types/types';

const AddEmployee: FC = (): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const staff: EmployeeType[] = useAppSelector(selectStaff);
  const [showModal, setShowModal] = useState<Boolean>(false);

  const generateEmployeeId: string = nanoid();

  const toggleModal = () => {
    setShowModal((prevState: Boolean) => !prevState);
  };

  const onAddEmployee = (employee: EmployeeType): void => {
    const newEmployee: EmployeeType = {
      ...employee,
      id: generateEmployeeId,
    };

    const checkedStaff: boolean = staff.some(({ name }: EmployeeType): boolean => name.trim() === employee.name.trim());

    if (!checkedStaff) {
      const addNewEmployee: EmployeeType[] = [...staff, newEmployee];
      dispatch(addEmployee(addNewEmployee));
      toggleModal();
    } else {
      alert('the employee already exists');
    }
  };

  return (
    <>
      <button onClick={() => toggleModal()} type="button">
        {t('main.staff.add_employee')}
      </button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <strong>{t('employee_modal.add_employee')}</strong>
          <EmployeeForm initialValues={initialDefaultValue} newEmployee={onAddEmployee} />
          <button onClick={(): void => toggleModal()} type="button">
            {t('employee_modal.cancel')}
          </button>
          <button form="employeeForm" type="submit">
            {t('employee_modal.add_employee_btn')}
          </button>
        </Modal>
      )}
    </>
  );
};

export default AddEmployee;
