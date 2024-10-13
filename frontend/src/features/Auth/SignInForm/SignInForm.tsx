import { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import CustomIcon from 'components/CustomIcon/CustomIcon';
import AuthField from '../components/AuthField/AuthField';
import { signIn } from 'features/Auth/redux/authSlice';
import { useAppDispatch } from 'common/hooks/reduxHooks';
import { AuthType } from '../types/types';

import { AuthFormStyled, SubmitBtnStyled, SubmitWrapperStyled } from '../components/UI/AuthForm.styled';

const SignInForm: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm<AuthType>();

  const onSubmit = ({ email, password }: AuthType): void => {
    console.log(email, password);
    dispatch(signIn(true));
  };

  return (
    <AuthFormStyled id="userForm" onSubmit={handleSubmit(onSubmit)}>
      <AuthField register={register} type="email" placeholder={t('auth_form.email_placeholder')} />
      <AuthField register={register} type="password" placeholder={t('auth_form.password_placeholder')} />
      <SubmitWrapperStyled>
        <CustomIcon width="42px" height="42px" id="google" />
        <SubmitBtnStyled type="submit">{t('auth.sign_in')}</SubmitBtnStyled>
      </SubmitWrapperStyled>
    </AuthFormStyled>
  );
};

export { SignInForm };
