import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { FilterValue, UserType } from 'common/types/types';
import { UsersState } from './types';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState: UsersState = {
  users: [],
  filterValue: {
    profession: '',
    country: '',
    status: '',
  },
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, { payload }: PayloadAction<UserType[]>) {
      state.users = payload;
    },
    updateUser(state, { payload }: PayloadAction<UserType[]>) {
      state.users = payload;
    },
    deleteUser(state, { payload }: PayloadAction<UserType[]>) {
      state.users = payload;
    },
    filterUser(state, { payload }: PayloadAction<FilterValue>) {
      state.filterValue = payload;
    },
  },
});

const persistConfig = { key: 'users', storage, whitelist: ['users'] };

export const userReducer = persistReducer(persistConfig, userSlice.reducer);
export const { addUser, updateUser, deleteUser, filterUser } = userSlice.actions;
