import { UseFormRegister } from 'react-hook-form';

import { UserType } from 'common/types/types';

type UserFieldProps = {
  register: UseFormRegister<UserType>;
};

export type { UserFieldProps };
