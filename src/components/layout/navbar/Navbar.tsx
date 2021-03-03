import React, { FC } from 'react';
import { Tabs } from '@chakra-ui/react';
import NavbarLeft from './NavbarLeft';

const Navbar: FC = () => {
  return (
    <>
      <Tabs
        variant="line"
        colorScheme="pink"
        _focus={{ outline: 'none' }}
        size="lg"
      >
        <NavbarLeft />
      </Tabs>
    </>
  );
};

export default Navbar;
