import { FC, ReactElement, useState } from 'react';
import { nanoid } from 'nanoid';
import { useTranslation } from 'react-i18next';

import Modal from 'components/Modal/Modal';
import UserForm from 'features/User/components/UserForm/UserForm';
import { addUser } from '../redux/userSlice';
import { initialDefaultValue } from 'helpers/defaultValue/initialDefaultValue';
import { useAppDispatch, useAppSelector } from 'common/hooks/reduxHooks';
import { selectUsers } from '../redux/selectors';
import { UserType } from 'common/types/types';

const AddUser: FC = (): ReactElement => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const users: UserType[] = useAppSelector(selectUsers);
  const [showModal, setShowModal] = useState<Boolean>(false);

  const generateUserId: string = nanoid();

  const toggleModal = () => {
    setShowModal((prevState: Boolean) => !prevState);
  };

  const onAddUser = (user: UserType): void => {
    const newUser: UserType = {
      ...user,
      id: generateUserId,
    };

    const checkedUsers: boolean = users.some(({ name }: UserType): boolean => name.trim() === user.name.trim());

    if (!checkedUsers) {
      const addNewUser: UserType[] = [...users, newUser];
      dispatch(addUser(addNewUser));
      toggleModal();
    } else {
      alert('the user already exists');
    }
  };

  return (
    <>
      <button onClick={() => toggleModal()} type="button">
        {t('main.users.add_user')}
      </button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <strong>{t('user_modal.add_user')}</strong>
          <UserForm initialValues={initialDefaultValue} newUser={onAddUser} />
          <button onClick={(): void => toggleModal()} type="button">
            {t('user_modal.cancel')}
          </button>
          <button form="userForm" type="submit">
            {t('user_modal.add_user_btn')}
          </button>
        </Modal>
      )}
    </>
  );
};

export default AddUser;
