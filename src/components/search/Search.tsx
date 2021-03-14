import React, { FC, useContext } from 'react';
import tw from 'twin.macro';
import { GLOBAL, SEARCH } from '../../lib';
import { ButtonDanger, SearchInput } from '../../elements';
import { MovieContext } from '../../contexts/MovieContext';
import { useField } from '../../hooks';

const Search: FC = () => {
  const { getAllMovies } = useContext(MovieContext);

  const searchField = useField();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    getAllMovies('s', searchField.value);

    searchField.setValue('');
  };

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <TitleInput>
        <SearchTitle>{SEARCH.TITLE}</SearchTitle>
        <SearchInput
          placeholder={SEARCH.PLACEHOLDER}
          searchField={searchField}
        />
      </TitleInput>
      <ButtonDanger btnName={GLOBAL.SEARCH} type="submit" />
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = tw.form`w-full h-24 absolute top-1/3 left-0 flex justify-between z-30 px-32`;
const TitleInput = tw.div`w-4/5 h-40 flex flex-col justify-between items-start`;
const SearchTitle = tw.h1`text-6xl z-20 text-gray-50 font-logoAlt`;
