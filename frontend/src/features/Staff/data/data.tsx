import { ProfessionSelect, StatusSelect, CountrySelect } from '../components/Fields';

import { FormSelectType } from '../types/types';

const formSelects: FormSelectType[] = [
  {
    component: ProfessionSelect,
  },
  {
    component: CountrySelect,
  },
  {
    component: StatusSelect,
  },
];

export default formSelects;
