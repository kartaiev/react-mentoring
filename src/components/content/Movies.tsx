import React, { FC, useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import MovieCard from './MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../state/actions';
import { DefaultState } from '../../state/interfaces/default';
import { idGenerate } from '../../utils/idGenerete';
import { Route, useLocation } from 'react-router-dom';
import NotFound from '../search/NotFound';

const Movies: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const movies = useSelector((state: DefaultState) => state.movies);
  const { data } = movies.data;

  useEffect(() => {
    location.pathname === '/movies' && dispatch(getMovies());
  }, [location]);

  const allMoviesList =
    !!data.length &&
    data.map((movie) => (
      <MovieCard
        key={idGenerate()}
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
          <Route exact path="/movies/notfound">
            <NotFound />
          </Route>
        </>
      )}
    </>
  );
};

export default Movies;
