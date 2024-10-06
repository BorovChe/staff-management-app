import { FC, ReactElement } from 'react';
import { AuthFieldProps } from './types';

const AuthField: FC<AuthFieldProps> = ({ register, type, label, placeholder }): ReactElement => {
  return (
    <>
      <label htmlFor={type}>{label}</label>
      <input type={type} placeholder={placeholder} {...register(type)} />
    </>
  );
};

export default AuthField;
