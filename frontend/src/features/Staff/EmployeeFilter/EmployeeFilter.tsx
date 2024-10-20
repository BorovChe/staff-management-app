import { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

import { filterEmployee } from '../redux/employeeSlice';
import { useAppDispatch } from 'common/tools/reduxTools';
import { EmployeeType } from 'common/types/types';

import { ResetBtnStyled } from './EmployeeFilter.styled';
import { FormSelectType } from '../types/types';
import formSelects from '../data/data';

const EmployeeFilter: FC = (): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { handleSubmit, control, reset } = useForm<EmployeeType>();
  const defaultValue = {
    profession: '',
    country: '',
    status: '',
  };

  const onSubmit = ({ profession, country, status }: EmployeeType): void => {
    const filter = {
      profession,
      country,
      status,
    };
    dispatch(filterEmployee(filter));
  };

  const onResetFilter = (): void => {
    dispatch(filterEmployee(defaultValue));
    reset();
  };

  return (
    <form style={{ display: 'flex' }} id="filterForm" onSubmit={handleSubmit(onSubmit)}>
      {formSelects.map(
        ({ component: Component }: FormSelectType, i: number): ReactElement => (
          <Component key={i} visibleLabel={false} control={control} />
        )
      )}

      <button type="submit">{t('main.staff.employee_filter.search')}</button>
      <ResetBtnStyled type="reset" onClick={onResetFilter}>
        <RiDeleteBin4Line size={20} />
      </ResetBtnStyled>
    </form>
  );
};

export default EmployeeFilter;
