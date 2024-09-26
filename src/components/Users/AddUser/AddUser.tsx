import { useState } from 'react';

import Modal from 'components/Modal/Modal';
import UserForm from 'components/Users/UserForm/UserForm';

import { initialDefaultValue } from 'helpers/defaultValue/initialDefaultValue';
import useLocalStorage from 'hooks/useLocalStorage';
import { nanoid } from 'nanoid';

const AddUser = () => {
  const [users, setUsers] = useLocalStorage('users', []);
  const [showModal, setShowModal] = useState(false);

  const generateUserId = nanoid();

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const addUser = (user: any) => {
    user.id = generateUserId;
    const checkedUsers = users.some(({ name }: any) => name.trim() === user.name.trim());

    if (!checkedUsers) {
      setUsers((prev: any) => [...prev, user]);
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
          <UserForm initialValues={initialDefaultValue} newUser={addUser} />
          <button onClick={() => toggleModal()} type="button">
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
