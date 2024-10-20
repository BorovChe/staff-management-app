type EmployeeType = {
  id?: string;
  name: string;
  profession: string;
  country: string;
  status: string;
};

type FilterValue = {
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

type NavLinkType = {
  path: string;
  title: string;
};

export type { EmployeeType, CountriesType, ProfessionType, FilterValue, NavLinkType };
