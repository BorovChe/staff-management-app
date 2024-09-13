import {
  UserItemStyled,
  UserStyled,
  DepartamentStyled,
  CountryStyled,
  StatusStyle,
  DeleteStyled,
} from './UserItem.styled';
import { RiDeleteBin4Line } from 'react-icons/ri';

type UserItemProps = {
  name: string;
  departament: string;
  country: string;
  status: string;
};

const UserItem: React.FC<UserItemProps> = ({ name, departament, country, status }): React.ReactElement => {
  return (
    <UserItemStyled>
      <UserStyled>{name}</UserStyled>
      <DepartamentStyled>{departament}</DepartamentStyled>
      <CountryStyled>{country}</CountryStyled>
      <StatusStyle>{status}</StatusStyle>
      <DeleteStyled>
        <RiDeleteBin4Line size={20} />
      </DeleteStyled>
    </UserItemStyled>
  );
};

export default UserItem;
