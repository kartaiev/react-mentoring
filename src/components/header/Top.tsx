import React, { FC } from 'react';
import tw from 'twin.macro';
import Logo from '../../elements/Logo';
import AddEditModal from '../modal/AddEditModal';
import { GLOBAL } from '../../lib';

const Top: FC = () => (
  <TopContainer>
    <Logo />
    <AddEditModal
      btnName={GLOBAL.ADD_MOVIE}
      whatModal={'add'}
      whichBtn={'transparent'}
    />
  </TopContainer>
);

export default Top;

const TopContainer = tw.div`w-full h-20 flex justify-between relative z-20 absolute top-0 right-0 pt-6 px-12 bg-opacity-0`;
