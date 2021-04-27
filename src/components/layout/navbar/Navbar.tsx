import React, { FC, useContext } from 'react';
import { Tabs } from '@chakra-ui/react';
import NavbarLeft from './NavbarLeft';
import { MovieContext } from '../../../contexts/MovieContext';

const Navbar: FC = () => {
  const { initialTabIndex } = useContext(MovieContext);

  return (
    <>
      <Tabs
        defaultIndex={initialTabIndex}
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
