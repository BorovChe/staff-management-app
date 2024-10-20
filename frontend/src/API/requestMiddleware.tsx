import axios, { AxiosInstance, AxiosResponse } from 'axios';

async function getData<T, U>(setting: AxiosInstance, endpoint: string, errorValue: U): Promise<T | U> {
  try {
    const { data }: AxiosResponse<T> = await setting.get<T>(`${endpoint}`);
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Ошибка запроса:', error.message);
    }
    return errorValue as U;
  }
}

export default getData;
