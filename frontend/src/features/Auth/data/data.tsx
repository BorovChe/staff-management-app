import { NavLinkType } from 'common/types/types';
import { AuthFieldType } from '../types/types';

const authLink: NavLinkType[] = [
  {
    path: 'sign-up',
    title: 'auth.sign_up',
  },
  {
    path: 'sign-in',
    title: 'auth.sign_in',
  },
];

const authSignInFields: AuthFieldType[] = [
  {
    type: 'email',
    placeholder: 'auth_form.email_placeholder',
  },
  {
    type: 'password',
    placeholder: 'auth_form.password_placeholder',
  },
];

const authSignUpFields: AuthFieldType[] = [
  {
    type: 'name',
    placeholder: 'auth_form.name_placeholder',
  },
  ...authSignInFields,
];

export { authLink, authSignInFields, authSignUpFields };
