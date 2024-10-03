import { FC, ReactElement } from 'react';

import UserItem from '../../../components/Users/UserItem/UserItem';

import { useAppDispatch, useAppSelector } from 'common/types/hooks/reduxHooks';
import { deleteUser } from '../redux/userSlice';
import { getUsers } from '../redux/selectors';
import { UserType } from 'common/types/types/types';
import { UsersState } from 'features/User/redux/types';

import {
  TableWrapperStyled,
  UserTableStyled,
  HeadTitleStyled,
  NameColumnStyled,
  ProfessionColumnStyled,
  CountryColumnStyled,
  StatusColumnStyled,
  DeleteColumnStyled,
} from './UserTable.styled';

const UserTable: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { users }: UsersState = useAppSelector(getUsers);

  const onDeleteUser = (id: string): void => {
    const userDelete = users.filter((user: UserType): boolean => user.id !== id);
    dispatch(deleteUser(userDelete));
  };

  return (
    <TableWrapperStyled>
      <UserTableStyled>
        <thead>
          <HeadTitleStyled>
            <NameColumnStyled>Full Name</NameColumnStyled>
            <ProfessionColumnStyled>Profession</ProfessionColumnStyled>
            <CountryColumnStyled>Country</CountryColumnStyled>
            <StatusColumnStyled>Status</StatusColumnStyled>
            <DeleteColumnStyled></DeleteColumnStyled>
          </HeadTitleStyled>
        </thead>
        <tbody>
          {users.map((user: UserType): ReactElement => {
            return <UserItem key={user.id} user={user} onDeleteUser={onDeleteUser} />;
          })}
        </tbody>
      </UserTableStyled>
    </TableWrapperStyled>
  );
};

export default UserTable;
