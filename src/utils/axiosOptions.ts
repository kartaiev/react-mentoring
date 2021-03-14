import { AxiosRequestConfig } from 'axios';

export const getOptions = (
  param1: string,
  param2: string
): AxiosRequestConfig => {
  return {
    method: 'GET',
    url: `http://www.omdbapi.com/?${param1}=${param2}&apikey=484ceffb`
  };
};
