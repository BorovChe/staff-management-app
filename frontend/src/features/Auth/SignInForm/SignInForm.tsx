import { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import CustomIcon from 'components/CustomIcon/CustomIcon';
import AuthField from '../components/AuthField/AuthField';
import { signIn } from 'features/Auth/redux/authSlice';
import { useAppDispatch } from 'common/tools/reduxTools';
import { authSignInFields } from '../data/data';
import { AuthFieldType, AuthType } from '../types/types';

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
      {authSignInFields.map(
        ({ type, placeholder }: AuthFieldType): ReactElement => (
          <AuthField key={type} register={register} type={type} placeholder={t(placeholder)} />
        )
      )}
      <SubmitWrapperStyled>
        <CustomIcon width="42px" height="42px" id="google" />
        <SubmitBtnStyled type="submit">{t('auth.sign_in')}</SubmitBtnStyled>
      </SubmitWrapperStyled>
    </AuthFormStyled>
  );
};

export default SignInForm;
