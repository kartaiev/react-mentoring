import React, { FC } from 'react';
import { DotsButton, SmallButtonDanger } from '../../elements';
import {
  Popover,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Portal,
  useDisclosure
} from '@chakra-ui/react';
import DeleteModal from '../modal/DeleteModal';
import AddEditModal from '../modal/AddEditModal';
import { GLOBAL } from '../../lib';
import { MovieType } from '../../state/interfaces';
import { updatePoster } from '../../state/actions';
import { useDispatch } from 'react-redux';

type Props = {
  ID?: number;
  movie: MovieType;
};

const DottedButtonPopup: FC<Props> = ({ ID, movie }: Props) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const dispatch = useDispatch();

  const updateBrokenPoster = () => {
    dispatch(updatePoster(movie));
    onClose();
  };

  return (
    <Popover placement="auto" isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
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
              movie={movie}
            />
            <DeleteModal ID={ID} />
            <SmallButtonDanger
              btnName="Update Poster"
              onClick={updateBrokenPoster}
            />
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default DottedButtonPopup;
