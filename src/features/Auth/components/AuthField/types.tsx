import { UseFormRegister } from 'react-hook-form';

import { AuthType } from '../../types/types';

type AuthFieldProps = {
  register: UseFormRegister<AuthType>;
  type: keyof AuthType;
  label: string;
  placeholder: string;
};

export type { AuthFieldProps };
