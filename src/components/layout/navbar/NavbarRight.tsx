import React, { FC } from 'react';
import { GLOBAL, MENU_SELECT } from '../../../lib';
import { Select } from '@chakra-ui/react';
import tw from 'twin.macro';

const NavbarRight: FC = () => {
  return (
    <MenuRightContainer>
      <SortBy>{GLOBAL.SORT_BY}:</SortBy>
      <Select w={48} pt={0.5} size="lg" variant="unstyled">
        {MENU_SELECT.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </Select>
    </MenuRightContainer>
  );
};

export default NavbarRight;

const MenuRightContainer = tw.div`flex w-72 items-center justify-between`;
const SortBy = tw.div`text-textAlt text-gray-400 text-lg`;
