import React, { FC, createContext, ReactNode } from 'react';

import { useToggle } from '../hooks';

export interface MoviesContext {
  toggleHeaderView: () => void;
  isMovieView: boolean;
}

type Props = {
  children: ReactNode;
};

export const MovieContext = createContext<MoviesContext>({} as MoviesContext);

export const MoviesProvider: FC<Props> = ({ children }: Props) => {
  const { toggle, isToggled } = useToggle();

  return (
    <MovieContext.Provider
      value={{
        isMovieView: isToggled,
        toggleHeaderView: toggle
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
