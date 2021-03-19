import React, { FC } from 'react';
import ModalComponent from './ModalComponent';
import { ADD_EDIT_MOVIE, addEditMovie, GLOBAL } from '../../lib';
import {
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';
import { MotionButtonBorderedSM, MotionButtonDangerSM } from '../../elements';
import tw from 'twin.macro';
import FormSelect from './FormSelect';

type Props = {
  whatModal: string;
  whichBtn: string;
  btnName: string;
};

const AddEditModal: FC<Props> = ({ whatModal, whichBtn, btnName }: Props) => {
  const modalTitle =
    whatModal === 'add'
      ? ADD_EDIT_MOVIE.ADD_MOVIE_TITLE
      : ADD_EDIT_MOVIE.EDIT_MOVIE_TITLE;

  const formFields = addEditMovie.map((field) => {
    return (
      <div key={field.name}>
        <FormLabel color="#F65261" fontWeight="bold">
          {field.name}
        </FormLabel>
        <Input mb={4} placeholder={field.placeholder} name={field.name} />
      </div>
    );
  });

  formFields.splice(3, 0, <FormSelect key={'selectKey'} />);

  const idField = (
    <>
      <FormLabel color="#F65261" fontWeight="bold">
        {ADD_EDIT_MOVIE.ID}
      </FormLabel>
      <ID>MOWIWPPWII</ID>
    </>
  );
  return (
    <ModalComponent btnName={btnName} whichBtn={whichBtn}>
      <ModalCloseButton />
      <ModalHeader fontSize="3xl">{modalTitle}</ModalHeader>
      <ModalBody>
        <FormControl>
          {whatModal === 'edit' && idField}
          {formFields}
        </FormControl>
      </ModalBody>
      <ModalFooter>
        <MotionButtonBorderedSM btnName={GLOBAL.RESET} />
        <MotionButtonDangerSM btnName={GLOBAL.SUBMIT} />
      </ModalFooter>
    </ModalComponent>
  );
};

export default AddEditModal;

const ID = tw.p`mb-4`;
