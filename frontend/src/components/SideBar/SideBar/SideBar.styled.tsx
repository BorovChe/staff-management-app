import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const AsideStyled = styled.aside`
  min-width: 250px;
  width: 250px;

  display: flex;
  flex-direction: column;

  background-color: var(--color-primary-accent);
`;

const LogoWrapperStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 70px;
  padding: 35px 35px 0 35px;

  font-family: var(--font-family);
  font-weight: 700;
  font-size: 16px;
  color: #fff;
`;

const LogoTitleStyled = styled.div`
  text-align: center;
`;

const LogoSubTitleStyled = styled.p`
  font-weight: 400;
`;

export { AsideStyled, LogoWrapperStyled, LogoTitleStyled, LogoSubTitleStyled };
