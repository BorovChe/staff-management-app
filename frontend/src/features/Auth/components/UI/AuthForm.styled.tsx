import styled from '@emotion/styled';

const AuthFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const SubmitWrapperStyled = styled.div`
  display: flex;
  gap: 30px;
`;

const SubmitBtnStyled = styled.button`
  min-width: 200px;
  padding: 12px;
  border-radius: 4px;
  border: none;

  font-size: 16px;
  color: var(--color-primary-white);

  background-color: var(--btn-primary-color);
`;

export { AuthFormStyled, SubmitWrapperStyled, SubmitBtnStyled };
