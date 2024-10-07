import { UserType } from 'common/types/types';

type UserItemProps = {
  user: UserType;
  onDeleteUser: (id: string) => void;
};

export type { UserItemProps };
