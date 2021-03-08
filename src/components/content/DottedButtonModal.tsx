import React, { FC } from 'react';
import { DotsButton, SmallButtonDanger } from '../../elements';
import {
  Popover,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Portal
} from '@chakra-ui/react';
import { GLOBAL } from '../../lib';

const DottedButtonModal: FC = () => {
  return (
    <Popover placement="auto">
      <DotsButton />
      <Portal>
        <PopoverContent bg="#232323" py={6}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody
            display="flex"
            flexDir="column"
            alignItems="center"
            px={0}
          >
            <SmallButtonDanger btnName={GLOBAL.EDIT} />
            <SmallButtonDanger btnName={GLOBAL.DELETE} />
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default DottedButtonModal;
