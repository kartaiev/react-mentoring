import { AxiosRequestConfig } from 'axios';
import { MovieType } from '../state/interfaces';

export const getAllMovies = (
  offset: number,
  limit: number
): AxiosRequestConfig => ({
  method: 'GET',
  url: `http://localhost:4000/movies?offset=${offset}&limit=${limit}`
});

export const filterAllMovies = (genre: string): AxiosRequestConfig => ({
  method: 'GET',
  url: `http://localhost:4000/movies?sortBy=title&filter=${genre}&offset=1&limit=12`
});

export const getSingleMovie = (id: string): AxiosRequestConfig => ({
  method: 'GET',
  url: `http://localhost:4000/movies/${id}`
});

export const searchMoviesByTitle = (title: string): AxiosRequestConfig => ({
  method: 'GET',
  url: `http://localhost:4000/movies?search=${title}&searchBy=title&offset=1&limit=12`
});

export const sortAllMovies = (sortBy: string): AxiosRequestConfig => ({
  method: 'GET',
  url: `http://localhost:4000/movies?sortBy=${sortBy}&sortOrder=desc&offset=1&limit=12`
});

export const deleteSingleMovie = (id: number): AxiosRequestConfig => ({
  method: 'DELETE',
  url: `http://localhost:4000/movies/${id}`
});

export const getPoster = (title: string): AxiosRequestConfig => ({
  method: 'GET',
  url: `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${title}`,
  headers: {
    'x-rapidapi-key': '25b376b5b0msh398195bc57cbd33p1ace86jsn9aaf1e023d34',
    'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
  }
});

export const updateMoviePoster = (movie: MovieType): AxiosRequestConfig => ({
  method: 'PUT',
  data: JSON.stringify(movie),
  url: `http://localhost:4000/movies/`
});

export const updateSingleMovie = (movie: MovieType): AxiosRequestConfig => ({
  method: 'PUT',
  data: JSON.stringify(movie),
  url: `http://localhost:4000/movies/`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const addSingleMovie = (movie: MovieType): AxiosRequestConfig => ({
  method: 'POST',
  data: JSON.stringify(movie),
  url: `http://localhost:4000/movies/`,
  headers: {
    'Content-Type': 'application/json'
  }
});
