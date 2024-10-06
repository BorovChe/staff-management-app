import { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import AuthField from '../components/AuthField/AuthField';
import { AuthType } from '../types/types';
import { signUp } from 'features/Auth/redux/authSlice';
import { useAppDispatch } from 'common/hooks/reduxHooks';

const SignUpForm: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<AuthType>();

  const onSubmit = ({ email, password }: AuthType): void => {
    console.log(email, password);
    dispatch(signUp(true));
  };

  return (
    <form id="userForm" onSubmit={handleSubmit(onSubmit)}>
      <AuthField register={register} type="email" label="Email" placeholder="Enter Email" />
      <AuthField register={register} type="password" label="Password" placeholder="Enter password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export { SignUpForm };
