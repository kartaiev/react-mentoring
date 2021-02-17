import React, { FC } from 'react';
import tw from 'twin.macro';
import Face from './assets/images/nose.jpg';

const App: FC = () => (
  <Container>
    <Title>This is:</Title>
    <img src={Face} alt="me" />
  </Container>
);

export default App;

const Title = tw.h1`text-5xl text-gray-700 p-6`;
const Container = tw.div`flex flex-col items-center`;
