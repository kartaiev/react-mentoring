import React, { FC, useContext, useEffect } from 'react';
import { TabList, Tab } from '@chakra-ui/react';
import { MENU_LEFT } from '../../../lib';
import tw from 'twin.macro';
import NavbarRight from './NavbarRight';
import { useDispatch } from 'react-redux';
import { filterMovies } from '../../../state/actions';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { MovieContext } from '../../../contexts/MovieContext';

const NavbarLeft: FC = () => {
  const { push } = useHistory();
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const { genre, setInitialTabIndex } = useContext(MovieContext);

  useEffect(() => {
    dispatch(filterMovies(genre));
  }, [genre]);

  const leftMenuList = MENU_LEFT.map((item, i) => {
    return (
      <Tab
        onClick={() => {
          item === 'ALL' ? push(`${url}`) : push(`${url}/${item}`);
        }}
        key={i}
      >
        {item}
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
