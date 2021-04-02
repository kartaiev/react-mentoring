import React, { FC } from 'react';
import { FormLabel, Select, Box } from '@chakra-ui/react';
import { ADD_EDIT_MOVIE, MENU_LEFT } from '../../lib';

const FormSelect: FC = () => {
  const genresOptions = [...MENU_LEFT]
    .splice(1, MENU_LEFT.length)
    .map((genre) => (
      <option key={genre} value={genre}>
        {genre}
      </option>
    ));

  return (
    <Box>
      <FormLabel color="#F65261" fontWeight="bold">
        {ADD_EDIT_MOVIE.GENRE}
      </FormLabel>
      <Select
        mb={4}
        placeholder={ADD_EDIT_MOVIE.GENRE_PLACEHOLDER}
        borderColor="gray.600"
      >
        {genresOptions}
      </Select>
    </Box>
  );
};

export default FormSelect;
