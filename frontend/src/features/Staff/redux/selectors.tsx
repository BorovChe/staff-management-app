import { RootState } from 'store/store';

const selectStaff = (state: RootState) => state.staff.staff;

const selectFilterStaff = (state: RootState) => state.staff.filterValue;

export { selectStaff, selectFilterStaff };
