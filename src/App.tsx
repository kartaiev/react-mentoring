import React, { FC } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Header from './components/header/Header';
import Content from './components/content/Content';
import ErrorPage from './components/ErrorPage';

const App: FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/movies" />
        </Route>
        <Route path="/movies">
          <Header />
          <Layout>
            <Content />
          </Layout>
        </Route>
        <Route path="/404">
          <ErrorPage />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </>
  );
};

export default App;
