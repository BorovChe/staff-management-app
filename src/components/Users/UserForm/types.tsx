import { UserType } from 'common/types/types/types';

type UserFormType = {
  initialValues: UserType;
  newUser: (user: UserType) => void;
};

export type { UserFormType };
