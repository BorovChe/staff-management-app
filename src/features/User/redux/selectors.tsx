import { RootState } from 'store/store';

const selectUsers = (state: RootState) => state.users.users;

const selectFilterUsers = (state: RootState) => state.users.filterValue;

export { selectUsers, selectFilterUsers };
