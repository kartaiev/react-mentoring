import React, { FC, useContext } from 'react';
import { GLOBAL } from '../../lib';
import Movies from './Movies';
import tw from 'twin.macro';
import { MovieContext } from '../../contexts/MovieContext';

const Content: FC = () => {
  const { allMovies } = useContext(MovieContext);

  const moviesCount = allMovies ? allMovies.length : 0;

  return (
    <ContentContainer>
      <MoviesFound>
        {moviesCount} {GLOBAL.MOVIES_FOUND}
      </MoviesFound>
      <Movies />
    </ContentContainer>
  );
};

export default Content;

const ContentContainer = tw.div`pt-6`;
const MoviesFound = tw.p`text-xl pb-6`;
