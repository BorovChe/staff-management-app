import { RootState } from 'store/store';

const getUsers = (state: RootState) => state.users;

export { getUsers };
