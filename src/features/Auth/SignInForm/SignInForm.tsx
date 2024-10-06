import { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import AuthField from '../components/AuthField/AuthField';
import { AuthType } from '../types/types';
import { useAppDispatch } from 'common/hooks/reduxHooks';
import { signIn } from 'features/Auth/redux/authSlice';

const SignInForm: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<AuthType>();

  const onSubmit = ({ name, email, password }: AuthType): void => {
    console.log(name, email, password);
    dispatch(signIn(true));
  };

  return (
    <form id="userForm" onSubmit={handleSubmit(onSubmit)}>
      <AuthField register={register} type="name" label="Name" placeholder="Enter full name" />
      <AuthField register={register} type="email" label="Email" placeholder="Enter Email" />
      <AuthField register={register} type="password" label="Password" placeholder="Enter password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export { SignInForm };
