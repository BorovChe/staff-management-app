import { FC, ReactElement } from 'react';

import UserItem from '../components/UserItem/UserItem';

import { useAppDispatch, useAppSelector } from 'common/hooks/reduxHooks';
import { userFilter } from '../UserFilter/userFilterFunc';
import { deleteUser } from '../redux/userSlice';
import { selectFilterUsers, selectUsers } from '../redux/selectors';
import { UserType } from 'common/types/types';

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
  const users: UserType[] = useAppSelector(selectUsers);
  const filter = useAppSelector(selectFilterUsers);
  const visibleUsers = userFilter(users, filter);

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
          {visibleUsers.map((user: UserType): ReactElement => {
            return <UserItem key={user.id} user={user} onDeleteUser={onDeleteUser} />;
          })}
        </tbody>
      </UserTableStyled>
    </TableWrapperStyled>
  );
};

export default UserTable;
