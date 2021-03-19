import React, { FC, useContext } from 'react';
import { AspectRatio, Box, Text } from '@chakra-ui/react';
import { MovieContext } from '../../contexts/MovieContext';
import tw from 'twin.macro';

const MovieView: FC = () => {
  const { movie } = useContext(MovieContext);

  return (
    <MovieViewContainer>
      <Box minW="19rem">
        <AspectRatio ratio={2 / 3}>
          <img src={movie.Poster} alt={movie.Title} />
        </AspectRatio>
      </Box>
      <Box pl={16} py={4}>
        <Box fontSize={52} color="gray.200">
          {movie.Title}
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
            {movie.imdbRating}
          </Box>
        </Box>
        <Box fontSize={24} color="gray.400">
          {movie.Genre}
        </Box>
        <Box color="pink.400" pt={6} fontSize={32}>
          <Box as="span" pr={6}>
            {movie.Year}
          </Box>
          <Box as="span">{movie.Runtime}</Box>
        </Box>
        <Text pt={6} fontSize={24}>
          {movie.Plot}
        </Text>
      </Box>
    </MovieViewContainer>
  );
};

export default MovieView;

const MovieViewContainer = tw.div`flex flex justify-between items-start absolute top-20 left-0 z-30 px-32 h-full`;
