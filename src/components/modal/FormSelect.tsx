import React, { FC } from 'react';
import { FormLabel, Select } from '@chakra-ui/react';
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
    <>
      <FormLabel color="#F65261" fontWeight="bold">
        {ADD_EDIT_MOVIE.GENRE}
      </FormLabel>
      <Select mb={4} placeholder={ADD_EDIT_MOVIE.GENRE_PLACEHOLDER}>
        {genresOptions}
      </Select>
    </>
  );
};

export default FormSelect;
