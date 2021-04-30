import React, { FC } from 'react';
import tw from 'twin.macro';
import img from '../../assets/images/header-image.jpg';
import Top from './Top';
import MovieView from '../movieView/MovieView';
import Search from '../search/Search';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const Header: FC = () => {
  const { path } = useRouteMatch();

  return (
    <HeaderContainer
      style={{
        backgroundImage: `url(${img})`
      }}
    >
      <Top />
      <Switch>
        <Route exact path={[`${path}/:genre/movie/:id`, `${path}/movie/:id`]}>
          <MovieView />
        </Route>
        <Route path={`${path}`}>
          <Search />
        </Route>
      </Switch>
    </HeaderContainer>
  );
};

export default Header;

const before =
  'before:(content absolute w-full h-full top-0 right-0 bg-black bg-opacity-80 bg-blur-md)';
const HeaderContainer = tw.header`w-full h-half flex flex-col justify-between absolute top-0 right-0 bg-no-repeat bg-center bg-cover ${before}`;
