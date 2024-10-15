import styled from '@emotion/styled';

const BodyWrapperStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const MainWrapperStyled = styled.div`
  flex-grow: 1;
`;

const MainStyled = styled.main`
  height: calc(100% - 120px);
`;

export { BodyWrapperStyled, MainWrapperStyled, MainStyled };
