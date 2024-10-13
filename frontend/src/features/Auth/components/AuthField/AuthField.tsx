import { FC, ReactElement } from 'react';

import { AuthFieldProps } from './types';

import { AuthFieldStyled } from './AuthField.styled';

const AuthField: FC<AuthFieldProps> = ({ register, type, placeholder }): ReactElement => {
  return (
    <>
      <AuthFieldStyled type={type} placeholder={placeholder} {...register(type)} />
    </>
  );
};

export default AuthField;
