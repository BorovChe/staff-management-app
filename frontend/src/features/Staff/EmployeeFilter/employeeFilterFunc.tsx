import { FilterValue, EmployeeType } from 'common/types/types';

const employeeFilter = (staff: EmployeeType[], filter: FilterValue): EmployeeType[] => {
  const filterByProfession = staff.filter((employee: EmployeeType): boolean =>
    employee.profession.includes(filter.profession)
  );
  const filterByCountry = filterByProfession.filter((employee: EmployeeType): boolean =>
    employee.country.includes(filter.country)
  );
  const filterByStatus = filterByCountry.filter((employee: EmployeeType): boolean =>
    employee.status.includes(filter.status)
  );
  return filterByStatus;
};

export default employeeFilter;
