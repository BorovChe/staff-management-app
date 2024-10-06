import { ReactElement, ChangeEvent, FC, useState } from 'react';

import UserForm from '../components/UserForm/UserForm';

import { initialDefaultValue } from 'helpers/defaultValue/initialDefaultValue';
import { updateUser } from '../redux/userSlice';
import { useAppDispatch, useAppSelector } from 'common/hooks/reduxHooks';
import { selectUsers } from '../redux/selectors';
import { UserType } from 'common/types/types';

const EditUserForm: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const users: UserType[] = useAppSelector(selectUsers);
  const [currentUser, setCurrentUser] = useState<UserType>(() => users[0] || initialDefaultValue);

  const selectCurrentUser = (e: ChangeEvent<HTMLSelectElement>): void => {
    const input: HTMLSelectElement = e.target;
    const value: string = input.value;

    const searchCurrentUser: UserType =
      users && users.length ? users.find(({ name }: UserType): boolean => name === value)! : initialDefaultValue;

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
        {users && users.length ? (
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
