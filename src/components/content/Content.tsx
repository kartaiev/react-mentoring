import React, { FC, useEffect } from 'react';
import { GLOBAL } from '../../lib';
import Movies from './Movies';
import tw from 'twin.macro';
import { DefaultState } from '../../state/interfaces/default';
import { useSelector } from 'react-redux';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';

const Content: FC = () => {
  const { path } = useRouteMatch();
  const { push } = useHistory();
  const count = useSelector(
    (state: DefaultState) => state.movies.data.totalAmount
  );
  const loading = useSelector((state: DefaultState) => state.movies.loading);

  useEffect(() => {
    !count && !loading && push('/movies/notfound');
  }, [loading]);

  return (
    <ContentContainer>
      <MoviesFound>
        {count} {GLOBAL.MOVIES_FOUND}
      </MoviesFound>
      <Switch>
        {[
          `${path}/:genre/movie/:id`,
          `${path}`,
          `${path}/:genre`,
          `${path}/search`,
          `${path}/movie/:id`
        ].map((path, i) => (
          <Route exact key={i} path={path}>
            <Movies />
          </Route>
        ))}
      </Switch>
    </ContentContainer>
  );
};

export default Content;

const ContentContainer = tw.div`pt-6`;
const MoviesFound = tw.p`text-xl pb-6`;
