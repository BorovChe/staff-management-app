import { EmployeeType } from 'common/types/types';

type EmployeeItemProps = {
  employee: EmployeeType;
  onDeleteEmployee: (id: string) => void;
};

export type { EmployeeItemProps };
