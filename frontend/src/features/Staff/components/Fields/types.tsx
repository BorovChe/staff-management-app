import { Control, UseFormRegister } from 'react-hook-form';

import { EmployeeType } from 'common/types/types';

type CurrentUserSelectProps = {
  currentUserName: string;
  staff: EmployeeType[];
  onChange: (name: string) => void;
};

type EmployeeSelectProps = {
  visibleLabel: boolean;
  control: Control<EmployeeType, any>;
};

type EmployeeFieldProps = {
  register: UseFormRegister<EmployeeType>;
  visibleLabel: boolean;
};

export type { EmployeeFieldProps, EmployeeSelectProps, CurrentUserSelectProps };
