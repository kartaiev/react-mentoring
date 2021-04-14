import React, { FC, useContext, useEffect } from 'react';
import { AspectRatio, Box, Text } from '@chakra-ui/react';
import tw from 'twin.macro';
import { useDispatch } from 'react-redux';
import { useLocation, useRouteMatch } from 'react-router-dom';
import { getMovie } from '../../state/actions';
import { MovieContext } from '../../contexts/MovieContext';

const MovieView: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { movie } = useContext(MovieContext);
  const { params } = useRouteMatch<Record<string, string | undefined>>();

  useEffect(() => {
    params.id && dispatch(getMovie(params.id));
  }, [location]);

  const {
    poster_path,
    title,
    vote_average,
    genres,
    release_date,
    runtime,
    overview
  } = movie;

  const genreList = genres && (
    <Box fontSize={24} color="gray.400">
      {genres?.map((genre: string) => (
        <Box key={genre} as="span" pr={4}>
          {genre}
        </Box>
      ))}
    </Box>
  );

  return (
    <MovieViewContainer>
      <Box minW="19rem">
        <AspectRatio ratio={2 / 3}>
          <img src={poster_path} alt={title} />
        </AspectRatio>
      </Box>
      <Box pl={16} py={4}>
        <Box fontSize={52} color="gray.200">
          {title}
          <Box
            as="span"
            ml={6}
            p={2}
            fontSize={32}
            border="1px"
            borderColor="gray.200"
            borderRadius="full"
            color="green.400"
          >
            {vote_average}
          </Box>
        </Box>
        {genreList}
        <Box color="pink.400" pt={6} fontSize={32}>
          <Box as="span" pr={6}>
            {release_date}
          </Box>
          <Box as="span">{runtime}</Box>
        </Box>
        <Text pt={6} fontSize={24}>
          {overview}
        </Text>
      </Box>
    </MovieViewContainer>
  );
};

export default MovieView;

const MovieViewContainer = tw.div`flex flex justify-between items-start absolute top-20 left-0 z-30 px-32`;
