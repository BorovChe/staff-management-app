type DefaultFormValue = {
  name: string;
  profession: string;
  country: string;
  status: string;
};

type UserType = {
  id: string;
  name: string;
  profession: string;
  country: string;
  status: string;
};

type CountriesType = {
  name: {
    common: string;
  };
};

type ProfessionType = {
  id: string;
  title: string;
};

export type { DefaultFormValue, UserType, CountriesType, ProfessionType };
