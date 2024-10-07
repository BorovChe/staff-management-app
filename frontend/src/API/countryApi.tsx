import axios from 'axios';

axios.defaults.baseURL = 'https://restcountries.com/v3.1';

const getEuropeanCountries = async () => {
  const { data } = await axios.get('/region/europe');
  return data;
};

export { getEuropeanCountries };
