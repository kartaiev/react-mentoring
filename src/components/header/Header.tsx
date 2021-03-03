import React, { FC } from 'react';
import tw from 'twin.macro';
import Top from './Top';
import Search from './Search';
import img from '../../assets/images/header-image.jpg';

const Header: FC = () => (
  <HeaderContainer
    style={{
      backgroundImage: `url(${img})`
    }}
  >
    <Top />
    <Search />
  </HeaderContainer>
);

export default Header;

const before =
  'before:(content absolute w-full h-full top-0 right-0 bg-black bg-opacity-80 bg-blur-md)';
const HeaderContainer = tw.header`w-full h-half flex flex-col justify-between absolute top-0 right-0 bg-no-repeat bg-center bg-cover ${before}`;
