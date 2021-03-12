import React, { FC, ReactNode } from 'react';
import { SmallButtonDanger, TransparentButton } from '../../elements';
import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  btnName: string;
  whichBtn: string;
};

const ModalComponent: FC<Props> = ({ children, btnName, whichBtn }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {whichBtn === 'danger' ? (
        <SmallButtonDanger onOpen={onOpen} btnName={btnName} />
      ) : (
        <TransparentButton onOpen={onOpen} btnName={btnName} />
      )}
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
        <ModalOverlay />
        <ModalContent bg="#232323" color="gray.50">
          {children}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
