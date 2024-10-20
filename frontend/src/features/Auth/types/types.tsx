type AuthType = {
  name?: string;
  email: string;
  password: string;
};

type AuthFieldType = {
  type: keyof AuthType;
  placeholder: string;
};

export type { AuthType, AuthFieldType };
