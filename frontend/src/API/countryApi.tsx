import axios, { AxiosInstance } from 'axios';

import getData from './requestMiddleware';

import { CountriesType } from 'common/types/types';

const europeanCountriesApi: AxiosInstance = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});

const getEuropeanCountries = async (): Promise<CountriesType[]> =>
  getData<CountriesType[], []>(europeanCountriesApi, '/region/europe', []);

export default getEuropeanCountries;
