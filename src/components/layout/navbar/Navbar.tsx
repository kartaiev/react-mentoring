import React, { FC, useContext, useEffect } from 'react';
import { Tabs } from '@chakra-ui/react';
import NavbarLeft from './NavbarLeft';
import { MovieContext } from '../../../contexts/MovieContext';
import { MENU_LEFT } from '../../../lib';

const Navbar: FC = () => {
  const { initialTabIndex, setInitialTabIndex, genre } = useContext(
    MovieContext
  );

  useEffect(() => {
    genre && setInitialTabIndex(MENU_LEFT.indexOf(genre));
  }, []);

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
