import React, { FC } from 'react';
import Layout from './components/layout/Layout';
import Header from './components/header/Header';
import Content from './components/content/Content';

const App: FC = () => (
  <>
    <Header />
    <Layout>
      <Content />
    </Layout>
  </>
);

export default App;
