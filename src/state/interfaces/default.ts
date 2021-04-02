import { MoviesState } from './movies';
import { MovieState } from './movie';

export type DefaultState = {
  movies: MoviesState;
  movie: MovieState;
};
