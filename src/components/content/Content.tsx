import React, { FC } from 'react';
import { GLOBAL } from '../../lib';
import Movies from './Movies';
import tw from 'twin.macro';
import { DefaultState } from '../../state/interfaces/default';
import { useSelector } from 'react-redux';
import { Route, useRouteMatch } from 'react-router-dom';

const Content: FC = () => {
  const { path } = useRouteMatch();
  const count = useSelector(
    (state: DefaultState) => state.movies.data.totalAmount
  );

  return (
    <ContentContainer>
      <MoviesFound>
        {count} {GLOBAL.MOVIES_FOUND}
      </MoviesFound>
      <Route
        exact
        path={[
          `${path}/:genre/movie/:id`,
          `${path}`,
          `${path}/:genre`,
          `${path}/search`,
          `${path}/:genre`,
          `${path}/movie/:id`
        ]}
      >
        <Movies />
      </Route>
    </ContentContainer>
  );
};

export default Content;

const ContentContainer = tw.div`pt-6`;
const MoviesFound = tw.p`text-xl pb-6`;
