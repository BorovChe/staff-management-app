import { FilterValue, UserType } from 'common/types/types';

const userFilter = (users: UserType[], filter: FilterValue): UserType[] => {
  const filterByProfession = users.filter((user: UserType): boolean => user.profession.includes(filter.profession));
  const filterByCountry = filterByProfession.filter((user: UserType): boolean => user.country.includes(filter.country));
  const filterByStatus = filterByCountry.filter((user: UserType): boolean => user.status.includes(filter.status));
  return filterByStatus;
};

export { userFilter };
