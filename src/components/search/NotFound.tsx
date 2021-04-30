import React, { FC } from 'react';
import tw from 'twin.macro';

const NotFound: FC = () => {
  return <Nothing>MOVIES NOT FOUND</Nothing>;
};

export default NotFound;

const Nothing = tw.div`flex items-center justify-center font-logoAlt text-gray-50 text-6xl h-full w-full`;
