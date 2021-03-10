import React, { FC } from 'react';
import { DotsButton } from '../../elements';
import {
  Popover,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Portal
} from '@chakra-ui/react';
import DeleteModal from '../modal/DeleteModal';
import AddEditModal from '../modal/AddEditModal';
import { GLOBAL } from '../../lib';

const DottedButtonPopup: FC = () => {
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
            <AddEditModal
              btnName={GLOBAL.EDIT}
              whatModal={'edit'}
              whichBtn={'danger'}
            />
            <DeleteModal />
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default DottedButtonPopup;
