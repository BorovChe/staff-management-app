import { EmployeeType } from 'common/types/types';

type EmployeeFormProps = {
  initialValues: EmployeeType;
  newEmployee: (employee: EmployeeType) => void;
};

export type { EmployeeFormProps };
