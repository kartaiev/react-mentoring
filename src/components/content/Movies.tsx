import React, { FC } from 'react';
import { MoviesType } from '../../lib';
import MovieCard from './MovieCard';
import tw from 'twin.macro';

const Movies: FC<MoviesType[]> = ({ allMovies }: MoviesType[]) => {
  const allMoviesList =
    allMovies &&
    allMovies.map(({ Poster, Title, Year, Type, imdbID }: any) => (
      <MovieCard
        key={imdbID}
        Poster={Poster}
        Title={Title}
        Year={Year}
        Type={Type}
      />
    ));

  return <AllMoviesContainer>{allMoviesList}</AllMoviesContainer>;
};

export default Movies;

const AllMoviesContainer = tw.div`w-full grid grid-cols-3 grid-rows-3`;
