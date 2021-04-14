import React, { FC } from 'react';
import tw from 'twin.macro';

const ErrorPage: FC = () => {
  return <Error>404</Error>;
};

export default ErrorPage;

const Error = tw.div`flex items-center justify-center font-logo text-danger text-9xl h-screen`;
