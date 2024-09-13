import styled from '@emotion/styled';

const detailsStyled = `padding: 28px 20px 28px 20px;`;

const UserItemStyled = styled.tr`
  font-weight: 300;
  color: #5e626b;

  &:nth-of-type(even) {
    background-color: #e3e8ee;
  }
`;

const UserStyled = styled.td`
  ${detailsStyled}

  width: 144px;
  padding-left: 36px;

  font-weight: 400;
  color: var(--color-primary-black);
`;

const DepartamentStyled = styled.td`
  ${detailsStyled}

  width: 364px;
`;

const CountryStyled = styled.td`
  ${detailsStyled}

  width: 160px;
`;

const StatusStyle = styled.td`
  ${detailsStyled}

  width: 60px;
`;

const DeleteStyled = styled.td`
  ${detailsStyled}

  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { UserItemStyled, UserStyled, DepartamentStyled, CountryStyled, StatusStyle, DeleteStyled };
