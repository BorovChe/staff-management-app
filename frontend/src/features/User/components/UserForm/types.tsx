import { UserType } from 'common/types/types';

type UserFormProps = {
  initialValues: UserType;
  newUser: (user: UserType) => void;
};

export type { UserFormProps };
