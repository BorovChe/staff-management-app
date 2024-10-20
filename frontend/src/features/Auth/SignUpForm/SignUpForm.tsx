import { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import CustomIcon from 'components/CustomIcon/CustomIcon';
import AuthField from '../components/AuthField/AuthField';
import { useAppDispatch } from 'common/tools/reduxTools';
import { signUp } from 'features/Auth/redux/authSlice';
import { AuthFieldType, AuthType } from '../types/types';

import { AuthFormStyled, SubmitBtnStyled, SubmitWrapperStyled } from '../components/UI/AuthForm.styled';
import { authSignUpFields } from '../data/data';

const SignUpForm: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm<AuthType>();

  const onSubmit = ({ name, email, password }: AuthType): void => {
    console.log(name, email, password);
    dispatch(signUp(true));
  };

  return (
    <AuthFormStyled id="userForm" onSubmit={handleSubmit(onSubmit)}>
      {authSignUpFields.map(
        ({ type, placeholder }: AuthFieldType): ReactElement => (
          <AuthField key={type} register={register} type={type} placeholder={t(placeholder)} />
        )
      )}
      <SubmitWrapperStyled>
        <CustomIcon width="42px" height="42px" id="google" />
        <SubmitBtnStyled type="submit">{t('auth.sign_up')}</SubmitBtnStyled>
      </SubmitWrapperStyled>
    </AuthFormStyled>
  );
};

export default SignUpForm;
