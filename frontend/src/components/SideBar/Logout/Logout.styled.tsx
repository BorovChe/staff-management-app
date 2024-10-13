import styled from '@emotion/styled';
import { MdOutlineLogout } from 'react-icons/md';

const LogoutBtnStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  width: 100%;
  height: 60px;
  padding-left: 60px;

  font-weight: 400;
  font-size: 16px;
  color: var(--color-primary-white);
  border: none;
  background: var(--color-secondary-accent);

  &:hover {
    background-color: var(--warning-color);
  }
`;

const LogoutIconStyled = styled(MdOutlineLogout)`
  width: 22px;
  height: 22px;

  color: var(--color-primary-white);
`;

export { LogoutBtnStyled, LogoutIconStyled };
