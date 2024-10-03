import { ReactElement, ChangeEvent, FC, useState } from 'react';

import UserForm from '../../../components/Users/UserForm/UserForm';

import { initialDefaultValue } from 'helpers/defaultValue/initialDefaultValue';
import { updateUser } from '../redux/userSlice';
import { useAppDispatch, useAppSelector } from 'common/types/hooks/reduxHooks';
import { getUsers } from '../redux/selectors';
import { UsersState } from 'features/User/redux/types';
import { UserType } from 'common/types/types/types';

const EditUserForm: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { users }: UsersState = useAppSelector(getUsers);
  const [currentUser, setCurrentUser] = useState<UserType>(() => users[0] || initialDefaultValue);

  const selectCurrentUser = (e: ChangeEvent<HTMLSelectElement>): void => {
    const input: HTMLSelectElement = e.target;
    const value: string = input.value;

    const searchCurrentUser: UserType = Boolean(users.length)
      ? users.find(({ name }: UserType): boolean => name === value)!
      : initialDefaultValue;

    setCurrentUser(searchCurrentUser);
  };

  const onUpdateUser = (user: UserType): void => {
    const onUpdateCurrentUser: UserType[] = users.map(
      (item: UserType): UserType => (item.id === currentUser.id ? { ...user, id: item.id } : item)
    );

    dispatch(updateUser(onUpdateCurrentUser));
    setCurrentUser(user);
  };

  return (
    <>
      <label htmlFor="editUser">User</label>
      <select required name="editUser" onChange={selectCurrentUser} value={currentUser.name || 'Add User'}>
        {Boolean(users.length) ? (
          users.map(({ name, id }: UserType): ReactElement => {
            return (
              <option key={id} value={name}>
                {name}
              </option>
            );
          })
        ) : (
          <option value="Add User" disabled hidden>
            Add User
          </option>
        )}
      </select>
      <h3>User Information</h3>
      <UserForm initialValues={currentUser} newUser={onUpdateUser} />
      <button form="userForm" type="reset">
        Undo
      </button>
      <button form="userForm" type="submit">
        Save
      </button>
    </>
  );
};

export default EditUserForm;
