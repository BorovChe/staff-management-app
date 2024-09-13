import styled from '@emotion/styled';

const headTitleColumns = `padding: 28px 20px 28px 20px;`;

const TableWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserTableStyled = styled.table`
  text-align: left;
  table-layout: fixed;
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  border: 1px solid #e3e8ee;
`;
const HeadTitleStyled = styled.tr`
  font-family: var(--second-family);
  font-weight: 700;
  letter-spacing: 0.03em;
  border-bottom: 1px solid #e3e8ee;

  color: var(--color-primary-black);
`;

const NameColumnStyled = styled.th`
  ${headTitleColumns}

  width: 144px;
  padding-left: 36px;
`;
const DepartamentColumnStyled = styled.th`
  ${headTitleColumns}

  width: 364px;
`;

const CountryColumnStyled = styled.th`
  ${headTitleColumns}

  width: 160px;
`;

const StatusColumnStyled = styled.th`
  ${headTitleColumns}

  width: 60px;
`;

const DeleteColumnStyled = styled.th`
  ${headTitleColumns}

  width: 24px;
`;

export {
  TableWrapperStyled,
  UserTableStyled,
  HeadTitleStyled,
  NameColumnStyled,
  DepartamentColumnStyled,
  CountryColumnStyled,
  StatusColumnStyled,
  DeleteColumnStyled,
};
