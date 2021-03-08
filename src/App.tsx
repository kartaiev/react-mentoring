import React, { FC } from 'react';
import Layout from './components/layout/Layout';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Top from './components/header/Top';
import Search from './components/header/Search';

const App: FC = () => (
  <>
    <Header>
      <Top />
      <Search />
    </Header>
    <Layout>
      <Content />
    </Layout>
  </>
);

export default App;
