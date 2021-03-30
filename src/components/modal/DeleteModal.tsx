import React, { FC } from 'react';
import { ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { DELETE, GLOBAL } from '../../lib';
import tw from 'twin.macro';
import ModalComponent from './ModalComponent';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../../state/actions';

type Props = {
  ID?: number;
};

const DeleteModal: FC<Props> = ({ ID }: Props) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    ID && dispatch(deleteMovie(ID));
  };

  return (
    <ModalComponent
      btnName={GLOBAL.DELETE}
      whichBtn={'danger'}
      onClick={handleDelete}
      whatModal="delete"
    >
      <ModalCloseButton />
      <ModalHeader />
      <ModalBody>
        <Title>{DELETE.TITLE}</Title>
        <Text>{DELETE.QUESTION}</Text>
      </ModalBody>
    </ModalComponent>
  );
};

export default DeleteModal;
const Title = tw.h2`font-logoAlt text-3xl py-6`;
const Text = tw.p`text-xl pb-6`;
