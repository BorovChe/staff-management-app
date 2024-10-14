import { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

import { ProfessionSelect, CountrySelect, StatusSelect } from '../components/Fields';
import { filterEmployee } from '../redux/employeeSlice';
import { useAppDispatch } from 'common/hooks/reduxHooks';
import { EmployeeType } from 'common/types/types';

import { ResetBtnStyled } from './EmployeeFilter.styled';

const EmployeeFilter: FC = (): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { handleSubmit, control } = useForm<EmployeeType>();
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

  return (
    <form style={{ display: 'flex' }} id="filterForm" onSubmit={handleSubmit(onSubmit)}>
      <ProfessionSelect visibleLabel={false} control={control} />
      <CountrySelect visibleLabel={false} control={control} />
      <StatusSelect visibleLabel={false} control={control} />
      <button type="submit">{t('main.staff.employee_filter.search')}</button>
      <ResetBtnStyled type="reset" onClick={() => dispatch(filterEmployee(defaultValue))}>
        <RiDeleteBin4Line size={20} />
      </ResetBtnStyled>
    </form>
  );
};

export default EmployeeFilter;
