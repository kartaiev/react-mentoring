import React, { FC, useContext } from 'react';
import { SimpleGrid, Skeleton, Flex } from '@chakra-ui/react';
import MovieCard from './MovieCard';
import { MovieContext } from '../../contexts/MovieContext';

const Movies: FC = () => {
  const { allMovies, error } = useContext(MovieContext);

  const allMoviesList =
    !!allMovies &&
    !error &&
    allMovies.map(({ Poster, Title, Year, Type, imdbID }) => (
      <MovieCard
        key={imdbID}
        Poster={Poster}
        Title={Title}
        Year={Year}
        Type={Type}
        imdbID={imdbID}
      />
    ));

  return (
    <>
      {error ? (
        <Flex justify="center" align="center" fontSize={72}>
          {error}
        </Flex>
      ) : (
        <Skeleton
          isLoaded={allMovies && allMovies.length !== 0}
          startColor="pink.500"
          endColor="orange.500"
        >
          <SimpleGrid columns={[1, 1, 2, 3]} spacingX={48} spacingY={16} pb={6}>
            {allMoviesList}
          </SimpleGrid>
        </Skeleton>
      )}
    </>
  );
};

export default Movies;
