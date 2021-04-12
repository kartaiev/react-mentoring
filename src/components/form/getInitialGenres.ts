import { MovieType } from '../../state/interfaces';
import { Item } from './FormSelect';

export const getInitialGenres = (movie: MovieType): Item[] => {
  return movie?.genres?.map((genre) => ({
    value: genre.toLowerCase(),
    label: genre.toUpperCase()
  }));
};
