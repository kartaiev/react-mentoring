import React, { FC, useState } from 'react';
import ModalComponent from './ModalComponent';
import {
  ADD_EDIT_MOVIE,
  addEditMovieNumbers,
  addEditMovieStrings
} from '../../lib';
import {
  Box,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid
} from '@chakra-ui/react';
import tw from 'twin.macro';
import { MovieType } from '../../state/interfaces';
import { addMovie, updateMovie } from '../../state/actions';
import { useDispatch } from 'react-redux';
import FormSelect from './FormSelect';

type Props = {
  whatModal: string;
  whichBtn: string;
  btnName: string;
  movie: MovieType;
};

const AddEditModal: FC<Props> = ({
  whatModal,
  whichBtn,
  btnName,
  movie
}: Props) => {
  const dispatch = useDispatch();

  const modalTitle =
    whatModal === 'add'
      ? ADD_EDIT_MOVIE.ADD_MOVIE_TITLE
      : ADD_EDIT_MOVIE.EDIT_MOVIE_TITLE;

  const initialFields =
    whatModal === 'add'
      ? {
          title: '',
          tagline: '',
          vote_average: 0,
          vote_count: 0,
          poster_path: '',
          overview: '',
          release_date: new Date().toISOString(),
          budget: 0,
          revenue: 0,
          runtime: 0,
          genres: ['Movie']
        }
      : {
          title: movie.title || '...',
          tagline: movie.tagline || '...',
          vote_average: movie.vote_average || 0,
          vote_count: movie.vote_count || 0,
          poster_path: movie.poster_path,
          overview: movie.overview || '...',
          release_date: movie.release_date,
          budget: movie.budget || 0,
          revenue: movie.revenue || 0,
          runtime: movie.runtime || 0,
          genres: movie.genres || ['Movie'],
          id: movie.id
        };

  const [fields, setFields] = useState<MovieType>(initialFields);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;
    setFields({
      ...fields,
      [evt.target.name]: value
    });
  };

  const handleEditMovie = () => {
    fields.runtime = +fields.runtime;
    dispatch(updateMovie(fields));
  };

  const handleAddMovie = () => {
    fields.runtime = +fields.runtime;
    dispatch(addMovie(fields));
  };

  const handleSubmit = () => {
    return whatModal === 'add' ? handleAddMovie() : handleEditMovie();
  };

  const formStringFields = addEditMovieStrings.map((field) => {
    return (
      <Box key={field.name} id={field.name}>
        <FormLabel color="#F65261" fontWeight="bold">
          {field.name}
        </FormLabel>
        <Input
          borderColor="gray.600"
          onChange={handleChange}
          mb={4}
          placeholder={field.placeholder}
          name={field.value}
          value={fields[field.value]}
        />
      </Box>
    );
  });

  const formNumberFields = addEditMovieNumbers.map((field) => {
    return (
      <Box key={field.name} id={field.name}>
        <FormLabel color="#F65261" fontWeight="bold">
          {field.name}
        </FormLabel>
        <Input
          mb={4}
          onChange={handleChange}
          value={fields[field.value]}
          name={field.value}
          colorScheme="gray"
          borderColor="gray.600"
        />
      </Box>
    );
  });

  formNumberFields.splice(1, 0, <FormSelect key={'selectKey'} />);

  const idField = (
    <>
      <FormLabel color="#F65261" fontWeight="bold">
        {ADD_EDIT_MOVIE.ID}
      </FormLabel>
      <ID>{movie.id}</ID>
    </>
  );
  return (
    <ModalComponent
      btnName={btnName}
      whichBtn={whichBtn}
      onClick={handleSubmit}
    >
      <ModalCloseButton />
      <ModalHeader fontSize="3xl">{modalTitle}</ModalHeader>
      <ModalBody>
        <FormControl>
          {whatModal === 'edit' && idField}
          {formStringFields}
          <SimpleGrid columns={2} spacingX={10}>
            {formNumberFields}
          </SimpleGrid>
        </FormControl>
      </ModalBody>
    </ModalComponent>
  );
};

export default AddEditModal;

const ID = tw.p`mb-4`;
