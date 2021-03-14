import React, {
  FC,
  createContext,
  ReactNode,
  useState,
  useEffect
} from 'react';
import { MoviesType, MovieType } from '../lib';
import axios from 'axios';
import { getOptions } from '../utils';
import { useToggle } from '../hooks';

export interface MoviesContext {
  allMovies: MoviesType[];
  movie: MovieType;
  getAllMovies: (param1: string, param2: string) => void;
  getMovie: (param1: string, param2: string) => void;
  toggleHeaderView: () => void;
  isMovieView: boolean;
  setMovie: React.Dispatch<React.SetStateAction<MovieType>>;
  error: string;
}

type Props = {
  children: ReactNode;
};

export const MovieContext = createContext<MoviesContext>({} as MoviesContext);

export const MoviesProvider: FC<Props> = ({ children }: Props) => {
  const [allMovies, setAllMovies] = useState<MoviesType[]>([]);
  const [error, setError] = useState('');
  const [movie, setMovie] = useState<MovieType>({} as MovieType);

  const { toggle, isToggled } = useToggle();

  const getAllMovies = async (param1: string, param2: string) => {
    setAllMovies([]);
    setError('');
    try {
      const { data } = await axios.request(getOptions(param1, param2));
      !!data.Error && setError(data.Error);

      !!data.Search && setAllMovies(data.Search);
    } catch (e) {
      console.error(e);
    }
  };

  const getMovie = async (param1: string, param2: string) => {
    try {
      const { data } = await axios.request(getOptions(param1, param2));

      !!data && setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getAllMovies('s', 'game');
  }, []);

  return (
    <MovieContext.Provider
      value={{
        allMovies,
        movie,
        getAllMovies,
        getMovie,
        setMovie,
        isMovieView: isToggled,
        toggleHeaderView: toggle,
        error
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
