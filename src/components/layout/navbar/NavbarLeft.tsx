import React, { FC, useEffect } from 'react';
import { TabList, Tab } from '@chakra-ui/react';
import { MENU_LEFT } from '../../../lib';
import tw from 'twin.macro';
import NavbarRight from './NavbarRight';
import { useDispatch } from 'react-redux';
import { filterMovies } from '../../../state/actions';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

const NavbarLeft: FC = () => {
  const { push } = useHistory();
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    MENU_LEFT.map((genre) => {
      location.pathname === `${url}/${genre}` && dispatch(filterMovies(genre));
    });
  }, [location]);

  const leftMenuList = MENU_LEFT.map((genre) => {
    return (
      <Tab
        onClick={() => {
          genre === 'ALL' ? push(`${url}`) : push(`${url}/${genre}`);
        }}
        key={genre}
      >
        {genre}
      </Tab>
    );
  });

  return (
    <TabList display="flex" justifyContent="space-between">
      <MenuListContainer>{leftMenuList}</MenuListContainer>
      <NavbarRight />
    </TabList>
  );
};

export default NavbarLeft;

const MenuListContainer = tw.div`flex w-1/2`;
