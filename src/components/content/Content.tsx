import React, { FC } from 'react';
import { GLOBAL } from '../../lib';
import Movies from './Movies';
import tw from 'twin.macro';
import { DefaultState } from '../../state/interfaces/default';
import { useSelector } from 'react-redux';

const Content: FC = () => {
  const count = useSelector(
    (state: DefaultState) => state.movies.data.totalAmount
  );

  return (
    <ContentContainer>
      <MoviesFound>
        {count} {GLOBAL.MOVIES_FOUND}
      </MoviesFound>
      <Movies />
    </ContentContainer>
  );
};

export default Content;

const ContentContainer = tw.div`pt-6`;
const MoviesFound = tw.p`text-xl pb-6`;
