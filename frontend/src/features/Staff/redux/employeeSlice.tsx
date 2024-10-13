import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { FilterValue, EmployeeType } from 'common/types/types';
import { StaffState } from './types';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState: StaffState = {
  staff: [],
  filterValue: {
    profession: '',
    country: '',
    status: '',
  },
  isLoading: false,
  error: null,
};

const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    addEmployee(state, { payload }: PayloadAction<EmployeeType[]>) {
      state.staff = payload;
    },
    updateEmployee(state, { payload }: PayloadAction<EmployeeType[]>) {
      state.staff = payload;
    },
    deleteEmployee(state, { payload }: PayloadAction<EmployeeType[]>) {
      state.staff = payload;
    },
    filterEmployee(state, { payload }: PayloadAction<FilterValue>) {
      state.filterValue = payload;
    },
  },
});

const persistConfig = { key: 'staff', storage, whitelist: ['staff'] };

export const staffReducer = persistReducer(persistConfig, staffSlice.reducer);
export const { addEmployee, updateEmployee, deleteEmployee, filterEmployee } = staffSlice.actions;
