import React, { FC } from 'react';
import {
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import { DELETE, GLOBAL } from '../../lib';
import { MotionButtonDangerSM } from '../../elements';
import tw from 'twin.macro';
import ModalComponent from './ModalComponent';

const DeleteModal: FC = () => {
  return (
    <ModalComponent btnName={GLOBAL.DELETE} whichBtn={'danger'}>
      <ModalCloseButton />
      <ModalHeader />
      <ModalBody>
        <Title>{DELETE.TITLE}</Title>
        <Text>{DELETE.QUESTION}</Text>
      </ModalBody>
      <ModalFooter>
        <MotionButtonDangerSM btnName={GLOBAL.CONFIRM} />
      </ModalFooter>
    </ModalComponent>
  );
};

export default DeleteModal;
const Title = tw.h2`font-logoAlt text-3xl py-6`;
const Text = tw.p`text-xl pb-6`;
