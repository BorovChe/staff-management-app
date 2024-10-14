import styled from '@emotion/styled';

const CurrentUserWrapperStyled = styled.div`
  width: 1080px;
`;

const CurrentUserSelectStyled = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  margin-bottom: 60px;
`;

const InformationTitleStyled = styled.h3`
  margin-bottom: 40px;

  font-size: 20px;
  line-height: 1.6;
  letter-spacing: 0.01em;
`;

const ButtonWrapperStyled = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
  margin-top: 80px;
`;

const ButtonStyled = styled.button`
  border-radius: 4px;

  color: var(--color-primary-white);
  background-color: var(--btn-primary-color);
`;

const SaveBtnStyled = styled(ButtonStyled)`
  width: 150px;

  padding: 10px 0;
`;

const UndoBtnStyled = styled(ButtonStyled)`
  width: 110px;

  background-color: var(--placeholder-primary-color);
  padding: 10px 0;
`;

export {
  CurrentUserWrapperStyled,
  CurrentUserSelectStyled,
  InformationTitleStyled,
  ButtonWrapperStyled,
  ButtonStyled,
  SaveBtnStyled,
  UndoBtnStyled,
};
