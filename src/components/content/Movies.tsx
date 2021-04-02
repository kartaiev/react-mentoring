import React, { FC, useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import MovieCard from './MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../state/actions';
import { DefaultState } from '../../state/interfaces/default';

const Movies: FC = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: DefaultState) => state.movies);
  const { data } = movies.data;

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  const allMoviesList =
    !!data.length &&
    data.map((movie) => (
      <MovieCard
        key={movie.id}
        Poster={movie.poster_path}
        Title={movie.title}
        Year={movie.release_date}
        Genres={movie.genres}
        ID={movie.id}
        movie={movie}
      />
    ));

  return (
    <>
      {!movies.loading && (
        <>
          <SimpleGrid columns={[1, 1, 2, 3]} spacingX={48} spacingY={16} pb={6}>
            {allMoviesList}
          </SimpleGrid>
        </>
      )}
    </>
  );
};

export default Movies;
