import { UseFormRegister } from 'react-hook-form';

import { AuthType } from '../../types/types';

type AuthFieldProps = {
  register: UseFormRegister<AuthType>;
  type: keyof AuthType;
  placeholder: string;
};

export type { AuthFieldProps };
