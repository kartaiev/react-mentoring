import React, { FC, ReactNode } from 'react';
import {
  MotionButtonBorderedSM,
  MotionButtonDangerSM,
  SmallButtonDanger,
  TransparentButton
} from '../../elements';
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';
import { GLOBAL } from '../../lib';

type Props = {
  children: ReactNode;
  btnName: string;
  whichBtn: string;
  onClick: () => void;
  whatModal?: string;
};

const ModalComponent: FC<Props> = ({
  children,
  btnName,
  whichBtn,
  onClick,
  whatModal
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onClick();
    onClose();
  };

  const modalFooter =
    whatModal === 'delete' ? (
      <ModalFooter>
        <MotionButtonDangerSM btnName={GLOBAL.CONFIRM} onClick={handleClick} />
      </ModalFooter>
    ) : (
      <ModalFooter>
        <MotionButtonBorderedSM btnName={GLOBAL.RESET} />
        <MotionButtonDangerSM btnName={GLOBAL.SUBMIT} onClick={handleClick} />
      </ModalFooter>
    );

  return (
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
          {modalFooter}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
