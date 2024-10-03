import { UserType } from 'common/types/types/types';

type UsersState = {
  users: UserType[];
  isLoading: Boolean;
  error: null;
};

export type { UsersState };
