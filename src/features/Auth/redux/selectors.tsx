import { RootState } from 'store/store';

const selectAuth = (state: RootState) => state.auth.isLoggedIn;

export { selectAuth };
