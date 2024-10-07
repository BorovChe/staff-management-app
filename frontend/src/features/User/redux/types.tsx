import { FilterValue, UserType } from 'common/types/types';

type UsersState = {
  users: UserType[];
  filterValue: FilterValue;
  isLoading: Boolean;
  error: null;
};

export type { UsersState };
