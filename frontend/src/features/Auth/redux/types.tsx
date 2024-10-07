type AuthState = {
  user: {
    name: string;
    email: string;
    password: string;
  };
  token: null;
  isLoggedIn: boolean;
};

export type { AuthState };
