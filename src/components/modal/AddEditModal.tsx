import React, { FC, useState } from 'react';
import ModalComponent from './ModalComponent';
import {
  ADD_EDIT_MOVIE,
  addEditMovieNumbers,
  addEditMovieStrings,
  genresSelect,
  GLOBAL
} from '../../lib';
import {
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  SimpleGrid,
  ModalFooter,
  useDisclosure
} from '@chakra-ui/react';
import { MovieType } from '../../state/interfaces';
import { addMovie, updateMovie } from '../../state/actions';
import { useDispatch } from 'react-redux';
import FormSelect, { Item } from '../form/FormSelect';
import FormInput from '../form/FormInput';
import { Formik, Form } from 'formik';
import { MotionButtonBorderedSM, MotionButtonDangerSM } from '../../elements';
import { getInitialFields } from '../form/getInitialFields';
import IdField from '../form/IdField';
import { getInitialGenres } from '../form/getInitialGenres';
import { schema } from '../form/validationSchema';

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const [pickerItems, setPickerItems] = useState(genresSelect);
  const [selectedItems, setSelectedItems] = useState<Item[]>(
    getInitialGenres(movie) || []
  );

  const modalTitle =
    whatModal === 'add'
      ? ADD_EDIT_MOVIE.ADD_MOVIE_TITLE
      : ADD_EDIT_MOVIE.EDIT_MOVIE_TITLE;

  const handleEditMovie = (values: MovieType) => {
    dispatch(updateMovie(values));
  };

  const handleAddMovie = (values: MovieType) => {
    dispatch(addMovie(values));
    setSelectedItems([]);
  };

  const onSubmit = (values: MovieType) => {
    values.genres = selectedItems.map(({ value }) => {
      return value.charAt(0).toUpperCase() + value.slice(1);
    });
    onClose();
    return whatModal === 'add'
      ? handleAddMovie(values)
      : handleEditMovie(values);
  };

  const formStringFields = addEditMovieStrings.map((field) => (
    <FormInput
      key={field.name}
      name={field.value}
      label={field.name}
      placeholder={field.placeholder}
    />
  ));

  const formNumberFields = addEditMovieNumbers.map((field) => (
    <FormInput
      key={field.name}
      name={field.value}
      label={field.name}
      placeholder={field.placeholder}
    />
  ));

  return (
    <ModalComponent
      btnName={btnName}
      whichBtn={whichBtn}
      onClose={onClose}
      onOpen={onOpen}
      isOpen={isOpen}
    >
      <ModalCloseButton />
      <ModalHeader fontSize="3xl">{modalTitle}</ModalHeader>
      <Formik
        initialValues={getInitialFields(whatModal, movie)}
        onSubmit={onSubmit}
        validationSchema={schema}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <ModalBody>
              {whatModal === 'edit' && <IdField id={movie.id} />}
              {formStringFields}
              <SimpleGrid columns={2} spacingX={10}>
                <FormInput
                  name={'release_date'}
                  label={ADD_EDIT_MOVIE.DATE}
                  placeholder={ADD_EDIT_MOVIE.DATE_PLACEHOLDER}
                  type={'date'}
                />
                {formNumberFields}
              </SimpleGrid>
              <FormSelect
                key={'selectKey'}
                name={'genres'}
                pickerItems={pickerItems}
                setPickerItems={setPickerItems}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
              />
            </ModalBody>
            <ModalFooter>
              <MotionButtonBorderedSM type="reset" btnName={GLOBAL.RESET} />
              <MotionButtonDangerSM type="submit" btnName={GLOBAL.SUBMIT} />
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </ModalComponent>
  );
};

export default AddEditModal;
