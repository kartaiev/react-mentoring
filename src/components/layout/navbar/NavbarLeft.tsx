import React, { FC } from 'react';
import { TabList, Tab } from '@chakra-ui/react';
import { MENU_LEFT } from '../../../lib';
import tw from 'twin.macro';
import NavbarRight from './NavbarRight';
import { useDispatch } from 'react-redux';
import { filterMovies, getMovies } from '../../../state/actions';

const NavbarLeft: FC = () => {
  const dispatch = useDispatch();

  const leftMenuList = MENU_LEFT.map((item, i) => (
    <Tab
      onClick={() => {
        item === 'ALL' ? dispatch(getMovies()) : dispatch(filterMovies(item));
      }}
      key={i}
    >
      {item}
    </Tab>
  ));

  return (
    <TabList display="flex" justifyContent="space-between">
      <MenuListContainer>{leftMenuList}</MenuListContainer>
      <NavbarRight />
    </TabList>
  );
};

export default NavbarLeft;

const MenuListContainer = tw.div`flex w-1/2`;
