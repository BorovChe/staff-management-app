import { FilterValue, EmployeeType } from 'common/types/types';

type StaffState = {
  staff: EmployeeType[];
  filterValue: FilterValue;
  isLoading: Boolean;
  error: null;
};

export type { StaffState };
