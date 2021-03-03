import { AxiosRequestConfig } from 'axios';

export default (param: string): AxiosRequestConfig => {
  return {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    params: { s: param, page: '1' },
    headers: {
      'x-rapidapi-key': '25b376b5b0msh398195bc57cbd33p1ace86jsn9aaf1e023d34',
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
    }
  };
};
