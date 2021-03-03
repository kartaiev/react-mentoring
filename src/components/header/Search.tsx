import React, { FC } from 'react';
import tw from 'twin.macro';
import { GLOBAL } from '../../lib';
import { ButtonDanger, SearchInput } from '../../elements';

const Search: FC = () => (
  <SearchContainer>
    <TitleInput>
      <SearchTitle>{GLOBAL.SEARCH_TITLE}</SearchTitle>
      <SearchInput placeholder="what do you want to watch?" />
    </TitleInput>
    <ButtonDanger btnName={GLOBAL.SEARCH} />
  </SearchContainer>
);

export default Search;

const SearchContainer = tw.div`w-full h-24 absolute top-1/3 left-0 flex justify-between z-30 px-32`;
const TitleInput = tw.div`w-4/5 h-40 flex flex-col justify-between items-start`;
const SearchTitle = tw.h1`text-6xl z-20 text-gray-50 font-logoAlt`;
