import { EmployeeType } from 'common/types/types';

type EmployeeFormProps = {
  initialValues: EmployeeType;
  newEmployee: (employee: EmployeeType) => void;
  visibleLabel: boolean;
};

export type { EmployeeFormProps };
