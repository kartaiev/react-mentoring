import React, { FC, ReactNode } from 'react';
import tw from 'twin.macro';
import img from '../../assets/images/header-image.jpg';

type Props = {
  children: ReactNode;
};

const Header: FC<Props> = ({ children }: Props) => (
  <HeaderContainer
    style={{
      backgroundImage: `url(${img})`
    }}
  >
    {children}
  </HeaderContainer>
);

export default Header;

const before =
  'before:(content absolute w-full h-full top-0 right-0 bg-black bg-opacity-80 bg-blur-md)';
const HeaderContainer = tw.header`w-full h-half flex flex-col justify-between absolute top-0 right-0 bg-no-repeat bg-center bg-cover ${before}`;
