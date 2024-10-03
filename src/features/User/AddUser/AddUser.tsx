import { FC, ReactElement, useState } from 'react';
import { nanoid } from 'nanoid';

import Modal from 'components/Modal/Modal';
import UserForm from 'components/Users/UserForm/UserForm';

import { addUser } from '../redux/userSlice';
import { initialDefaultValue } from 'helpers/defaultValue/initialDefaultValue';
import { useAppDispatch, useAppSelector } from 'common/types/hooks/reduxHooks';
import { getUsers } from '../redux/selectors';
import { UserType } from 'common/types/types/types';
import { UsersState } from 'features/User/redux/types';

const AddUser: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { users }: UsersState = useAppSelector(getUsers);
  const [showModal, setShowModal] = useState<Boolean>(false);

  const generateUserId: string = nanoid();

  const toggleModal = () => {
    setShowModal((prevState: Boolean) => !prevState);
  };

  const onAddUser = (user: UserType): void => {
    user.id = generateUserId;
    const checkedUsers: boolean = users.some(({ name }: UserType): boolean => name.trim() === user.name.trim());

    if (!checkedUsers) {
      const addNewUser: UserType[] = [...users, user];
      dispatch(addUser(addNewUser));
      toggleModal();
    } else {
      alert('the user already exists');
    }
  };

  return (
    <>
      <button onClick={() => toggleModal()} type="button">
        Add User
      </button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <strong>ADD USER</strong>
          <UserForm initialValues={initialDefaultValue} newUser={onAddUser} />
          <button onClick={(): void => toggleModal()} type="button">
            Cancel
          </button>
          <button form="userForm" type="submit">
            Add
          </button>
        </Modal>
      )}
    </>
  );
};

export default AddUser;
