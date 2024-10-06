import { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { RiDeleteBin4Line } from 'react-icons/ri';

import { ProfessionSelect, CountrySelect, StatusSelect } from '../components/Fields';
import { filterUser } from '../redux/userSlice';
import { useAppDispatch } from 'common/hooks/reduxHooks';
import { UserType } from 'common/types/types';

import { ResetBtnStyled } from './UserFilter.styled';

const UserFilter: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<UserType>();
  const defaultValue = {
    profession: '',
    country: '',
    status: '',
  };

  const onSubmit = ({ profession, country, status }: UserType): void => {
    const filter = {
      profession,
      country,
      status,
    };
    dispatch(filterUser(filter));
  };

  return (
    <form id="filterForm" onSubmit={handleSubmit(onSubmit)}>
      <ProfessionSelect register={register} />
      <CountrySelect register={register} />
      <StatusSelect register={register} />
      <button type="submit">Search</button>
      <ResetBtnStyled type="reset" onClick={() => dispatch(filterUser(defaultValue))}>
        <RiDeleteBin4Line size={20} />
      </ResetBtnStyled>
    </form>
  );
};

export default UserFilter;
