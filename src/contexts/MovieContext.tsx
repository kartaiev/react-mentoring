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
  initialTabIndex: number;
  setInitialTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

type Props = {
  children: ReactNode;
};

export const MovieContext = createContext<MoviesContext>({} as MoviesContext);

export const MoviesProvider: FC<Props> = ({ children }: Props) => {
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
        initialTabIndex,
        setInitialTabIndex
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
