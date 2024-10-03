import { FC, ReactElement } from 'react';
import { RiDeleteBin4Line } from 'react-icons/ri';

import { UserItemProps } from './types';

import {
  UserItemStyled,
  UserStyled,
  ProfessionStyled,
  CountryStyled,
  StatusStyle,
  DeleteStyled,
  DeleteBtnStyled,
} from './UserItem.styled';

const UserItem: FC<UserItemProps> = ({
  user: { name, profession, country, status, id },
  onDeleteUser,
}): ReactElement => {
  return (
    <UserItemStyled>
      <UserStyled>{name}</UserStyled>
      <ProfessionStyled>{profession}</ProfessionStyled>
      <CountryStyled>{country}</CountryStyled>
      <StatusStyle>{status}</StatusStyle>
      <DeleteStyled>
        <DeleteBtnStyled type="button" onClick={(): void => onDeleteUser(id)}>
          <RiDeleteBin4Line size={20} />
        </DeleteBtnStyled>
      </DeleteStyled>
    </UserItemStyled>
  );
};

export default UserItem;
