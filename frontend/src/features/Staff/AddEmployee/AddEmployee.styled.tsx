import styled from '@emotion/styled';

const AddEmployeeWrapperStyled = styled.div`
  width: 600px;
  padding: 40px 60px;
`;

const OpenModalBtnStyled = styled.button`
  width: 140px;

  padding: 10px 0;
  border-radius: 4px;

  color: var(--background-primary-color);
  background-color: var(--btn-primary-color);
`;

const AddEmployeeTitleStyled = styled.strong`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;

  font-family: var(--second-family);
  font-weight: 500;
  font-size: 24px;
  line-height: 1.3;
  letter-spacing: 0.25em;
`;

export { AddEmployeeWrapperStyled, OpenModalBtnStyled, AddEmployeeTitleStyled };
