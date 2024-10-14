import styled from '@emotion/styled';

import { OptionProps } from './types';

const FieldWrapperStyled = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LabelStyled = styled.label`
  font-size: 14px;
`;

const SelectWrapperStyled = styled.div`
  position: relative;
  width: 100%;
`;

const SelectButtonStyled = styled.button`
  padding: 10px 12px 10px 14px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--border-primary-color);
  border-radius: 5px;
  cursor: pointer;

  font-size: 14px;
  color: var(--color-primary-black);

  background-color: var(--color-primary-white);
`;

const SelectOptionsStyled = styled.ul`
  position: absolute;
  width: 100%;
  max-height: 200px;

  overflow-y: auto;
  z-index: 1;
  border-radius: 4px;
  border: 1px solid var(--border-primary-color);

  color: var(--color-primary-black);
  background-color: var(--color-primary-white);
`;

const OptionStyled = styled.li<OptionProps>`
  padding: 8px 12px 8px 14px;

  font-size: 14px;

  background-color: ${({ isSelected }: OptionProps): string => (isSelected ? '#d1d1d1' : 'white')};
  cursor: pointer;
`;

const InputFieldStyled = styled.input`
  padding: 12px 12px 12px 14px;
  width: 472px;

  font-size: 14px;
  border: 1px solid var(--border-primary-color);
  border-radius: 4px;

  outline: none;

  background-color: var(--color-primary-white);
`;

export {
  FieldWrapperStyled,
  LabelStyled,
  SelectWrapperStyled,
  SelectButtonStyled,
  SelectOptionsStyled,
  OptionStyled,
  InputFieldStyled,
};
