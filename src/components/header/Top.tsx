import React, { FC, useContext } from 'react';
import tw from 'twin.macro';
import Logo from '../../elements/Logo';
import AddEditModal from '../modal/AddEditModal';
import { GLOBAL } from '../../lib';
import { IconButton } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { MovieContext } from '../../contexts/MovieContext';
import { MovieType } from '../../state/interfaces';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../state/actions';

const Top: FC = () => {
  const dispatch = useDispatch();

  const { isMovieView, toggleHeaderView } = useContext(MovieContext);

  const onClick = () => {
    toggleHeaderView();
    dispatch(getMovies());
  };

  const rightButton = isMovieView ? (
    <IconButton
      onClick={onClick}
      aria-label="Search database"
      size="lg"
      variant="unstyled"
      icon={<Search2Icon w={6} h={6} color="pink.400" />}
    />
  ) : (
    <AddEditModal
      btnName={GLOBAL.ADD_MOVIE}
      whatModal={'add'}
      whichBtn={'transparent'}
      movie={{} as MovieType}
    />
  );

  return (
    <TopContainer>
      <Logo />
      {rightButton}
    </TopContainer>
  );
};

export default Top;

const TopContainer = tw.div`w-full h-20 flex justify-between relative z-20 absolute top-0 right-0 pt-6 px-12 bg-opacity-0`;
