import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
            <NameColumnStyled>{t('main.users.user_table.name')}</NameColumnStyled>
            <ProfessionColumnStyled>{t('main.users.user_table.profession')}</ProfessionColumnStyled>
            <CountryColumnStyled>{t('main.users.user_table.country')}</CountryColumnStyled>
            <StatusColumnStyled>{t('main.users.user_table.status')}</StatusColumnStyled>
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
