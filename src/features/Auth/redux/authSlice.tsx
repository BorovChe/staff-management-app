import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { AuthState } from './types';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState: AuthState = {
  user: { name: '', email: '', password: '' },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, { payload }: PayloadAction<boolean>) {
      state.isLoggedIn = payload;
    },
    signUp(state, { payload }: PayloadAction<boolean>) {
      state.isLoggedIn = payload;
    },

    logOut(state, { payload }: PayloadAction<boolean>) {
      state.isLoggedIn = payload;
    },
  },
});

const persistConfig = { key: 'auth', storage, whitelist: ['isLoggedIn'] };

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
export const { signIn, signUp, logOut } = authSlice.actions;
