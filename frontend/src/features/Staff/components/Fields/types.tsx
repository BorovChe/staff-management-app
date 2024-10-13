import { UseFormRegister } from 'react-hook-form';

import { EmployeeType } from 'common/types/types';

type EmployeeFieldProps = {
  register: UseFormRegister<EmployeeType>;
};

export type { EmployeeFieldProps };
