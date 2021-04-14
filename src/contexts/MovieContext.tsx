import React, { FC, createContext, ReactNode, useState } from 'react';

import { useToggle } from '../hooks';
import { useSelector } from 'react-redux';
import { DefaultState } from '../state/interfaces/default';
import { MovieType } from '../state/interfaces';

export interface MoviesContext {
  toggleHeaderView: () => void;
  isMovieView: boolean;
  movie: MovieType;
  error: string | null;
  genre: string;
  setGenre: React.Dispatch<React.SetStateAction<string>>;
  initialTabIndex: number;
  setInitialTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

type Props = {
  children: ReactNode;
};

export const MovieContext = createContext<MoviesContext>({} as MoviesContext);

export const MoviesProvider: FC<Props> = ({ children }: Props) => {
  const [genre, setGenre] = useState('');
  const [initialTabIndex, setInitialTabIndex] = useState(0);
  const { toggle, isToggled } = useToggle();
  const movieData = useSelector((state: DefaultState) => state.movie);

  return (
    <MovieContext.Provider
      value={{
        isMovieView: isToggled,
        toggleHeaderView: toggle,
        movie: movieData.data,
        error: movieData.error,
        genre,
        setGenre,
        initialTabIndex,
        setInitialTabIndex
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
