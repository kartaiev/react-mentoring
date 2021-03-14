import React, { FC, useContext } from 'react';
import Layout from './components/layout/Layout';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Search from './components/search/Search';
import { MovieContext } from './contexts/MovieContext';
import MovieView from './components/moviewView/MovieView';

const App: FC = () => {
  const { isMovieView } = useContext(MovieContext);

  return (
    <>
      <Header>{isMovieView ? <MovieView /> : <Search />}</Header>
      <Layout>
        <Content />
      </Layout>
    </>
  );
};

export default App;
