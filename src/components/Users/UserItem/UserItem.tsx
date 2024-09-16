import { RiDeleteBin4Line } from 'react-icons/ri';

import {
  UserItemStyled,
  UserStyled,
  ProfessionStyled,
  CountryStyled,
  StatusStyle,
  DeleteStyled,
} from './UserItem.styled';

type UserItemProps = {
  name: string;
  profession: string;
  country: string;
  status: string;
};

const UserItem: React.FC<UserItemProps> = ({ name, profession, country, status }): React.ReactElement => {
  return (
    <UserItemStyled>
      <UserStyled>{name}</UserStyled>
      <ProfessionStyled>{profession}</ProfessionStyled>
      <CountryStyled>{country}</CountryStyled>
      <StatusStyle>{status}</StatusStyle>
      <DeleteStyled>
        <RiDeleteBin4Line size={20} />
      </DeleteStyled>
    </UserItemStyled>
  );
};

export default UserItem;
