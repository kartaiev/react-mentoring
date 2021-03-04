import React, { FC } from 'react';
import tw from 'twin.macro';
import Logo from '../../elements/Logo';
import { TransparentButton } from '../../elements';
import { GLOBAL } from '../../lib';

const Top: FC = () => (
  <TopContainer>
    <Logo />
    <TransparentButton btnName={GLOBAL.ADD_MOVIE} />
  </TopContainer>
);

export default Top;

const TopContainer = tw.div`w-full h-20 flex justify-between relative z-20 absolute top-0 right-0 pt-6 px-12 bg-opacity-0`;
