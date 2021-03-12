import React, { FC } from 'react';
import { SimpleGrid, Spinner } from '@chakra-ui/react';
import { MoviesType } from '../../lib';
import MovieCard from './MovieCard';

type Props = {
  allMovies: MoviesType[];
};

const Movies: FC<Props> = ({ allMovies }: Props) => {
  const allMoviesList = !allMovies ? (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  ) : (
    allMovies.map(({ Poster, Title, Year, Type, imdbID }) => (
      <MovieCard
        key={imdbID}
        Poster={Poster}
        Title={Title}
        Year={Year}
        Type={Type}
      />
    ))
  );

  return (
    <SimpleGrid columns={[1, 1, 2, 3]} spacingX={48} spacingY={16} pb={6}>
      {allMoviesList}
    </SimpleGrid>
  );
};

export default Movies;
