import UserItem from '../UserItem/UserItem';
import users from 'data/users.json';

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

type UserType = {
  id: string;
  name: string;
  profession: string;
  country: string;
  status: string;
};

const UserTable: React.FC = (): React.ReactElement => {
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
          {users.map(({ id, name, profession, country, status }: UserType): React.ReactElement => {
            return <UserItem key={id} name={name} profession={profession} country={country} status={status} />;
          })}
        </tbody>
      </UserTableStyled>
    </TableWrapperStyled>
  );
};

export default UserTable;
