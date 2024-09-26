import { useState } from 'react';

import UserForm from '../UserForm/UserForm';
import useLocalStorage from 'hooks/useLocalStorage';
import { initialDefaultValue } from 'helpers/defaultValue/initialDefaultValue';

const EditUsersForm: React.FC = (): React.ReactElement => {
  const [users, setUsers] = useLocalStorage('users', []);
  const [currentUser, setCurrentUser]: any = useState(() => users[0] || initialDefaultValue);

  const selectCurrentUser = (e: any) => {
    const { value } = e.target;
    const searchCurrentUser = Boolean(users.length)
      ? users.filter(({ name }: any) => name === value)
      : [initialDefaultValue];
    setCurrentUser(...searchCurrentUser);
  };

  const updateUser = (user: any) => {
    console.log(user);
    setUsers((prev: any) => [...prev, user]);
    setCurrentUser(user);
  };

  return (
    <>
      <label htmlFor="editUser">User</label>
      <select required name="editUser" onChange={selectCurrentUser} value={currentUser.name || 'Add User'}>
        {Boolean(users.length) ? (
          users.map(({ name, id }: any) => {
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
      <UserForm initialValues={currentUser} newUser={updateUser} />
      <button form="userForm" type="reset">
        Undo
      </button>
      <button form="userForm" type="submit">
        Save
      </button>
    </>
  );
};

export default EditUsersForm;
