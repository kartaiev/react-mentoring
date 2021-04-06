import React, { FC, ReactNode } from 'react';
import { SmallButtonDanger, TransparentButton } from '../../elements';
import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
  btnName: string;
  whichBtn: string;
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
};

const ModalComponent: FC<Props> = ({
  children,
  btnName,
  whichBtn,
  onOpen,
  onClose,
  isOpen
}: Props) => (
  <>
    {whichBtn === 'danger' ? (
      <SmallButtonDanger onClick={onOpen} btnName={btnName} />
    ) : (
      <TransparentButton onClick={onOpen} btnName={btnName} />
    )}
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent bg="#232323" color="gray.50">
        {children}
      </ModalContent>
    </Modal>
  </>
);

export default ModalComponent;
