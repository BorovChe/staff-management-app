import {
  TableWrapperStyled,
  UserTableStyled,
  HeadTitleStyled,
  NameColumnStyled,
  DepartamentColumnStyled,
  CountryColumnStyled,
  StatusColumnStyled,
  DeleteColumnStyled,
} from './UserTable.styled';
import UserItem from '../UserItem/UserItem';

type UserType = {
  id: string;
  name: string;
  departament: string;
  country: string;
  status: string;
};

const users: UserType[] = [
  {
    id: 'grgrvggr',
    name: 'Andrey Olishchuck',
    departament: 'Digital marketing',
    country: 'Ukraine',
    status: 'Active',
  },
  {
    id: 'grgrgrdggr',
    name: 'Andrey Olishchuck',
    departament: 'Digital marketing',
    country: 'Ukraine',
    status: 'Active',
  },
  {
    id: 'grgrgggr',
    name: 'Andrey Olishchuck',
    departament: 'Digital marketing',
    country: 'Ukraine',
    status: 'Active',
  },
  {
    id: 'grgrrggr',
    name: 'Andrey Olishchuck',
    departament: 'Digital marketing',
    country: 'Ukraine',
    status: 'Active',
  },
];

const UserTable: React.FC = (): React.ReactElement => {
  return (
    <TableWrapperStyled>
      <UserTableStyled>
        <thead>
          <HeadTitleStyled>
            <NameColumnStyled>Full Name</NameColumnStyled>
            <DepartamentColumnStyled>Department</DepartamentColumnStyled>
            <CountryColumnStyled>Country</CountryColumnStyled>
            <StatusColumnStyled>Status</StatusColumnStyled>
            <DeleteColumnStyled></DeleteColumnStyled>
          </HeadTitleStyled>
        </thead>
        <tbody>
          {users.map(({ id, name, departament, country, status }: UserType): React.ReactElement => {
            return <UserItem key={id} name={name} departament={departament} country={country} status={status} />;
          })}
        </tbody>
      </UserTableStyled>
    </TableWrapperStyled>
  );
};

export default UserTable;
