import React, { FC, ReactNode } from 'react';
import tw from 'twin.macro';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <MainContainer>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </MainContainer>
  );
};

export default Layout;

const MainContainer = tw.div`box-border px-12 overflow-hidden flex flex-col min-h-screen max-w-full bg-bgColor text-gray-50 pt-half`;
const Content = tw.main`flex-grow`;
