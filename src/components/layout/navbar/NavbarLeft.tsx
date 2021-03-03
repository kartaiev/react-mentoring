import React, { FC } from 'react';
import { TabList, Tab } from '@chakra-ui/react';
import { MENU_LEFT } from '../../../lib';
import tw from 'twin.macro';
import NavbarRight from './NavbarRight';

const NavbarLeft: FC = () => {
  const leftMenuList = MENU_LEFT.map((item, i) => <Tab key={i}>{item}</Tab>);

  return (
    <TabList display="flex" justifyContent="space-between">
      <MenuListContainer>{leftMenuList}</MenuListContainer>
      <NavbarRight />
    </TabList>
  );
};

export default NavbarLeft;

const MenuListContainer = tw.div`flex w-1/2`;
